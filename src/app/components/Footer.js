import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer pt-5 bg-gradient-to-br from-[#1a1c23] to-[#242730] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="footer-title text-white font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-[#ffd400]">
              About Us
            </h3>
            <ul className="footer-links list-none p-0">
              <li className="mb-4">
                <Link
                  href="/about"
                  className="text-[#b4b6bb] hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/team"
                  className="text-[#b4b6bb] hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/careers"
                  className="text-[#b4b6bb] hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="footer-title text-white font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-[#ffd400]">
              Quick Links
            </h3>
            <ul className="footer-links list-none p-0">
              <li className="mb-4">
                <Link
                  href="/services"
                  className="text-[#b4b6bb] hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Services
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/blog"
                  className="text-[#b4b6bb] hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/contact"
                  className="text-[#b4b6bb] hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="footer-title text-white font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-[#ffd400]">
              Quick Links
            </h3>
            <ul className="footer-links list-none p-0">
              <li className="mb-4">
                <Link
                  href="/services"
                  className="text-[#b4b6bb] hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Services
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/blog"
                  className="text-[#b4b6bb] hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/contact"
                  className="text-[#b4b6bb] hover:text-white hover:pl-2 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="footer-title text-white font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-8 after:h-0.5 after:bg-[#ffd400]">
              Follow Us
            </h3>
            <div className="social-links flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd400] hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd400] hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffd400] hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-8 py-4 text-center bg-black/20">
          <p className="text-sm">
            © 2025 Sara Shopy. All rights reserved. |{" "}
            <Link
              href="/privacy"
              className="text-[#ffd400] hover:text-white transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
