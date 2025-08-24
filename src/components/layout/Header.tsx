"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Bell,
  Heart,
  X,
  ChevronDown,
  Calendar,
  Users,
  BarChart3,
  User,
  Brain,
  MessageSquare,
  Camera,
  Scan,
  Shield,
  Clock,
  Send,
  ExternalLink,
  MapPin,
  CheckCircle,
  BookOpen,
  Navigation,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";
import { DarkModeToggle } from "@/components/DarkModeToggle";

const Header = () => {
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  console.log(session);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      await queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Heart className="text-primary-500 h-8 w-8 mr-2 stroke-[1.5]" />
              <Link href="/">
                <span className="font-heading font-bold text-xl text-primary-600">
                  CareConnect Ontario
                </span>
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/">
                <span
                  className={`${
                    pathname === "/"
                      ? "border-primary-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer`}
                >
                  Find Care
                </span>
              </Link>
              {session && (
                <>
                  {/* Appointments & Scheduling */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`${
                          ["/dashboard", "/reminders", "/waitlist"].includes(
                            pathname
                          )
                            ? "border-primary-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        Appointments
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>
                        <Link href="/dashboard">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            My Appointments
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/upload-referral">
                          <span className="flex items-center">
                            <Send className="h-4 w-4 mr-2" />
                            Upload Referral
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/reminders">
                          <span className="flex items-center">
                            <Bell className="h-4 w-4 mr-2" />
                            Reminders
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/waitlist">
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            Waitlists
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Analytics & Reports */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`${
                          ["/analytics"].includes(pathname)
                            ? "border-primary-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                      >
                        <BarChart3 className="h-4 w-4 mr-1" />
                        Analytics
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>
                        <Link href="/analytics">
                          <span className="flex items-center">
                            <BarChart3 className="h-4 w-4 mr-2" />
                            View Analytics
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/wait-time-demo">
                          <span className="flex items-center">
                            <Brain className="h-4 w-4 mr-2" />
                            AI Wait Time Prediction
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/twilio-sms">
                          <span className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            SMS Management
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/clinic-analytics">
                          <span className="flex items-center">
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Clinic Analytics
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/image-insights">
                          <span className="flex items-center">
                            <Camera className="h-4 w-4 mr-2" />
                            Medical Image Insights
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/document-scanner">
                          <span className="flex items-center">
                            <Scan className="h-4 w-4 mr-2" />
                            Document Scanner
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/referral-timeline">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            Referral Timeline
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/booking-validation">
                          <span className="flex items-center">
                            <Shield className="h-4 w-4 mr-2" />
                            Booking Validation
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/referral-report-sharing">
                          <span className="flex items-center">
                            <Send className="h-4 w-4 mr-2" />
                            Report Sharing
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/external-clinic-integration">
                          <span className="flex items-center">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            External Clinics
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/clinic-map">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            Clinic Map
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/appointment-confirmation?id=1">
                          <span className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Appointment Confirmation
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/patient-self-advocacy">
                          <span className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            Patient Self-Advocacy
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/verified-medical-resources">
                          <span className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Verified Medical Resources
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/smart-referral-matching">
                          <span className="flex items-center">
                            <Navigation className="h-4 w-4 mr-2" />
                            Smart Referral Matching
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Doctor Tools - Temporarily hidden until user roles are implemented */}
                  {/* {session.user?.isDoctor && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          className={`${
                            [
                              "/patients",
                              "/referrals",
                              "/doctor-dashboard",
                            ].includes(pathname)
                              ? "border-primary-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                          } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                        >
                          <Users className="h-4 w-4 mr-1" />
                          Doctor Tools
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>
                          <Link href="/patients">
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-2" />
                              Patient Management
                            </span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/referrals">
                            <span className="flex items-center">
                              <Heart className="h-4 w-4 mr-2" />
                              Referrals
                            </span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/doctor-dashboard">
                            <span className="flex items-center">
                              <BarChart3 className="h-4 w-4 mr-2" />
                              Doctor Dashboard
                            </span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/doctor-referral-workflow">
                            <span className="flex items-center">
                              <Brain className="h-4 w-4 mr-2" />
                              Referral Workflow
                            </span>
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )} */}

                  {/* Admin Portal - Temporarily hidden until user roles are implemented */}
                  {/* {session.user?.isAdmin && (
                    <Link href="/admin-dashboard">
                      <span
                        className={`${
                          pathname === "/admin-dashboard"
                            ? "border-primary-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                      >
                        <Settings className="h-4 w-4 mr-1" />
                        Admin
                      </span>
                    </Link>
                  )} */}
                </>
              )}
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-3">
            <DarkModeToggle />
            {session?.user ? (
              <>
                <button className="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:ring-offset-gray-800">
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" />
                </button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="ml-3 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                        {session.user.name?.[0] || "U"}
                      </div>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      {session.user.name}
                      <div className="text-xs text-gray-500 font-normal">
                        {session.user.email}
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          My Appointments
                        </span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Profile Settings
                        </span>
                      </Link>
                    </DropdownMenuItem>
                    {/* Admin Portal - Temporarily hidden until user roles are implemented */}
                    {/* {session.user.isAdmin && (
                      <DropdownMenuItem asChild>
                        <Link href="/admin-dashboard">
                          <span className="flex items-center">
                            <Settings className="h-4 w-4 mr-2" />
                            Admin Portal
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    )} */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex space-x-4">
                <Link href="/login">
                  <Button variant="ghost">Log in</Button>
                </Link>
                <Link href="/register">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/">
              <span
                className={`${
                  pathname === "/"
                    ? "bg-primary-50 border-primary-500 text-primary-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              >
                Find Care
              </span>
            </Link>
            {session?.user && (
              <>
                {/* Appointments Section */}
                <div className="border-l-4 border-gray-200 pl-3 pr-4 py-2">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Appointments
                  </div>
                  <Link href="/dashboard">
                    <span className="block py-1 text-sm text-gray-600 hover:text-gray-900">
                      My Appointments
                    </span>
                  </Link>
                  <Link href="/reminders">
                    <span className="block py-1 text-sm text-gray-600 hover:text-gray-900">
                      Reminders
                    </span>
                  </Link>
                  <Link href="/waitlist">
                    <span className="block py-1 text-sm text-gray-600 hover:text-gray-900">
                      Waitlists
                    </span>
                  </Link>
                </div>

                {/* Analytics Section */}
                <div className="border-l-4 border-gray-200 pl-3 pr-4 py-2">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Analytics
                  </div>
                  <Link href="/analytics">
                    <span className="block py-1 text-sm text-gray-600 hover:text-gray-900">
                      View Analytics
                    </span>
                  </Link>
                </div>

                {/* Doctor Tools Section - Temporarily hidden until user roles are implemented */}
                {/* {session.user.isDoctor && (
                  <div className="border-l-4 border-gray-200 pl-3 pr-4 py-2">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                      Doctor Tools
                    </div>
                    <Link href="/patients">
                      <span className="block py-1 text-sm text-gray-600 hover:text-gray-900">
                        Patient Management
                      </span>
                    </Link>
                    <Link href="/referrals">
                      <span className="block py-1 text-sm text-gray-600 hover:text-gray-900">
                        Referrals
                      </span>
                    </Link>
                    <Link href="/doctor-dashboard">
                      <span className="block py-1 text-sm text-gray-600 hover:text-gray-900">
                        Doctor Dashboard
                      </span>
                    </Link>
                  </div>
                )} */}

                {/* Admin Portal - Temporarily hidden until user roles are implemented */}
                {/* {session.user.isAdmin && (
                  <Link href="/admin-dashboard">
                    <span
                      className={`${
                        pathname === "/admin-dashboard"
                          ? "bg-primary-50 border-primary-500 text-primary-700"
                          : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                      } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                    >
                      Admin Portal
                    </span>
                  </Link>
                )} */}
              </>
            )}
          </div>
          {session?.user ? (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-primary-600 dark:text-primary-300 font-semibold">
                    {session.user.name?.[0] || "U"}
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                    {session.user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {session.user.email}
                  </div>
                </div>
                <div className="ml-auto flex items-center space-x-3">
                  <DarkModeToggle />
                  <button className="flex-shrink-0 bg-white dark:bg-gray-800 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:ring-offset-gray-800">
                    <span className="sr-only">View notifications</span>
                    <Bell className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link href="/profile">
                  <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                    Profile Settings
                  </span>
                </Link>
                <Link href="/dashboard">
                  <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                    My Appointments
                  </span>
                </Link>
                {/* Admin Portal - Temporarily hidden until user roles are implemented */}
                {/* {session.user.isAdmin && (
                  <Link href="/admin-dashboard">
                    <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                      Admin Portal
                    </span>
                  </Link>
                )} */}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Log out
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700 px-4 flex flex-col space-y-3">
              <div className="flex justify-center pb-3">
                <DarkModeToggle />
              </div>
              <Link href="/login">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button className="w-full">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
