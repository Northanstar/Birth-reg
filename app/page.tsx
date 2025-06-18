import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Birth Registration Portal</h1>
          <p className="text-xl md:text-2xl mb-8">Your Child's First Right — A Legal Identity</p>
          <Link href="/Register">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-md text-lg">
              Register Now
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Our Portal</h2>
          <p className="text-lg text-gray-700 mb-6">
            Birth registration is the first step in securing your child's legal identity and access to essential rights and services. 
            This portal is your one-stop destination for registering births quickly, securely, and conveniently.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <Link href="/Register" className="flex-1">
              <div className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors duration-200 text-center h-full">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">New Registration</h3>
                <p className="text-gray-700">Register a new birth certificate for your child</p>
              </div>
            </Link>
            <Link href="/Login" className="flex-1">
              <div className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors duration-200 text-center h-full">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Login</h3>
                <p className="text-gray-700">Access your account to check application status</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Register</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-700 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fill the Application</h3>
              <p className="text-gray-700">Enter the child's birth details (date, place, parents' information).</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-700 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Documents</h3>
              <p className="text-gray-700">Submit required documents (hospital record, parents' ID proofs).</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-700 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Submit & Verify</h3>
              <p className="text-gray-700">Review and submit your application for approval.</p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-700 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Receive Certificate</h3>
              <p className="text-gray-700">Download or collect the official birth certificate.</p>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-purple-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg text-gray-700">Hospital birth notification/record</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-purple-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg text-gray-700">Parents' government-issued IDs (e.g., national ID, passport)</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-purple-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg text-gray-700">Marriage certificate (if applicable)</span>
            </li>
          </ul>
          
          <div className="mt-8 p-4 bg-purple-50 rounded-lg">
            <div className="flex items-start">
              <svg className="h-6 w-6 text-purple-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Processing Time</h3>
                <p className="text-gray-700">Typically 7–14 working days after submission.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-700 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Register?</h2>
          <p className="text-xl mb-6">Secure your child's future with proper documentation</p>
          <Link href="/Register">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-md text-lg">
              Start Registration
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Birth Registration Portal</h3>
              <p className="text-gray-400">Securing identities, one birth at a time</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/About" className="hover:text-purple-400 transition-colors duration-200">About</Link>
              <Link href="/Contact" className="hover:text-purple-400 transition-colors duration-200">Contact</Link>
              <Link href="/Privacy" className="hover:text-purple-400 transition-colors duration-200">Privacy Policy</Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Birth Registration Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage