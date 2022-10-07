import { EffectCoverflow, Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "./slider.css";
import { useState } from "react";
import SlideImage from "./SlideImage";
import SlideText, { SlideTextInterface } from "./SlideText";

export type SliderInterface = (SlideTextInterface & { img: string })[];

const Slider = ({ slides }: { slides: SliderInterface }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // const step = 1 / slides.length;
  // const hiddenAt = step / 2;

  return (
    <div className="min-h-full w-full" id="swiper-outer-wrapper">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        // onSliderMove={(swiper, event) => {
        //   const base = step * swiper.realIndex;
        //   const diff = Math.abs(swiper.progress - base);
        //   console.log({ base, hiddenAt, diff });
        //   const opacity = diff / hiddenAt;

        //   console.log({ opacity });
        // }}
        scrollbar={{ draggable: true }}
        grabCursor={true}
        modules={[EffectCoverflow, Pagination, Virtual]}
        virtual
        effect={"coverflow"}
        centeredSlides={true}
        touchEventsTarget="container"
        threshold={5}
        slideToClickedSlide={true}
        pagination={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          650: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        className="p-2 md:p-6"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.img} virtualIndex={index}>
            <SlideImage img={slide.img}></SlideImage>
          </SwiperSlide>
        ))}
        {
          <SlideText
            currentSlideIndex={activeIndex}
            slides={slides}
          ></SlideText>
        }
      </Swiper>
    </div>
  );
};

export default Slider;
