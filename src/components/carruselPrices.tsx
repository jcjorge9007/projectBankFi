'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

type Coin = {
  id: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
};

const CryptoCarousel = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'
      );
      const data = await res.json();
      setCoins(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-4 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="w-full"
      >
        {coins.concat(coins).map((coin, idx) => (
          <SwiperSlide
            key={`${coin.id}-${idx}`}
            className="bg-[#1a1a2e] border border-[#00f0ff40] rounded-lg px-4 py-3 text-white text-center shadow-[0_0_10px_#00f0ff80] hover:shadow-[0_0_15px_#00f0ffaa] transition-shadow duration-300 ease-in-out flex flex-col items-center"
            style={{ width: '160px' }}
          >
            <img
              src={coin.image}
              alt={coin.name}
              className="w-10 h-10 object-contain mb-2 rounded-full bg-black p-1 border border-[#00f0ff40]"
            />
            <span className="text-sm font-bold text-cyan-400">{coin.name}</span>
            <span className="text-sm text-gray-200">${coin.current_price.toLocaleString()}</span>
            <span
              className={`text-sm font-medium ${
                coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CryptoCarousel;
