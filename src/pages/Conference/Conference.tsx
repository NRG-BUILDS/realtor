import background from "../../assets/images/backgrounds/Marina-at-Dusk.jpg";
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
import useRequest from "@/hooks/useRequest";
import { useToast } from "@/hooks/use-toast";

interface ApiResponse {
  message: string;
  success: boolean;
}

const Conference = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [formPart, setFormPart] = useState(0);
  const images = [person1, person2, person3, person4, person5];
  const { toast } = useToast();
  const { loading, makeRequest } = useRequest<ApiResponse>(
    "/waitlist/conference"
  );

  const handleSubmit = async () => {
    const res = await makeRequest(form);
    // @ts-ignore
    if (res.status === "success") {
      toast({
        variant: "success",
        title: "Your details have been submitted successfully",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Failed to submit details",
        description: res?.message,
      });
    }
  };
  return (
    <main className="relative lg:overflow-x-clip lg:flex items-center min-h-screen max-w-[100svw] bg-black">
      {/* background image */}
      <img
        src={background}
        alt=""
        className="fixed top-0 left-0 w-full h-full object-cover"
      />
      {/* linear gradient background */}
      <div className="bg-gradient-to-tl from-brand-secondary via-brand-primary to-brand-tertiary opacity-[0.72] fixed top-0 left-0 w-full h-full" />
      <div className="container p-4 mx-auto w-full flex flex-col md:flex-row items-center gap-20 justify-between text-white relative z-10">
        <div className="flex flex-col w-full lg:min-w-[500px] max-w-[800px] gap-3">
          <div className="w-full max-w-[544px]">
            <h1 className="text-6xl leading-[72px] tracking-tighter">
              Join us on the TenX side of <i>life</i>
            </h1>
            <p className="pt-4 pb-16 max-w-[416px]">
              Ten Thousand Seeds is committed to creating a dynamic and
              innovative work environment that fosters growth,excellence and
              sustainability.
            </p>
          </div>
          <div className="bg-white text-gray-500 rounded-2xl flex flex-col md:flex-row items-stretch justify-between w-full gap-8">
            <div
              className={`transition-all text-black duration-700 ${
                formPart === 0 ? "sr-only" : "p-4"
              }`}
            >
              {formPart === 1 && (
                <label htmlFor="name">
                  <span>Your full name</span>
                  <input
                    type="text"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="text-black block outline-none text-xl font-semibold border-b focus:border-brand-secondary transition py-3 w-full lg:w-auto"
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
                    className="text-black block outline-none text-xl font-semibold border-b focus:border-brand-secondary transition py-3 w-full lg:w-auto"
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
                disabled={loading}
                className="absolute overflow-clip top-0 left-0 font-semibold  transition-all bg-brand-secondary rounded-md lg:rounded-2xl lg:rounded-l-none h-full w-full shadow-md hover:shadow-lg flex items-center justify-center text-white disabled:opacity-50"
              >
                {formPart === 1 ? "Next" : "Register"}
                {loading && (
                  <div className="absolute  top-0 left-0 w-full h-full bg-inherit flex items-center justify-center">
                    <div className="rounded-full size-10 border border-white border-b-0 animate-spin "></div>
                  </div>
                )}
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
              },
              // When the window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // When the window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="ml-4">
                <div className="relative bg-gray-200  rounded-lg overflow-clip text-black w-[310px] h-[370px] ">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {index === 1 ? (
                    <span className="bg-black absolute top-0 w-full">
                      Hello
                    </span>
                  ) : null}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <footer className="z-50 static lg:fixed bottom-0 left-0 w-full bg-opacity-15 border-b border-white border-opacity-20 backdrop-blur py-4">
        <div className="container text-white mx-auto px-2 flex flex-col lg:flex-row items-center  gap-10 *:py-10  lg:*:py-0 justify-between divide-y lg:divide-y-0 lg:divide-x divide-opacity-5">
          <div className="flex flex-col items-center gap-1 w-full">
            <h3 className="font-semibold text-sm">DATE</h3>
            <h4 className="text-3xl">23 | 09 | 2025</h4>
          </div>
          <div className="flex flex-col items-center gap-1 w-full">
            <h3 className="font-semibold text-sm">VENUE</h3>
            <h4 className="text-3xl">Eko Hotels & Suites</h4>
          </div>
          <div className="flex flex-col items-center gap-1 w-full">
            <h3 className="font-semibold text-sm">TIME</h3>
            <h4 className="text-3xl">8pm</h4>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Conference;
