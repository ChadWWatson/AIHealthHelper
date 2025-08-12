"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function Login({ className, ...props }: React.ComponentProps<"button">) {
  const router = useRouter();

  const login = async () => {
    router.push("/login");
  };

  return (
    <Button onClick={login} className={cn("w-full", className)} {...props}>
      Login
    </Button>
  );
}
