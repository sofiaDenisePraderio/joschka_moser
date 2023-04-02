// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/scss';
import "swiper/scss/pagination";

export const Carousel = () => {
  const imagesList = [...new Array(15)].map((number, index) => `/images/diaryFirst/Web-${index + 1}.jpg`)
  return (
    <Swiper
    className="mySwiper"
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        imagesList.map((imgUrl, index) => {
          return (
            <SwiperSlide>
              <img src={imgUrl} key={index}/>
              </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};