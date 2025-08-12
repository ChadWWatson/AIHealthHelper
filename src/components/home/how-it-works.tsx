import {
  Upload,
  MapPin,
  CalendarCheck,
  Bell,
  History,
  Star,
} from "lucide-react";

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase font-heading">
            Simple Process
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-heading">
            Finding specialist care has never been easier
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Skip the phone calls and paperwork. CareConnect Ontario streamlines
            the entire process.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <Upload className="h-6 w-6" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  1. Upload Your Referral
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Simply upload your doctor&apos;s referral or select the type
                  of specialist you need to see.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  2. Find Nearby Options
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Our AI matches you with specialists in your area, sorting by
                  soonest availability.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <CalendarCheck className="h-6 w-6" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  3. Book Appointment
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Select your preferred time and book instantly. Receive
                  confirmation immediately.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <Bell className="h-6 w-6" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  4. Get Reminders
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We&apos;ll send you helpful reminders before your appointment
                  via email or SMS.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <History className="h-6 w-6" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  5. Manage Your Care
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Track all your past, current, and upcoming appointments in one
                  place.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <Star className="h-6 w-6" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  6. Rate Your Experience
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Help other patients by providing feedback on your specialist
                  visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
