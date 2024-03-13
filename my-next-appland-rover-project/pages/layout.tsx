import "../pages/layout.css";
import Link from "next/link";

export default function Layout({children}) {
    
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu?.classList.toggle("open");
        icon?.classList.toggle("open");
      }

      return (
        <>
          <nav id="header-bar">
            <ul className="header-list">
              <li>
                <Link href="/">Home</Link>
              </li>
            <li>
                <Link href="/vehicles">Vehicles</Link>
              </li>
              <li>
                <Link href="/accessories">Accessories</Link>
              </li>
              <li>
                <Link href="/owners">Owners</Link>
              </li>
              <li>
                <Link href="/explore">Explore</Link>
              </li>
            </ul>
            <div className="logo-container">
              <img
                className="header-logo"
                src="https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_562,y_397,w_5862,h_4389/w_392,h_294,c_fill/auto-client/58688494fc6b303f19a3ce260f5e9570/defender_logo.jpg"
                alt="Defender"
              />
            </div>
            <ul className="header-list-contact">
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <nav id="hamburger-nav">
            <div className="hamburger-menu">
              <div className="hamburger-icon" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="menu-links">
                <li>
                  <a href="#vehicles" onClick={toggleMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#vehicles" onClick={toggleMenu}>
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#vehicles" onClick={toggleMenu}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#vehicles" onClick={toggleMenu}>
                    Contact
                  </a>
                </li>
              </div>
            </div>
            <img
              className="hamburger-logo"
              src="https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_562,y_397,w_5862,h_4389/w_392,h_294,c_fill/auto-client/58688494fc6b303f19a3ce260f5e9570/defender_logo.jpg"
              alt="defender"
            />
          </nav>

        <main>{children}</main>

          <footer>
        <div className="footer-content">
          <div className="list-1">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#vehicles">Vehicles</a>
              </li>
              <li>
                <a href="#accessories">Accessories</a>
              </li>
              <li>
                <a href="#owners">Owners</a>
              </li>
              <li>
                <a href="#explore">Explore</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="business-hours">
            <h3>Business Hours</h3>
            <ul>
              <li>Mon 09:00 - 17:00</li>
              <li>Tue 09:00 - 17:00</li>
              <li>Wed 09:00 - 17:00</li>
              <li>Thu 09:00 - 17:00</li>
              <li>Fri 09:00 - 17:00</li>
              <li>Sat Appointment Only</li>
              <li>Sun Appointment Only</li>
            </ul>
          </div>
          <div className="socials">
            <ul>
              <li>
                <img
                  src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
                  alt="Facebook"
                />
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/X_logo_2023_original.svg/1200px-X_logo_2023_original.svg.png"
                  alt="X"
                />
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png"
                  alt="Instagram"
                />
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/1024px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png"
                  alt="Youtube"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="disclaimer">
          <p>
            Disclaimer: The information provided on this Land Rover website is
            for general informational purposes only. While we strive to keep the
            information up to date and accurate, we make no representations or
            warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability, or availability of the
            information contained on this website. Any reliance you place on
            such information is strictly at your own risk. GDPR Compliance: This
            website may collect and process personal data as described in our
            Privacy Policy. We are committed to protecting your privacy and
            complying with the General Data Protection Regulation (GDPR) and
            other relevant data protection laws. By using this website, you
            consent to the collection, processing, and use of your personal
            information as outlined in our Privacy Policy. Links to Third-Party
            Websites: This website may contain links to external websites that
            are not provided or maintained by Land Rover. We do not endorse or
            have control over the content, privacy policies, or practices of
            these websites. We encourage you to review the privacy policies of
            any third-party websites you visit. Copyright Notice: All content,
            including text, images, and graphics on this website, is the
            property of Land Rover or its licensors and is protected by
            copyright laws. Unauthorized use or reproduction of any content from
            this website is prohibited without prior written consent from Land
            Rover. Contact Information: If you have any questions or concerns
            about our disclaimer, GDPR compliance, or privacy practices, please
            contact us at [Contact Email] or [Contact Address]. Last Updated:
            [Date of Last Update]
          </p>
        </div>
      </footer>
    </>
      )
      }