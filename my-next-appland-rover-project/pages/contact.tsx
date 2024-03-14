import React from "react";
import Layout from "./layout";

export default function Contact() {
  return (
    <Layout>
      <div
        className="bg-cover bg-center py-16 relative"
        style={{
          backgroundImage:
            "url('https://th-thumbnailer.cdn-si-edu.com/E3krJrbWME_2D07CO1PdJDtORW4=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/f2/94/f294516b-db3d-4f7b-9a60-ca3cd5f3d9b2/fbby1h_1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-[#00ff00] font-semibold tracking-wide uppercase mb-8">
                Contact Us
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Get In Touch With Adventure
              </p>
              <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
                At [Dealership Name], your journey towards adventure begins with
                a single step—or a single message. Whether you're looking to
                explore the rugged capabilities of the Land Rover Defender or
                simply want to find out more about our exclusive offers, we're
                here to guide you every step of the way.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">
                      Why reach out to us?
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-white">
                    Because every question, every detail matters when you're
                    choosing not just a vehicle, but a companion for your
                    adventures. From personalized consultations to test drives
                    that thrill, our team is dedicated to providing an
                    experience as premium as the vehicles we pride ourselves on.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">
                      Have a Question?
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-white">
                    Curious about customization options, financing solutions, or
                    the Defender's latest features? We're all ears—and
                    expertise. Fill out the contact form, drop us an email, or
                    give us a call. Better yet, if you're in the neighborhood,
                    why not stop by? There's nothing we love more than talking
                    Land Rover Defender and helping dreams hit the road.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Connect With Us Today
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Let's make your Land Rover Defender aspirations a reality. Get in
              touch now and let the adventure begin!
            </p>
          </div>
          <div className="mt-12">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md focus:border-black"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md focus:border-black"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md focus:border-black"
                    required
                    maxLength="1000"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#004225] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
