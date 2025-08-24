import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

type ApiRequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: string;
  headers?: Record<string, string>;
};

export async function apiRequest(
  url: string,
  options: ApiRequestOptions = {}
): Promise<unknown> {
  const { method = "GET", body, headers = {} } = options;

  const requestHeaders = {
    ...(body ? { "Content-Type": "application/json" } : {}),
    ...headers,
  };

  const res = await fetch(url, {
    method,
    headers: requestHeaders,
    body,
    credentials: "include",
  });

  try {
    await throwIfResNotOk(res);
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }

  // For DELETE requests or endpoints that don't return data
  if (res.status === 204 || method === "DELETE") {
    return { success: true };
  }

  // Try to parse JSON if there's content
  try {
    return await res.json();
  } catch (e) {
    // Return the raw response if it's not JSON
    return res;
  }
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
