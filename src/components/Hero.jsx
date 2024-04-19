import heroImage from "../assets/turbine.webp";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8 flex flex-col md:flex-row items-center ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div />
        </div>
        <div className="mx-auto pr-20 max-w-2xl py-32 sm:py-0 lg:py-20">
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
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-3xl w-full h-auto sm:w-3/4 lg:w-1/2">
          <img src={heroImage} alt="Wind turbine" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
