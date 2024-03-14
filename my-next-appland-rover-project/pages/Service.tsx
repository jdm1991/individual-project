import React from "react";
import Layout from "./layout";
import Link from "next/link";

export default function ServicePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center py-16 relative"
        style={{
          backgroundImage: "url('/workshop.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-[#00ff00] font-semibold tracking-wide uppercase mb-8">
                Service & Maintenance
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Keeping Your Land Rover Defender Adventure-Ready
              </p>
              <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
                At [Dealership Name], we understand that your Land Rover
                Defender is more than just a vehicle; it's a symbol of your
                adventurous spirit. That's why we offer comprehensive service
                and maintenance to keep your Defender in top condition, no
                matter where the road takes you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#004225] mb-4">
                Routine Maintenance
              </h3>
              <p className="text-gray-600 mb-4">
                Keep your Defender running smoothly with our comprehensive
                routine maintenance services, including oil changes, tire
                rotations, and multi-point inspections.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#004225] mb-4">
                Repair Services
              </h3>
              <p className="text-gray-600 mb-4">
                From minor repairs to major overhauls, our skilled technicians
                have the expertise to tackle any issue your Land Rover Defender
                may encounter.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#004225] mb-4">
                Diagnostics
              </h3>
              <p className="text-gray-600 mb-4">
                Our state-of-the-art diagnostic tools help us quickly identify
                and resolve any problems, ensuring your Land Rover Defender is
                running at peak performance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-[#004225] mb-4">
                Genuine Parts
              </h3>
              <p className="text-gray-600 mb-4">
                We use only genuine Land Rover parts to ensure the best fit,
                performance, and reliability for your vehicle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Parts Section */}
      <div className="bg-[#004225] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="/engine.jpeg"
                alt="Land Rover Parts"
                className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
                Genuine Parts, Uncompromised Quality
              </h2>
              <p className="text-white text-lg mb-4">
                We source our parts directly from Land Rover, ensuring the
                highest quality and reliability for your vehicle. With a vast
                inventory of genuine parts, we can service and repair any Land
                Rover Defender model efficiently.
              </p>
              <p className="text-white text-lg mb-4">
                From replacing worn components to customizing your Defender with
                the latest accessories, our team of experts will guide you
                through the process, ensuring your vehicle remains in top
                condition.
              </p>
              <div className="flex justify-end">
                <Link href="/contact">
                  <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="/Experience.jpeg"
                alt="Land Rover Experience"
                className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                Unparalleled Experience
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Our team of certified technicians has years of experience
                working exclusively on Land Rover vehicles. We stay up-to-date
                with the latest technologies and techniques to provide the best
                possible service for your Land Rover Defender.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                From routine maintenance to complex repairs, you can trust our
                expertise to keep your Defender in prime condition, no matter
                the challenge.
              </p>
              <div className="flex justify-end">
                <Link href="/contact">
                  <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                "The team at [Dealership Name] treated my Land Rover Defender
                with the utmost care and attention to detail. Their expertise
                and genuine passion for these vehicles really shines through."
              </p>
              <p className="text-[#004225] font-bold">- John D.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                "I've never experienced such exceptional service. They went
                above and beyond to ensure my Land Rover Defender was running at
                its best, and their commitment to using only genuine parts gives
                me peace of mind."
              </p>
              <p className="text-[#004225] font-bold">- Sarah W.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">
                "From the moment I walked in, the team was friendly and
                knowledgeable. I trust them completely with my Land Rover
                Defender, and I know they'll keep it adventure-ready for years
                to come."
              </p>
              <p className="text-[#004225] font-bold">- Michael T.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

