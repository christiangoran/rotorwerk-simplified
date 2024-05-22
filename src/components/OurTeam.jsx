import norbert from "../assets/norbert.png";
import filler1 from "../assets/fillers-1.webp";
import filler2 from "../assets/fillers-2.webp";
import filler3 from "../assets/fillers-3.webp";

const OurPeople = () => {
  return (
    <section className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-left relative">
      <div className="width-full mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-start-1 lg:pr-8">
            <div className="lg:pr-4">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our people
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At Rotorwerk, we believe that our team is our greatest asset.
                Our diverse and talented group of professionals is dedicated to
                driving innovation and delivering excellence in every project.
                We work collaboratively to ensure the highest standards of
                quality and customer satisfaction.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Whether it's through advanced engineering solutions, meticulous
                attention to detail, or our commitment to continuous
                improvement, our team consistently strives to exceed
                expectations. We invite you to meet our team and learn more
                about how we can help bring your projects to life.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lime-900 hover:bg-lime-700"
              >
                Work with us
              </a>
            </div>
            <div className="aspect-w- aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-1 sm:aspect-h-1 col-span-2 pt-32">
              <img
                src={filler1}
                alt="Team 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
              <div className="aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-1 sm:aspect-h-1 col-span-1">
                <img
                  src={filler3}
                  alt="Team 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-w-24 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-1 sm:aspect-h-1 relative">
                <img
                  src={norbert}
                  alt="Team 1"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 lg:row-span-2 col-span-2">
                <img
                  src={filler2}
                  alt="Team 3"
                  className="w-full h-full object-cover"
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
