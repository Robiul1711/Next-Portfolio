import React from 'react'

const ContactAddress = () => {
  return (
         
        <div>
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#111] mb-6">
            <span className="text-2xl">📧</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact us</h1>

          {/* Subtitle */}
          <p className="text-gray-400 max-w-md">
            We are always looking for ways to improve our products and services.
            Contact us and let us know how we can help you.
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-2 text-gray-300">
            <p>contact@yoursaas.ai</p>
            <p>+1 (800) 123 XX21</p>
            <p>support@yoursaas.ai</p>
          </div>

          {/* Map */}
          <div className="relative mt-12">
            <img
              src="/images/worldmap.png"
              alt="world map"
              className="w-full opacity-30"
            />

            {/* Glow Pin */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-10 flex flex-col items-center">
              <span className="bg-[#222] px-3 py-1 rounded-full text-sm mb-2 shadow">
                We are here
              </span>

              <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_6px_rgba(0,255,255,0.6)]"></div>
            </div>
          </div>
        </div>

  )
}

export default ContactAddress