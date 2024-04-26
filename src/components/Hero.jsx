import { HashLink } from "react-router-hash-link";
import heroImage from "../assets/turbine.webp";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-white relative isolate">
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
      <div className="relative isolate px-6 pt-14 lg:px-8 flex flex-col md:flex-row items-center">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div />
        </div>
        <div className="mx-auto pr-20 max-w-2xl py-8 md:py-8 lg:py-40">
          <div className="text-left">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-5xl lg:text-6xl">
              15+ Jahre Branchenerfahrung im Windenergie-Sektor: <br />
              Ihr Experte für Windkraftanlagen
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Rotorwerk: Technologisches Knowhow für eine grüne Zukunft. Über 10
              erfolgreich entwickelte Windkraftanlagen sprechen für sich.
            </p>
            <div className="mt-10 flex items-center justify-left gap-x-6">
              <HashLink
                to="#contact"
                className="rounded-md bg-lime-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
              >
                Kontakt uns
              </HashLink>
              <Link
                to="/konstruktion"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Lern mehr <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-3xl w-full h-auto sm:w-3/4 lg:w-1/2 py-20">
          <img src={heroImage} alt="Wind turbine" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
