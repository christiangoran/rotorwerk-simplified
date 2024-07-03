import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

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
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-200 shadow-lg">
      <div className="container flex flex-col items-center justify-between px-6 py-4 mx-auto md:flex-row">
        <p className="text-left text-gray-600">
          Diese Website verwendet Cookies, um sicherzustellen, dass Sie die
          bestmögliche Erfahrung auf unserer Website erzielen. Sehen unser {""}{" "}
          <a
            href="/rotorwerk-simplified/impressum"
            className="underline text-lime-800"
          >
            Datenschutz
          </a>{" "}
          für mehr Informationen.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={acceptCookies}
            className="rounded-md bg-lime-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
          >
            Akzeptieren
          </button>
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-gray-600 transition-colors hover:text-gray-400"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
