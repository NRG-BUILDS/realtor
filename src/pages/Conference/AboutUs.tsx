import { useState } from "react";
import background from "../../assets/images/backgrounds/Marina-at-Dusk.jpg";
import seedLow from "../../assets/images/backgrounds/tenxseed-seed_low.jpg";
import seedHigh from "../../assets/images/backgrounds/tenxseed-seed_high.png";

const AboutUs = () => {
  return (
    <section className="py-24 relative bg-black text-gray-100">
      {/* background image */}
      <img
        src={background}
        alt=""
        className="fixed top-0 left-0 w-full h-full object-cover"
      />
      {/* linear gradient background */}
      <div className="bg-gradient-to-tl from-brand-secondary via-brand-primary to-brand-tertiary opacity-[0.72] fixed top-0 left-0 w-full h-full" />

      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto relative z-10">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-gray-100 text-3xl font-bold leading-normal lg:text-start text-center">
                Planting the Seeds of Prosperity: Transforming African Real
                Estate with Integrity and Innovation
              </h2>
              <p className="text-gray-200 text-base font-normal leading-relaxed lg:text-start text-center">
                Ten Thousand Seeds is a real estate investment group committed
                to creating a dynamic and innovative work environment that
                fosters growth, excellence, and sustainability. As an
                organisation, we are particular about perfecting the
                transformation of African Real Estate, drive prosperity and
                global connectivit
              </p>
              <h3 className="text-gray-100 text-xl font-bold lg:text-start text-center">
                Vision
              </h3>
              <p className="text-gray-200 text-base font-normal leading-relaxed lg:text-start text-center">
                <b>To see money</b> Cultivate sustainable businesses tailored to
                African market needs, with strategic global impact
              </p>
              <h3 className="text-gray-100 text-xl font-bold lg:text-start text-center">
                Mission
              </h3>
              <p className="text-gray-200 text-base font-normal leading-relaxed lg:text-start text-center">
                <b>To make money</b> (for staff, customers and the African
                continent). To continuously curate sustainable, market-driven
                real estate solutions, while nurturing the entrepreneurial
                spirit within our team members. Drive African prosperity and
                global connectivity
              </p>
            </div>
            <div className="w-full flex-col justify-center items-start gap-6 flex">
              <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                <div className="w-full h-full p-3.5 rounded-xl border border-brand-secondary hover:border-yellow-200 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                  <h4 className="text-gray-100 text-2xl font-bold leading-9">
                    Integrity
                  </h4>
                  <p className="text-gray-200 text-base font-normal leading-relaxed">
                    Act with honesty, transparency, and ethics
                  </p>
                </div>
                <div className="w-full h-full p-3.5 rounded-xl border border-brand-secondary hover:border-yellow-200 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                  <h4 className="text-gray-100 text-2xl font-bold leading-9">
                    Respect
                  </h4>
                  <p className="text-gray-200 text-base font-normal leading-relaxed">
                    Treat colleagues, clients, and stakeholders with dignity.
                  </p>
                </div>
              </div>
              <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                <div className="w-full p-3.5 rounded-xl border border-brand-secondary hover:border-yellow-200 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                  <h4 className="text-gray-100 text-2xl font-bold leading-9">
                    Accountability
                  </h4>
                  <p className="text-gray-200 text-base font-normal leading-relaxed">
                    Take ownership of actions and decisions.
                  </p>
                </div>
                <div className="w-full h-full p-3.5 rounded-xl border border-brand-secondary hover:border-yellow-200 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                  <h4 className="text-gray-100 text-2xl font-bold leading-9">
                    Confidentiality
                  </h4>
                  <p className="text-gray-200 text-base font-normal leading-relaxed">
                    Protect sensitive information.
                  </p>
                </div>
                <div className="w-full h-full p-3.5 rounded-xl border border-brand-secondary hover:border-yellow-200 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                  <h4 className="text-gray-100 text-2xl font-bold leading-9">
                    Compliance
                  </h4>
                  <p className="text-gray-200 text-base font-normal leading-relaxed">
                    Adhere to laws, regulations, and industry standards
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mx-0 mx-auto h-full rounded-3xl overflow-clip object-cover">
            <ProgressiveImage
              lowResSrc={seedLow}
              highResSrc={seedHigh}
              alt="Sample Image"
              className="size-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

interface ProgressiveImageProps {
  lowResSrc: string; // URL of the low-resolution image
  highResSrc: string; // URL of the high-resolution image
  alt: string; // Alt text for the image
  className?: string; // Optional CSS class for the wrapper
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  lowResSrc,
  highResSrc,
  alt,
  className = "",
}) => {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Low-res placeholder */}
      <img
        src={lowResSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
          isHighResLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ filter: "blur(10px)" }}
      />

      {/* High-res image */}
      <img
        src={highResSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isHighResLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsHighResLoaded(true)}
      />
    </div>
  );
};
