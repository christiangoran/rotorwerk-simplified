import Contact from "./Contact";
import { Logo } from "./Logo";
import { useLanguage } from "../context/LanguageContext";

const footerContent = {
  de: {
    about: "Über uns",
    privacyPolicy: "Datenschutz-Bestimmungen",
    licensing: "Lizenzierung",
    contact: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
  },
  en: {
    about: "About",
    privacyPolicy: "Privacy Policy",
    licensing: "Licensing",
    contact: "Contact",
    rights: "All Rights Reserved.",
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const content = footerContent[language];

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
              <Link to="/about" className="hover:underline me-4 md:me-6">
                {content.about}
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:underline me-4 md:me-6"
              >
                {content.privacyPolicy}
              </Link>
            </li>
            <li>
              <Link to="/licensing" className="hover:underline me-4 md:me-6">
                {content.licensing}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                {content.contact}
              </Link>
            </li>
          </ul> */}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Rotorwerk Ingenieurdienstleistungen GmbH
          </a>
          . {content.rights}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
