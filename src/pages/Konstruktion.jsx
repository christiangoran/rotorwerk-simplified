import {
  Cog8ToothIcon,
  CogIcon,
  VariableIcon,
  WrenchIcon,
} from "@heroicons/react/20/solid";
import konstruktion from "../assets/konstruktion-1.webp";

const industryAreas = [
  {
    title: "Heavy Machinery Engineering",
    description:
      "We specialize in designing heavy machinery that meets the highest standards of durability and efficiency. Our innovative engineering solutions ensure peak performance in the most demanding environments, making us a trusted partner in the heavy machinery sector.",
    icon: WrenchIcon,
  },
  {
    title: "Custom Machinery Engineering",
    description:
      "Tailored solutions for unique challenges. Our custom machinery engineering services deliver specialized equipment designed to meet your specific operational needs. We combine cutting-edge technology with expert craftsmanship to create machines that enhance productivity and efficiency.",
    icon: WrenchIcon,
  },
  {
    title: "Wind Industry Engineering",
    description:
      "Driving innovation in the wind industry, we provide comprehensive engineering solutions for wind energy projects. From design to implementation, our expertise ensures optimal performance and reliability of wind turbines and related components, contributing to a sustainable future.",
    icon: WrenchIcon,
  },
  {
    title: "General Machinery Engineering",
    description:
      "Delivering excellence in mechanical engineering, we cover a broad spectrum of services from concept to completion. Our experienced team applies advanced engineering principles to design, analyze, and optimize mechanical systems for various industrial applications.",
    icon: WrenchIcon,
  },
  {
    title: "Structural Steel Engineering",
    description:
      "Expertise in structural steel design and fabrication. We offer robust and innovative engineering solutions for structural steel projects, ensuring safety, stability, and longevity. Our services cover everything from initial design to final construction.",
    icon: WrenchIcon,
  },
  {
    title: "Lightweight Construction Engineering",
    description:
      "Optimizing performance with lightweight construction. Our engineering solutions focus on reducing weight without compromising strength and durability. Ideal for industries where efficiency and performance are critical, our lightweight designs set the standard.",
    icon: WrenchIcon,
  },
  {
    title: "Load Handling Equipment Engineering",
    description:
      "Designing reliable load handling equipment to enhance safety and efficiency. Our engineering services for load handling equipment ensure that your operations run smoothly and safely, with equipment designed to meet rigorous standards and specific requirements.",
    icon: WrenchIcon,
  },
];

export default function Konstruktion() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 text-left">
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-yellow-600">
                We also design.
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Constructions
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Design for the industries and sectors:
              </p>
            </div>
          </div>
        </div>

        {/* ------------------ RIGHT ORIENTED IMAGE ELEMENT ------------------ */}
        <div className="-ml-12 -mt-12 p-12 pb-50 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-300 max-h-100 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={konstruktion}
            alt="Image of people working at a desk"
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {industryAreas.map((area, index) => (
                  <li key={index} className="flex gap-x-3">
                    <area.icon className="h-6 w-6 text-lime-900" />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        {area.title}
                      </strong>{" "}
                      {area.description}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8">
                If the construction is to be examined for deformations,
                displacements, static strength, and lifespan (fatigue strength),
                we use the <b>Finite Element Method (FEM calculation) </b>
                for this purpose.
              </p>
              <p className="mt-8">
                All we further need from you for the<b> FEM calculation</b> or{" "}
                <b>analysis</b> are any neighboring components and their
                properties, the bearing if it is located in the neighboring
                components, and the load.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Special services in this context:
              </h2>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <Cog8ToothIcon
                    className="mt-1 h-5 w-5 flex-none text-lime-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      New design for the aforementioned industries and areas
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CogIcon
                    className="mt-1 h-5 w-5 flex-none text-lime-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Modification designs
                    </strong>{" "}
                    {/* Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. */}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <VariableIcon
                    className="mt-1 h-5 w-5 flex-none text-lime-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Strength calculations, structural behavior, vibration
                      analyses
                    </strong>{" "}
                    {/* Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis. */}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
