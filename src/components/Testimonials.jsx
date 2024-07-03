import { StarIcon } from "@heroicons/react/24/outline";
import icon from "../assets/icon-rotorwerk-1.png";
import icon2 from "../assets/icon-rotorwerk-2.webp";
import { useLanguage } from "../context/LanguageContext";

const testimonialsContent = {
  de: [
    {
      stars: 5,
      text: "“Keiner unserer Kollegen konnte sich tief genug einarbeiten, um ein wirtschaftliches Verfahren zu entwickeln. Wir haben das Büro von Rotorwerk durch einen gemeinsamen Kunden bei der Arbeit an einer Windturbine kennengelernt und schätzen gelernt. Dafür sind wir dankbar. Seit diesem gemeinsamen Start haben wir erfolgreich eine Reihe von Kundenprojekten zusammen abgeschlossen.”",
      author: "Thorsten Loth",
      role: "Ingenieur bei Jencad.de",
      image: icon,
    },
    {
      stars: 5,
      text: "“Was wir an der Zusammenarbeit mit Rotorwerk besonders schätzen, ist der sehr angenehme persönliche Kontakt, die schnelle Problemanalyse und der lösungsorientierte und strukturierte Ansatz, basierend auf jahrelanger Erfahrung. Rotorwerk hat immer den richtigen Ansatz für spezielle Anforderungen gefunden. Wir konnten die für den Fortschritt des Projekts wichtigen Zwischenergebnisse mit Rotorwerk zeitnah und detailliert besprechen.”",
      author: "Mathias Grassow",
      role: "SCHOTTEL HYDRO GmbH",
      image: icon2,
    },
  ],
  en: [
    {
      stars: 5,
      text: "“None of our colleagues could delve deep enough to develop a cost-effective process. We got to know and appreciate Rotorwerk's office through a mutual client working on a wind turbine. For that, we are grateful. Since this joint start, we have successfully completed a number of client projects together.”",
      author: "Thorsten Loth",
      role: "Engineer at Jencad.de",
      image: icon,
    },
    {
      stars: 5,
      text: "“What we particularly appreciate about working with Rotorwerk is the very pleasant personal contact, the quick problem analysis, and the solution-oriented and structured approach based on years of experience. Rotorwerk has always found the right approach for special requirements. We were able to discuss the interim results, which were important for the progress of the project, with Rotorwerk promptly and in detail.”",
      author: "Mathias Grassow",
      role: "SCHOTTEL HYDRO GmbH",
      image: icon2,
    },
  ],
};

const Testimonials = () => {
  const { language } = useLanguage();
  const content = testimonialsContent[language];

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
        {content.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center max-w-xl mx-auto text-left md:pr-12"
          >
            <div className="flex space-x-1">
              {[...Array(testimonial.stars)].map((_, index) => (
                <div key={index}>
                  <StarIcon className="w-6 h-6 text-yellow-600" />
                </div>
              ))}
            </div>
            <blockquote className="mt-4 text-xl italic text-gray-600">
              {testimonial.text}
            </blockquote>
            <div className="flex items-center mt-6 space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt="User"
              />
              <div className="text-left">
                <div className="text-base font-medium text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
