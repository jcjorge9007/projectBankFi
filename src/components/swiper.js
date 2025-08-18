import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/swiper-bundle.min.css';

<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={3}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000 }}
>
  {coins.map((coin) => (
    <SwiperSlide key={coin.id}>
      {/* Carta del coin aquí */}
    </SwiperSlide>
  ))}
</Swiper>
