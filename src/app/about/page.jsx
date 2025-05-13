'use client'

import React from 'react'
import { MapPin, Mail, Phone, Clock, Award, Users, Globe } from 'lucide-react'

export default function AboutPageOne() {

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white text-gray-900">
      {/* Navigation Bar with Dark Mode Toggle */}
      

      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Section */}
        <div className="flex flex-col space-y-8 pb-10 pt-16 md:pt-24">
          <div className="max-w-max rounded-full bg-blue-50 border-blue-100 border p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">About Our Company</p>
          </div>
          <h1 className="text-3xl font-bold md:text-5xl md:leading-tight text-gray-900">
            Made with <span className="text-red-500">♥</span>, right here in <span className="text-blue-600">India</span>
          </h1>
          <p className="max-w-4xl text-base md:text-xl text-gray-600">
            Our comprehensive range of services, including GST and ITR filing and loan offerings, are designed to provide you with the support you need to manage your finances effectively. With our experienced team by your side, you can rest assured that your financial well-being is in good hands.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="p-6 rounded-xl bg-blue-50 transition-transform duration-300 hover:scale-105">
            <Award className="h-10 w-10 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">GST Filing</h3>
            <p className="text-gray-600">
              Professional assistance with GST filing to ensure compliance and avoid penalties.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-blue-50 transition-transform duration-300 hover:scale-105">
            <Users className="h-10 w-10 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">ITR Filing</h3>
            <p className="text-gray-600">
              Expert tax return preparation services for individuals and businesses.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-blue-50 transition-transform duration-300 hover:scale-105">
            <Globe className="h-10 w-10 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Loan Services</h3>
            <p className="text-gray-600">
              Comprehensive loan assistance to help you secure the best financial solutions.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full space-y-4 relative overflow-hidden rounded-xl">
          <img
            className="h-[300px] w-full object-cover md:h-[400px] transition-transform duration-500 hover:scale-105"
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt="Office Location Map"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-sm p-4">
            <p className="text-lg font-semibold">Our Office Location</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-gray-50 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg">
            <MapPin className="h-6 w-6 text-blue-600" />
            <p className="text-xl font-semibold">Our Address</p>
            <p className="text-gray-700">
              BISWANATH CHARIALI, SONITPUR ASSAM, 784176
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-gray-50 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg">
            <Phone className="h-6 w-6 text-blue-600" />
            <p className="text-xl font-semibold">Contact Number</p>
            <p className="text-gray-700">
              +91 9435266783
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-gray-50 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg">
            <Mail className="h-6 w-6 text-blue-600" />
            <p className="text-xl font-semibold">Email Address</p>
            <p className="text-gray-700">
              legal257rgvf@gmail.com
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-gray-50 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-3">
            <Clock className="h-6 w-6 text-blue-600" />
            <p className="text-xl font-semibold">ISO 9001:2015 R 24/7</p>
            <p className="text-gray-700">
              We pride ourselves on maintaining the highest standards of service quality through our ISO 9001:2015 certification, ensuring consistent and reliable service delivery around the clock.
            </p>
          </div>
        </div>

        <hr className="my-12 border-gray-200" />

        {/* Contact Us Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-12">
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
              Contact Us
            </div>
            
            <p className="text-base text-gray-600 md:text-lg mb-6">
              If you have any queries or concerns, please feel free to contact us. We believe in prioritizing our customers and are dedicated to addressing your needs and questions promptly.
            </p>
            
            <p className="text-base text-gray-600 md:text-lg mb-6">
              Our dedicated customer support team is always ready to assist you. Whether you have questions about our services, need help with an order, or require technical support, we are here to help.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="mailto:legal257rgvf@gmail.com" 
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-3 text-sm font-medium text-white transition-colors"
              >
                <Mail size={18} />
                Send Email
              </a>
              
              <a 
                href="tel:+919435266783" 
                className="inline-flex items-center gap-2 rounded-lg bg-gray-100 hover:bg-gray-200 px-4 py-3 text-sm font-medium transition-colors"
              >
                <Clock size={18} />
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww"
                alt="Contact Us"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}