import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Feedback = () => {
  const slides = [
    {
      key: 1,
      img: "",
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "",
    },
    {
      key: 2,
      img: "",
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "",
    },
    {
      key: 3,
      img: "",
      content:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      rating: "",
      name: "",
    },
  ];
  return (
    <div className="my-16">
      {/* <Swiper
        spaceBetween={"50px"}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        watchSlidesProgress={true}
        initialSlide={1}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[95%] mx-auto text-white font-kite"
      > */}
      <Swiper
        spaceBetween={"100px"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        watchSlidesProgress={true}
        initialSlide={1}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[95%] mx-auto text-white font-kite"
      >
        {slides.map((card) => (
          <SwiperSlide
            key={card.key}
            className="w-[690px] h-[275px] flex items-center"
          >
            {({ isActive }) => (
              <div
                className={`bg-[#A244C3] h-full w-full rounded-[15px] border-2 border-black border-b-[5px] border-r-[4px]  px-[55px] py-[25px] ${
                  isActive ? "opacity-100" : "opacity-60 h-[220px]"
                } transition-all ease-in-out`}
              >
                <p>{isActive ? "active" : "not active"}</p>
                {card.content}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
