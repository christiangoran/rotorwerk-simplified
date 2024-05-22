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
      "We offer expert mechanical engineering services to design, analyze, and optimize complex systems. Our solutions ensure efficiency, reliability, and innovation in your projects.",
    icon: WrenchScrewdriverIcon,
    to: "Konstruktion",
  },
  {
    title: "FEM",
    description:
      "We specialize in Finite Element Analysis (FEM) to simulate and optimize mechanical systems. Our advanced techniques ensure precision and safety in your projects.",
    icon: ChartPieIcon,
    to: "Fem",
  },
  {
    title: "WEA Development",
    description:
      "Our expertise in WEC development drives innovation in wind energy solutions. We design and optimize components for maximum efficiency and reliability.",
    icon: ClipboardDocumentCheckIcon,
    to: "Wea",
  },
  {
    title: "Tech Documentation",
    description:
      "We create comprehensive technical documentation to support your engineering processes. Our detailed reports ensure compliance and enhance project clarity.",
    icon: DocumentChartBarIcon,
    to: "Documentaion",
  },
  {
    title: "Fatigue Analysis",
    description:
      "Our fatigue analysis services assess the durability and lifespan of mechanical components. We help you predict and mitigate potential failures, ensuring long-term reliability.",
    icon: CubeTransparentIcon,
    to: "Betriebsfastigkeit",
  },
  {
    title: "Supplier Selection",
    description:
      "We assist in selecting the best suppliers for your engineering needs. Our evaluation process ensures quality, reliability, and cost-effectiveness in your supply chain.",
    icon: SquaresPlusIcon,
    to: "Zulieferauswahl",
  },
];

export default function Features() {
  return (
    <div className="h-1/2 flex lg:py-48">
      <div className="h-1/2 w-full">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="text-yellow-600 text-base leading-7 font-semibold"
            id="features"
          >
            About us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Excellence in Mechanical Engineering
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            At Rotorwerk, we are committed to delivering the highest quality
            mechanical engineering solutions. Our expertise spans across various
            domains.
          </p>
        </div>

        <div className="mx-auto max-w-5xl mt-16">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {areas.map((area, index) => (
              <div key={index} className="relative pl-16 text-left">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-900">
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                </dt>
                {area.title}
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {area.description}
                </dd>
                <Link
                  to={area.to}
                  className="text-sm leading-6 text-yellow-600"
                >
                  Read more...
                </Link>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
