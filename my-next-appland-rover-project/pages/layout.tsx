import Link from "next/link";
import { useState } from "react";
import { BsDoorOpen } from "react-icons/bs";

export default function Layout({ children, isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50 h-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          <div className="flex-shrink-0 ml-2">
            <img
              className="h-24 w-auto"
              src="https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_562,y_397,w_5862,h_4389/w_392,h_294,c_fill/auto-client/58688494fc6b303f19a3ce260f5e9570/defender_logo.jpg"
              alt="Defender"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-800 hover:bg-gray-100 px-3 py-7 rounded-md text-lg font-medium"
              >
                Home
              </Link>
              <Link
                href="/vehicles"
                className="text-gray-800 hover:bg-gray-100 px-3 py-7 rounded-md text-lg font-medium"
              >
                Vehicles
              </Link>
              <Link
                href="/accessories"
                className="text-gray-800 hover:bg-gray-100 px-3 py-7 rounded-md text-lg font-medium"
              >
                Accessories
              </Link>
              <Link
                href="/Service"
                className="text-gray-800 hover:bg-gray-100 px-3 py-7 rounded-md text-lg font-medium"
              >
                Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:bg-gray-100 px-3 py-7 rounded-md text-lg font-medium mr-2"
              >
                Contact Us
              </Link>
              <div className="flex items-center hover:bg-gray-100 rounded-md">
                {isLoggedIn ? (
                  <Link
                    href="/admin"
                    className="text-gray-800 px-3 py-7 rounded-md text-lg font-medium"
                  >
                    Admin
                  </Link>
                ) : (
                  <Link
                    href="/portal"
                    className="text-gray-800 px-3 py-7 rounded-md text-lg font-medium"
                  >
                    Portal
                  </Link>
                )}
                <BsDoorOpen className="text-gray-800 text-2xl" />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/vehicles"
              className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Vehicles
            </Link>
            <Link
              href="/accessories"
              className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Accessories
            </Link>
            <Link
              href="/owners"
              className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Owners
            </Link>
            <Link
              href="/explore"
              className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Explore
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 border-t-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src="https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_562,y_397,w_5862,h_4389/w_392,h_294,c_fill/auto-client/58688494fc6b303f19a3ce260f5e9570/defender_logo.jpg"
                  className="h-32 w-auto"
                  alt="Defender Logo"
                />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-8 sm:grid-cols-3">
              <div className="text-center">
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
                  Services
                </h2>
                <ul className="text-gray-600 text-lg font-medium">
                  <li className="mb-4">Vehicles</li>
                  <li className="mb-4">Accessories</li>
                  <li className="mb-4">Owners</li>
                  <li className="mb-4">Explore</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="text-center">
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
                  Business Hours
                </h2>
                <ul className="text-gray-600 text-lg font-medium">
                  <li className="mb-4">Mon 09:00 - 17:00</li>
                  <li className="mb-4">Tue 09:00 - 17:00</li>
                  <li className="mb-4">Wed 09:00 - 17:00</li>
                  <li className="mb-4">Thu 09:00 - 17:00</li>
                  <li className="mb-4">Fri 09:00 - 17:00</li>
                  <li className="mb-4">Sat Appointment Only</li>
                  <li>Sun Appointment Only</li>
                </ul>
              </div>
              <div className="text-center">
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase">
                  Socials
                </h2>
                <ul className="flex flex-col items-center space-y-4">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <img
                        src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
                        alt="Facebook"
                        className="h-8 w-8"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/X_logo_2023_original.svg/1200px-X_logo_2023_original.svg.png"
                        alt="X"
                        className="h-8 w-8"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png"
                        alt="Instagram"
                        className="h-8 w-8"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/1024px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png"
                        alt="Youtube"
                        className="h-8 w-8"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-12 border-gray-200 w-full" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center mb-8 sm:mb-0">
              © 2023{" "}
              <a href="/" className="hover:underline">
                Defender
              </a>
              . All Rights Reserved.
            </span>
            <div className="mt-8 sm:mt-0">
              <p className="text-sm text-gray-500">
                Disclaimer: The information provided on this Land Rover website
                is for general informational purposes only. While we strive to
                keep the information up to date and accurate, we make no
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, suitability, or
                availability of the information contained on this website. Any
                reliance you place on such information is strictly at your own
                risk.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
