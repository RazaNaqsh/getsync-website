import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

import profile from "../assets/profile.png";
import quoteOpen from "../assets/quoteOpen.svg";
import quoteClose from "../assets/quoteClose.svg";
import star from "../assets/star.svg";

const Feedback = () => {
  const slides = [
    {
      key: 1,
      img: profile,
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "Jia",
    },
    {
      key: 2,
      img: profile,
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "Jia",
    },
    {
      key: 3,
      img: profile,
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "Jia",
    },
  ];
  return (
    <div className="mt-16 mb-28">
      <Swiper
        spaceBetween={"100px"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        watchSlidesProgress={true}
        initialSlide={1}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mx-auto text-white font-kite"
      >
        {slides.map((card) => (
          <SwiperSlide
            key={card.key}
            className="w-[690px] h-[275px] flex items-center"
          >
            {({ isActive }) => (
              <div
                className={`bg-[#E95557]  w-full rounded-[15px] border-2 border-black border-b-[5px] border-r-[4px]  px-[55px] py-[25px] ${
                  isActive
                    ? "opacity-100 h-full"
                    : "px-[40px] opacity-60 h-[210px]"
                } transition-all ease-in-out`}
              >
                <div
                  className={`flex items-center ${
                    isActive ? "gap-10" : "gap-4"
                  } `}
                >
                  <img
                    src={card.img}
                    alt=""
                    className={`${isActive ? "" : "w-[100px]"}`}
                  />
                  <div className="flex flex-col gap-3">
                    <img src={quoteOpen} alt="" className={`w-[42px]`} />
                    <p
                      className={`px-8 ${
                        isActive ? "text-[17px]" : "text-[14px]"
                      } font-semibold`}
                    >
                      {card.content}
                    </p>
                    <img
                      src={quoteClose}
                      alt=""
                      className={`w-[42px] self-end`}
                    />
                    <div
                      className={`flex items-center self-center gap-10 ${
                        isActive ? "" : "-mt-10"
                      }`}
                    >
                      <img
                        src={star}
                        alt=""
                        className={`${isActive ? "" : "w-[110px]"}`}
                      />
                      <p className={`${isActive ? "" : " text-[14px]"}`}>
                        -{card.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
