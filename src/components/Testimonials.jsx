import { StarIcon } from "@heroicons/react/24/outline";

import icon from "../assets/icon-rotorwerk-1.png";
import icon2 from "../assets/icon-rotorwerk-2.webp";

const Testimonials = () => {
  return (
    <div className="relative flex px-4 py-32">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="grid justify-start flex-auto grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center max-w-xl mx-auto text-left md:pr-12">
          <div className="flex space-x-1">
            {[...Array(5)].map((star, index) => (
              <div key={index}>
                <StarIcon className="w-6 h-6 text-yellow-600" />
              </div>
            ))}
          </div>
          <blockquote className="mt-4 text-xl italic text-gray-600">
            “Keiner unserer Kollegen konnte sich tief genug einarbeiten, um ein
            wirtschaftliches Verfahren zu entwickeln. Wir haben das Büro von
            Rotorwerk durch einen gemeinsamen Kunden bei der Arbeit an einer
            Windturbine kennengelernt und schätzen gelernt. Dafür sind wir
            dankbar. Seit diesem gemeinsamen Start haben wir erfolgreich eine
            Reihe von Kundenprojekten zusammen abgeschlossen.”
          </blockquote>
          <div className="flex items-center mt-6 space-x-3">
            <img className="w-12 h-12 rounded-full" src={icon} alt="User" />
            <div className="text-left">
              <div className="text-base font-medium text-gray-900">
                Thorsten Loth
              </div>
              <div className="text-sm text-gray-500">
                Ingenieur bei Jencad.de
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center mx-auto text-left md:pl-12">
          <div className="flex space-x-1">
            {[...Array(5)].map((star, index) => (
              <div key={index}>
                <StarIcon className="w-6 h-6 text-yellow-600" />
              </div>
            ))}
          </div>
          <blockquote className="mt-4 text-xl italic text-gray-600">
            “Was wir an der Zusammenarbeit mit Rotorwerk besonders schätzen, ist
            der sehr angenehme persönliche Kontakt, die schnelle Problemanalyse
            und der lösungsorientierte und strukturierte Ansatz, basierend auf
            jahrelanger Erfahrung. Rotorwerk hat immer den richtigen Ansatz für
            spezielle Anforderungen gefunden. Wir konnten die für den
            Fortschritt des Projekts wichtigen Zwischenergebnisse mit Rotorwerk
            zeitnah und detailliert besprechen.”
          </blockquote>
          <div className="flex items-center mt-6 space-x-3">
            <img className="w-12 h-12 rounded-full" src={icon2} alt="User" />
            <div className="text-left">
              <div className="text-base font-medium text-gray-900">
                Mathias Grassow
              </div>
              <div className="text-sm text-gray-500">SCHOTTEL HYDRO GmbH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
