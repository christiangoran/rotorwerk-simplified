import { WrenchIcon } from "@heroicons/react/20/solid";
import supplier from "../assets/suppliers.webp";
import { useLanguage } from "../context/LanguageContext";

const content = {
  de: {
    introTitle: "Wissen über die Akteure",
    mainTitle: "Auswahl von Zulieferern",
    description:
      "Auf der Basis unseres technischen Knowhow und langjähriger Branchenerfahrung stehen wir Ihnen beratend zur Seite, wenn es darum geht, den richtigen Zulieferer für einzelne WEA-Komponenten oder -Einbauteile zu finden.",
    servicesTitle: "Unsere Leistungen",
    services: [
      {
        title: "Auswahl des Herstellers",
        description:
          "oder Zulieferers entsprechend den Anforderungen des Bauteils",
      },
      {
        title: "Einholen von Angeboten",
        description: "verschiedener möglicher Zulieferer",
      },
      {
        title: "ökonomische und fachliche",
        description: "Bewertung vorliegender Angebote",
      },
      {
        title: "Beratung hinsichtlich",
        description:
          "zu berücksichtigender Aspekte im Verlauf des Kooperationsprozesses mit dem Zulieferer",
      },
      {
        title: "technische Abwicklung",
        description: "der Kooperation mit dem Zulieferer",
      },
    ],
  },
  en: {
    introTitle: "Knowledge of the actors",
    mainTitle: "Selection of suppliers",
    description:
      "Based on our technical know-how and many years of industry experience, we are at your side to advise you on finding the right supplier for individual WEA components or installation parts.",
    servicesTitle: "Our services",
    services: [
      {
        title: "Selection of the manufacturer",
        description:
          "or supplier according to the requirements of the component",
      },
      {
        title: "Obtaining offers",
        description: "from various potential suppliers",
      },
      {
        title: "Economic and technical",
        description: "evaluation of the offers received",
      },
      {
        title: "Advice on",
        description:
          "aspects to be considered in the course of the cooperation process with the supplier",
      },
      {
        title: "Technical handling",
        description: "of the cooperation with the supplier",
      },
    ],
  },
};

export default function Zulieferauswahl() {
  const { language } = useLanguage();
  const { introTitle, mainTitle, description, servicesTitle, services } =
    content[language];

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
      <div className="grid max-w-6xl grid-cols-1 gap-16 mx-auto lg:grid-cols-4">
        <div className="col-span-1 text-center lg:col-span-4">
          <p className="text-base font-semibold leading-7 text-yellow-600">
            {introTitle}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {mainTitle}
          </h1>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <p className="mt-6 text-xl leading-8 text-gray-700">{description}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {servicesTitle}
          </h2>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            {services.map((service, index) => (
              <li key={index} className="flex gap-x-3">
                <WrenchIcon
                  className="flex-none w-5 h-5 mt-1 text-lime-700"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    {service.title}
                  </strong>{" "}
                  {service.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <img
            className="object-cover w-[48rem] mt-10 max-w-500 max-h-1000 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={supplier}
            alt="Image of a wind powerplant"
          />{" "}
        </div>
      </div>

      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* ------------------ RIGHT ORIENTED IMAGE ELEMENT ------------------ */}
        <div className="p-12 -mt-12 -ml-12 pb-50 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"></div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
