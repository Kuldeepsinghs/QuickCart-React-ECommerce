import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { Scrollbar } from "swiper/modules";

// a11y work

const Hero = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        autoplay={{ pauseOnMouseEnter: true, delay: 2500 }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516826957135-700dedea698c"
              alt="Men Fashion Sale"
              className="w-full h-[500px] object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
              <h1 className="text-4xl font-bold">MEN'S COLLECTION</h1>
              <p className="text-2xl mt-2">UP TO 50% OFF</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            alt="Fashion 2"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
            alt="Fashion 4"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Nike Shoes"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white">
              <h1 className="text-4xl font-bold">NIKE SHOES</h1>
              <p className="text-2xl mt-2">RUN WITH STYLE</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              alt="MacBook Laptop"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white">
              <h1 className="text-4xl font-bold">MACBOOK</h1>
              <p className="text-2xl mt-2">POWERFUL PERFORMANCE</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1"
              alt="Television"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white">
              <h1 className="text-4xl font-bold">SMART TV</h1>
              <p className="text-2xl mt-2">IMMERSIVE EXPERIENCE</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
              alt="Jewellery"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white">
              <h1 className="text-4xl font-bold">JEWELLERY</h1>
              <p className="text-2xl mt-2">ELEGANCE COLLECTION</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
