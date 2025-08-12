import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
//import { useLocation } from "wouter";
import { Stethoscope, User, Shield, Clock } from "lucide-react";
import Link from "next/link";

export default function Landing() {
  // const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  CareConnect Ontario
                </h1>
                <p className="text-sm text-gray-600">
                  Healthcare Referral & Booking Platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to CareConnect Ontario
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Streamlining healthcare access across Ontario with AI-assisted
            referrals, seamless appointment booking, and integrated EMR systems.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>PHIPA/HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Real-time Integration</span>
            </div>
          </div>
        </div>

        {/* Portal Selection */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Physician Portal */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                Physician Portal
              </CardTitle>
              <CardDescription className="text-gray-600">
                Access patient management, voice dictation, referral creation,
                and clinical tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>AI-Powered Voice Dictation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Automatic Referral Generation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Patient Management Dashboard</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>EMR System Integration</span>
                </li>
              </ul>
              <Link href="/login?role=doctor">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  👨‍⚕️ Physician Sign In
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Patient Portal */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-300">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                Patient Portal
              </CardTitle>
              <CardDescription className="text-gray-600">
                Book specialist appointments, manage referrals, and access
                healthcare services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Specialist Appointment Booking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Referral Status Tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Appointment Reminders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Secure Messaging</span>
                </li>
              </ul>
              <Link href="/login?role=patient">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  🧍 Patient Sign In
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Powered by Advanced Healthcare Technology
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI Assistant</h4>
              <p className="text-sm text-gray-600">
                Smart referral detection and automated specialist matching
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Secure & Compliant
              </h4>
              <p className="text-sm text-gray-600">
                Full PHIPA/HIPAA compliance with audit logging
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Real-time Integration
              </h4>
              <p className="text-sm text-gray-600">
                Seamless connection with TELUS Health and Jane App
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
