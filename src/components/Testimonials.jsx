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
      <div className="grid justify-center flex-auto grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto text-center md:pr-12">
          <div className="flex space-x-1">
            {[...Array(5)].map((star, index) => (
              <div key={index}>
                <StarIcon className="w-6 h-6 text-yellow-600" />
              </div>
            ))}
          </div>
          <blockquote className="mt-4 text-xl italic text-gray-600">
            “None of our colleagues were able to familiarise themselves deeply
            enough to establish an economical procedure. We got to know and
            appreciate the Rotorwerk office through a joint customer while
            working together on a wind turbine. We are grateful for that. Since
            this joint start, we have successfully completed a number of
            customer projects together.”
          </blockquote>
          <div className="flex items-center mt-6 space-x-3">
            <img className="w-12 h-12 rounded-full" src={icon} alt="User" />
            <div className="text-left">
              <div className="text-base font-medium text-gray-900">
                Thorsten Loth
              </div>
              <div className="text-sm text-gray-500">Engineer at Jencad.de</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto text-center md:pl-12">
          <div className="flex space-x-1">
            {[...Array(5)].map((star, index) => (
              <div key={index}>
                <StarIcon className="w-6 h-6 text-yellow-600" />
              </div>
            ))}
          </div>
          <blockquote className="mt-4 text-xl italic text-gray-600">
            “What we particularly appreciate about working with Rotorwerk is the
            very pleasant personal contact, the rapid problem analysis and the
            solution-oriented and structured approach based on many years of
            experience. Rotorwerk has always found the right approach for
            special requests. We were able to discuss the interim results that
            were important for the progress of the project with Rotorwerk
            promptly and in detail.”
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
