import { HashLink } from "react-router-hash-link";
import heroImage from "../assets/turbine.webp";

import Testimonials from "./Testimonials";
import Features from "./Features";
import OurPeople from "./OurTeam";

export default function Hero() {
  return (
    <div className="relative isolate">
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
      <div className="relative flex flex-col items-center px-6 isolate pt-14 lg:px-8 md:flex-row">
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div />
        </div>
        <div className="max-w-2xl py-8 pr-20 mx-auto md:py-8 lg:py-16">
          <div className="text-left">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-5xl lg:text-6xl">
              <span className="text-yellow-600"> 15+ Years</span> of Experience
              in Engineering Solutions: <br />
              Experts in FEM and More
            </h1>
            <p className="mt-6 text-lg leading-9 text-gray-600">
              Rotorwerk: Technological Expertise for a Sustainable Future. Over
              10 successfully developed wind turbines and countless engineering
              projects speak for themselves.
            </p>
            <div className="flex items-center mt-10 justify-left gap-x-6">
              <HashLink
                to="#contact"
                className="rounded-md bg-lime-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
              >
                Kontakt uns
              </HashLink>
              <HashLink
                to="#features"
                className="text-sm font-semibold leading-6 text-yellow-600 hover:text-yellow-400"
              >
                Lern mehr <span aria-hidden="true">→</span>
              </HashLink>
            </div>
          </div>
        </div>
        <div className="w-full h-auto py-20 rounded-3xl sm:w-3/4 lg:w-1/2">
          <img src={heroImage} alt="Wind turbine" className="rounded-3xl" />
        </div>
      </div>
      <Features />
      <Testimonials />
      <OurPeople />
    </div>
  );
}
