"use server";
import { auth } from "@/lib/auth";

interface SignInProps {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: SignInProps) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return {
      message: "Signed in successfully.",
      success: true,
    };
  } catch (error) {
    const e = error as Error;
    return {
      message: { error: e.message || "An unknown error occurred." },
      success: false,
    };
  }
};

interface SignUpProps {
  email: string;
  password: string;
  name: string;
}

export const signUp = async ({ email, password, name }: SignUpProps) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    return {
      message: "Signed up successfully.",
      success: true,
    };
  } catch (error) {
    const e = error as Error;
    return {
      message: { error: e.message || "An unknown error occurred." },
      success: false,
    };
  }
};
