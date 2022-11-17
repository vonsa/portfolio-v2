import {
  EffectCoverflow,
  Pagination,
  Virtual,
  Swiper as SwiperInterface,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "./slider.css";
import { useState } from "react";
import SlideImage from "./SlideImage";
import SlideText, { SlideTextInterface } from "./SlideText";

export type SlideInterface = SlideTextInterface & { img: string };
export type SliderInterface = SlideInterface[];

const Slider = ({ slides }: { slides: SliderInterface }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [height, setHeight] = useState<number>();

  return (
    <div
      className="min-h-full w-full relative"
      id="swiper-outer-wrapper"
      style={
        {
          "--main-color": slides[activeIndex]?.color || "#ff0000",
        } as React.CSSProperties
      }
    >
      <div
        className="flex justify-center items-center w-full h-full absolute"
        style={{ height: `${height}px` }}
      >
        <div id="radial-gradient"></div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        onResize={(swiper) => {
          setHeight(swiper.wrapperEl.clientHeight);
        }}
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
