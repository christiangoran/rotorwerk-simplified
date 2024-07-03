import Contact from "./Contact";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const Footer = () => {
  return (
    <footer className="m-4 bg-white rounded-lg shadow">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <a href="/">
            <span className="sr-only">RotorWerk</span>
            <Logo className="h-16 text-lime-950" />
          </a>
          <Contact />
          {/* <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul> */}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Rotorwerk Ingenieurdienstleistungen GmbH
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
