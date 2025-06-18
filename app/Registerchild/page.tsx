import React from 'react'
import Link from 'next/link'

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register a Birth Certificate</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/Login" className="font-medium text-purple-600 hover:text-purple-500">
              Sign in
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-8" action="#" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Child's Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Child's Information</h3>
              
              <div>
                <label htmlFor="childName" className="block text-sm font-medium text-gray-700">Child's Name</label>
                <input 
                  type="text" 
                  id="childName" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input 
                  type="number" 
                  id="weight" 
                  step="0.01" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500" 
                  required
                />
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select 
                  id="gender" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input 
                  type="date" 
                  id="dob" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500" 
                  required
                />
              </div>

              <div>
                <label htmlFor="timeOfBirth" className="block text-sm font-medium text-gray-700">Time of Birth</label>
                <input 
                  type="time" 
                  id="timeOfBirth" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500" 
                  required
                />
              </div>
            </div>

            {/* Parents Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Parents' Information</h3>
              
              <div>
                <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">Mother's Name</label>
                <input 
                  type="text" 
                  id="motherName" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500" 
                  required
                />
              </div>

              <div>
                <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">Father's Name</label>
                <input 
                  type="text" 
                  id="fatherName" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500" 
                />
              </div>

              <div>
                <label htmlFor="stateOfOrigin" className="block text-sm font-medium text-gray-700">State of Origin</label>
                <input 
                  type="text" 
                  id="stateOfOrigin" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500" 
                  required
                />
              </div>

              <div>
                <label htmlFor="localGovt" className="block text-sm font-medium text-gray-700">Local Government</label>
                <input 
                  type="text" 
                  id="localGovt" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500" 
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500" 
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Parents' Address</label>
            <textarea 
              id="address" 
              rows={3} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-purple-500 group-hover:text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage