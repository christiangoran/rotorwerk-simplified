import {
  WrenchScrewdriverIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  DocumentChartBarIcon,
  SquaresPlusIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const areas = [
  {
    title: "Konstruktion",
    description:
      "Wir bieten erstklassige mechanische Ingenieurdienstleistungen zur Konstruktion, Analyse und Optimierung komplexer Systeme. Unsere Lösungen sorgen für Effizienz, Zuverlässigkeit und Innovation in Ihren Projekten.",
    icon: WrenchScrewdriverIcon,
    to: "Konstruktion",
  },
  {
    title: "FEM",
    description:
      "Wir sind spezialisiert auf die Finite-Elemente-Analyse (FEM) zur Simulation und Optimierung mechanischer Systeme. Unsere fortschrittlichen Techniken sorgen für Präzision und Sicherheit in Ihren Projekten.",
    icon: ChartPieIcon,
    to: "Fem",
  },
  {
    title: "WEA-Entwicklung",
    description:
      "Unser Fachwissen in der WEA-Entwicklung treibt Innovationen im Bereich der Windenergielösungen voran. Wir entwerfen und optimieren Komponenten für maximale Effizienz und Zuverlässigkeit.",
    icon: ClipboardDocumentCheckIcon,
    to: "Wea",
  },
  {
    title: "Technische Dokumentation",
    description:
      "Wir erstellen umfassende technische Dokumentationen zur Unterstützung Ihrer Ingenieurprozesse. Unsere detaillierten Berichte sorgen für Compliance und verbessern die Projektklarheit.",
    icon: DocumentChartBarIcon,
    to: "Documentaion",
  },
  {
    title: "Betriebsfestigkeit",
    description:
      "Unsere Dienstleistungen zur Betriebsfestigkeitsanalyse bewerten die Haltbarkeit und Lebensdauer mechanischer Komponenten. Wir helfen Ihnen, potenzielle Ausfälle vorherzusehen und zu mindern, um langfristige Zuverlässigkeit zu gewährleisten.",
    icon: CubeTransparentIcon,
    to: "Betriebsfestigkeit",
  },
  {
    title: "Zuliefererauswahl",
    description:
      "Wir unterstützen Sie bei der Auswahl der besten Zulieferer für Ihre Ingenieurbedarfe. Unser Bewertungsprozess sorgt für Qualität, Zuverlässigkeit und Kosteneffizienz in Ihrer Lieferkette.",
    icon: SquaresPlusIcon,
    to: "Zulieferauswahl",
  },
];

export default function Features() {
  return (
    <div className="flex h-1/2 lg:py-48">
      <div className="w-full h-1/2">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-base font-semibold leading-7 text-yellow-600"
            id="features"
          >
            Über uns
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Exzellenz im Maschinenbau
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Bei Rotorwerk sind wir bestrebt, die hochwertigsten Lösungen im
            Maschinenbau zu liefern. Unsere Expertise erstreckt sich über
            verschiedene Bereiche.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {areas.map((area, index) => (
              <div key={index} className="relative pl-16 text-left">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-lg bg-lime-900">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                </dt>
                {area.title}
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {area.description}
                </dd>
                <Link
                  to={area.to}
                  className="text-sm leading-6 text-yellow-600 hover:text-yellow-400"
                >
                  Mehr erfahren…
                </Link>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
