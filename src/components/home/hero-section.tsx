import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative bg-primary-600">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Healthcare professional with patient"
          className="w-full h-full object-cover object-center opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white font-heading sm:text-5xl lg:text-6xl">
          Simplified Specialist Care in Ontario
        </h1>
        <p className="mt-6 text-xl text-primary-50 max-w-3xl">
          Book specialist appointments and diagnostic tests easily, based on
          your doctor&apos;s referral. Find the right care in the right place at
          the right time.
        </p>
        <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
          <div>
            <Link href="#booking-section">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-700 hover:bg-primary-50 w-full sm:w-auto"
              >
                Find Care Now
              </Button>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="text-white bg-primary-500 bg-opacity-60 hover:bg-opacity-70 border-transparent w-full sm:w-auto"
              >
                How it Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
