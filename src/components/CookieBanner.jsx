import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useLanguage } from "../context/LanguageContext";

const cookieBannerContent = {
  de: {
    message:
      "Diese Website verwendet Cookies, um sicherzustellen, dass Sie die bestmögliche Erfahrung auf unserer Website erzielen. Sehen unser",
    message2: "für mehr Informationen.",
    privacyPolicy: "Datenschutz",
    accept: "Akzeptieren",
    decline: "Ablehnen",
  },
  en: {
    message:
      "This website uses cookies to ensure you get the best experience on our website. See our",
    message2: "for more information.",
    privacyPolicy: "privacy policy",
    accept: "Accept",
    decline: "Decline",
  },
};

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { language } = useLanguage();
  const content = cookieBannerContent[language];

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setShowBanner(false);
  };

  const declineCookies = () => {
    Cookies.set("cookieConsent", "declined", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-200 shadow-lg">
      <div className="container flex flex-col items-center justify-between px-6 py-4 mx-auto md:flex-row">
        <p className="text-left text-gray-600">
          {content.message}{" "}
          <a
            href="/rotorwerk-simplified/impressum"
            className="underline text-lime-800"
          >
            {content.privacyPolicy}
          </a>{" "}
          {content.message2}{" "}
        </p>
        <div className="flex space-x-4">
          <button
            onClick={acceptCookies}
            className="rounded-md bg-lime-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
          >
            {content.accept}
          </button>
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-gray-600 transition-colors hover:text-gray-400"
          >
            {content.decline}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
