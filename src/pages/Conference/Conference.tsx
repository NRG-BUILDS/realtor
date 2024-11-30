import background from "../../assets/images/backgrounds/BG Screen Picture 3.png";
import person1 from "../../assets/images/avatars/Speakers-bureau-business-event-speaker-for-your-event-speaking-fees-corporate-events-speaking-fee-college-students-next-event.jpg";
import person2 from "../../assets/images/avatars/picture 3.png";
import person3 from "../../assets/images/avatars/picture 4.png";
import person4 from "../../assets/images/avatars/real-estate-property.jpg";
import person5 from "../../assets/images/avatars/real-estate-property.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useState } from "react";

const Conference = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [formPart, setFormPart] = useState(0);
  const images = [person1, person2, person3, person4, person5];

  const handleSubmit = () => {
    console.log("yay");
  };
  return (
    <main className="relative lg:overflow-x-clip flex items-center min-h-screen min-w-[100vw] bg-black">
      {/* background image */}
      <img
        src={background}
        alt=""
        className="fixed top-0 left-0 w-full h-full object-cover"
      />
      {/* linear gradient background */}
      <div className="bg-gradient-to-tl from-brand-primary via-brand-secondary to-brand-tertiary opacity-[0.72] fixed top-0 left-0 w-full h-full" />

      <div className="container p-4 mx-auto w-full flex flex-col md:flex-row items-center gap-20 justify-between text-white relative z-10">
        <div className="flex flex-col w-full lg:min-w-[500px] max-w-[800px] gap-3">
          <div className="w-full max-w-[544px]">
            <h1 className="text-6xl leading-[72px] tracking-tighter">
              Join Us in Online Live Chat Sessions
            </h1>
            <p className="pt-4 pb-16 max-w-[416px]">
              Embrace the opportunity to chat with the staff of the
              International Assembly. Let’s discuss how together we can preserve
              the ozone layer.
            </p>
          </div>
          <div className="bg-white text-gray-500 rounded-lg p-4 flex flex-col md:flex-row items-stretch justify-between w-full gap-8">
            <div
              className={`transition-all text-black duration-700 ${
                formPart === 0 ? "sr-only" : ""
              }`}
            >
              {formPart === 1 && (
                <label htmlFor="name">
                  <span>Your full name</span>
                  <input
                    type="text"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="text-black block outline-none text-xl font-semibold border-b focus:border-brand-secondary transition py-3"
                  />
                </label>
              )}
              {formPart === 2 && (
                <label htmlFor="email">
                  <span>Provide an email address</span>
                  <input
                    type="email"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="text-black block outline-none text-xl font-semibold border-b focus:border-brand-secondary transition py-3"
                  />
                </label>
              )}
            </div>
            <div className="relative w-full min-h-16">
              <button
                onClick={() => {
                  if (formPart === 0) {
                    setFormPart(1);
                    return;
                  }
                  if (formPart === 1 && form.name) {
                    setFormPart(2);
                    return;
                  }
                  if (formPart === 2 && form.email) {
                    handleSubmit();
                  }
                }}
                className="absolute top-0 left-0 font-semibold bg-gradient-to-t active:bg-gradient-to-b transition-all from-[#4E4DB2] to-[#6E6DC0] rounded-md h-full w-full shadow-md hover:shadow-lg flex items-center justify-center text-white disabled:opacity-50"
              >
                {formPart === 1 ? "Next" : "Register"}
              </button>
            </div>
          </div>
        </div>

        {/* image cards */}
        <div className="w-full lg:w-[60vw]">
          <Swiper
            spaceBetween={40}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              // When the window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // When the window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // When the window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="">
                <div className=" bg-gray-200  rounded-lg overflow-clip text-black w-[310px] h-[370px] ">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Conference;
