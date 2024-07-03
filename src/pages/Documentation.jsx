import { WrenchIcon } from "@heroicons/react/20/solid";
import tools from "../assets/tools.webp";
import { useLanguage } from "../context/LanguageContext";

const content = {
  de: {
    techDoc: "Tech. Doc.",
    title: "Technische Dokumentation und Erstellung von Schulungsunterlagen",
    intro1:
      "Unsere Mitarbeiter verfügen über langjährige Erfahrung im Bereich Technische Dokumentation - sowohl, was die Erstellung firmeninterner Arbeitsanleitungen und Checklisten angeht, also auch in Bezug auf Bedienungsanleitungen und Handbücher für Kunden oder Verbraucher.",
    intro2:
      "Bei der Erstellung von Schulungsunterlagen greifen wir auf hauseigene didaktische und redaktionelle Kompetenzen zurück, auf Wunsch auch in Kombination mit entsprechender Gestaltung.",
    services: "Unsere Leistungen",
    serviceItems: [
      "Erstellen technischer Dokumentationen (Arbeitsanleitungen, Instruktionen und Protokolle) für den internen Gebrauch",
      "Erstellen von Bedienungsanleitungen für Kunden bis hin zum fertigen Layout",
      "Inhaltliche und redaktionelle Überarbeitung bestehender Dokumente",
      "Betreuung von interner Firmendokumentation (in deutscher und englischer Sprache)",
      "Erstellung von Bilddokumentationen, Bildbearbeitung",
      "Erstellung von Lehrmateria und Schulungsunterlagen für Ihre Mitarbeiter bzw. Kunden",
    ],
  },
  en: {
    techDoc: "Tech. Doc.",
    title: "Technical Documentation and Creation of Training Materials",
    intro1:
      "Our employees have many years of experience in the field of technical documentation - both in the creation of internal work instructions and checklists, as well as in operating instructions and manuals for customers or consumers.",
    intro2:
      "When creating training materials, we draw on in-house didactic and editorial skills, if desired also in combination with appropriate design.",
    services: "Our Services",
    serviceItems: [
      "Creating technical documentation (work instructions, instructions, and protocols) for internal use",
      "Creating operating instructions for customers up to the final layout",
      "Content and editorial revision of existing documents",
      "Maintenance of internal company documentation (in German and English)",
      "Creation of image documentation, image editing",
      "Creation of teaching materials and training materials for your employees or customers",
    ],
  },
};

export default function Documentation() {
  const { language } = useLanguage();
  const langContent = content[language];

  return (
    <div className="relative px-6 pt-24 overflow-hidden text-left bg-white isolate sm:pt-32 lg:overflow-visible lg:px-0">
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
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-yellow-600">
                {langContent.techDoc}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {langContent.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {langContent.intro1}
              </p>
              <p className="mt-12 leading-8 text-gray-700">
                {langContent.intro2}
              </p>
            </div>
          </div>
        </div>

        <div className="p-12 -mt-12 -ml-12 pb-50 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="md:h-screen object-cover w-[48rem] max-w-300 max-h-1000 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={tools}
            alt="Tools lying on a desk"
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-0 text-2xl font-bold tracking-tight text-gray-900">
                {langContent.services}
              </h2>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {langContent.serviceItems.map((item, index) => (
                  <li key={index} className="flex gap-x-3">
                    <WrenchIcon
                      className="flex-none w-5 h-5 mt-1 text-lime-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        {item}
                      </strong>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
