import {
  FacebookIcon,
  Heart,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Heart className="text-white h-8 w-8 mr-2" />
              <span className="font-heading font-bold text-xl">
                CareConnect Ontario
              </span>
            </div>
            <p className="text-gray-300 text-base">
              Making healthcare more accessible for all Ontarians through
              technology and innovation.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="text-xl" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  For Patients
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/#how-it-works"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      How it Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/booking"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Find a Specialist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Manage Appointments
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/referrals"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Referral Guide
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  For Providers
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/providers/join"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Join as a Specialist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/providers/dashboard"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Clinic Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/providers/integrations"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      EMR Integration
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/providers/pricing"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/accessibility"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Accessibility
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookies"
                      className="text-base text-gray-400 hover:text-white"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} CareConnect Ontario. All rights
            reserved. In partnership with Ontario Health.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
