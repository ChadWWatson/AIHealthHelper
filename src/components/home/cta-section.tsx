import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="bg-primary-700 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white font-heading sm:text-4xl">
            <span className="block">Ready to simplify your healthcare?</span>
            <span className="block text-primary-200">
              Join thousands of Ontarians using CareConnect.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-primary-50"
                >
                  Sign Up Now
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="#how-it-works">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-600 text-white hover:bg-primary-500"
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
