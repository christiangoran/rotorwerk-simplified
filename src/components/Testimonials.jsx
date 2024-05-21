import { StarIcon } from "@heroicons/react/24/outline";

import icon from "../assets/icon-rotorwerk-1.png";

const Testimonials = () => {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 py-48 flex bg-gray-100">
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
