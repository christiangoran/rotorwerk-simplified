import norbert from "../assets/norbert.png";
import meeting from "../assets/fillers-1.webp";
import filler2 from "../assets/fillers-2.webp";
import writing from "../assets/fillers-3.webp";

const OurPeople = () => {
  return (
    <section className="bg-white py-8 px-4 sm:py-48 sm:px-6 lg:px-8 text-left relative">
      <div className="width-full mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-start-1 lg:pr-8">
            <div className="lg:pr-4">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our people
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At Rotorwerk, we pride ourselves on our collaborative spirit and
                team-driven approach. Our network of skilled professionals,
                works in unison to drive innovation and deliver exceptional
                engineering solutions. Each project benefits from our collective
                expertise, ensuring top-notch quality and customer satisfaction.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                By fostering a culture of continuous improvement and paying
                attention to detail, our team consistently exceeds expectations.
                Discover how our collaborative efforts can bring your
                engineering projects to life.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lime-900 hover:bg-lime-700"
              >
                Work with us
              </a>
            </div>
            <div className="aspect-w- aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-1 sm:aspect-h-1 col-span-2 pt-12">
              <img
                src={meeting}
                alt="Team 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
              <div className="aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-1 sm:aspect-h-1 col-span-1 relative mt-0">
                <img
                  src={writing}
                  alt="Team 2"
                  className="h-400 object-cover rounded-lg"
                />
              </div>
              <div className="aspect-w-24 aspect-h-1  overflow-hidden sm:aspect-w-1 sm:aspect-h-1 relative mt-24">
                <img
                  src={norbert}
                  alt="Team 1"
                  className="h-300 object-cover rounded-lg"
                />
              </div>

              <div className="aspect-w-2 aspect-h-1 overflow-hidden sm:aspect-w-2 sm:aspect-h-1 lg:row-span-2 col-span-2 mt-12">
                <img
                  src={filler2}
                  alt="Team 3"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
