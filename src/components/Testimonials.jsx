import { StarIcon } from "@heroicons/react/24/outline";

import icon from "../assets/icon-rotorwerk-1.png";

const Testimonials = () => {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 py-32 flex">
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
      <div className="max-w-2xl flex flex-col mx-auto items-center text-center justify-center">
        <div className="flex space-x-1">
          {[...Array(5)].map((star, index) => (
            <div key={index}>
              <StarIcon className="h-6 w-6 text-yellow-600" />
            </div>
          ))}
        </div>
        <blockquote className="mt-4 text-xl italic text-gray-600">
          “None of our colleagues were able to familiarise themselves deeply
          enough to establish an economical procedure. We got to know and
          appreciate the Rotorwerk office through a joint customer while working
          together on a wind turbine. We are grateful for that. Since this joint
          start, we have successfully completed a number of customer projects
          together.”
        </blockquote>
        <div className="mt-6 flex items-center space-x-3">
          <img className="w-12 h-12 rounded-full" src={icon} alt="User" />
          <div className="text-left">
            <div className="text-base font-medium text-gray-900">
              Thorsten Loth
            </div>
            <div className="text-sm text-gray-500">Engineer at Jencad.de</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
