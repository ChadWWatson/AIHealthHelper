"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const isPatient = role === "patient";
  const redirectTo = isPatient ? "/dashboard" : "/doctor-dashboard";
  if (isPatient) {
    return (
      <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="rounded-full mr-3">
              <Image
                src="/AIHH-Logo.png"
                alt="AI Health Helper"
                width={32}
                height={32}
              />
            </div>
            <div className="font-heading font-bold text-2xl text-gray-900">
              Patient Portal
            </div>
          </div>
          <div className="text-center text-gray-700 mb-4">
            Book appointments, view referrals, and manage your healthcare
          </div>
          <LoginForm patientMode={true} />
          <div className="text-center text-xs text-gray-500">
            Secure patient portal with PHIPA/HIPAA compliance.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex-shrink-0 flex items-center justify-center">
          <Heart className="text-primary-500 h-8 w-8 mr-2 stroke-[1.5]" />
          <div className="font-heading font-bold text-xl text-primary-600">
            CareConnect Ontario
          </div>
        </div>
        <LoginForm redirectTo={redirectTo} />
      </div>
    </div>
  );
}
