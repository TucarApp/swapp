import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper/modules';
import { useState } from 'react';
import styled from 'styled-components';

// Styled Swiper Container
const CustomSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    color: #000;
    width: 40px;
    height: 40px;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #f0f0f0;
    }

    &:after {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .swiper-button-prev {
    left:280px;
  }

  .swiper-button-next {
    right:280px;
  }
`;

const VehicleCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Inicializa el slide activo en el índice 1 (slide 2)

  const slidesData = [
    {
      name: 'S01',
      subname: 'Dinamismo y performance',
      image: '/vs3/1.webp',
      acceleration: '3.6s',
      maxSpeed: '100km/h',
      autonomy: '133km',
    },
    {
      name: 'S01+',
      subname: 'Deportividad silenciosa',
      image: '/vs3/2.webp',
      acceleration: '4.0s',
      maxSpeed: '95km/h',
      autonomy: '120km',
    },
    {
      name: 'S02',
      subname: 'Comodidad urbana',
      image: '/vs3/3.webp',
      acceleration: '3.2s',
      maxSpeed: '105km/h',
      autonomy: '140km',
    },
  ];

  return (
    <section className="relative bg-gray-100 py-12">
      <div className="w-full">
        {/* Título y descripción */}
        <div className="text-center mb-8">
          <div className='flex justify-center gap-x-2'>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">{slidesData[activeSlide].name}</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-400">{slidesData[activeSlide].subname}</h2>
          </div>
          
          <div className="mt-4 flex justify-center space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Probar &rarr;
            </button>
            <button className="text-black font-semibold px-6 py-2 rounded-full hover:underline">
              Configurar &rarr;
            </button>
          </div>
        </div>

        {/* Swiper Carrusel */}
        <div className="relative overflow-hidden">
          <CustomSwiper
            modules={[Mousewheel, Navigation]}
            mousewheel={true}
            simulateTouch={true}
            navigation
            initialSlide={1} 
            spaceBetween={-250}
            slidesPerView={1.5}
            centeredSlides={true}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)} 
            className="cursor-grab active:cursor-grabbing"
          >
           
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={slide.image}
                    alt={`Scooter ${index + 1}`}
                    width={800}
                    height={800}
                    className="hover:scale-105 transition duration-[400ms]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>

        {/* Texto dinámico */}
        <div className="mt-6 flex justify-center space-x-8 text-center">
          <div>
            <p className="text-xl font-bold text-red-600">{slidesData[activeSlide].acceleration}</p>
            <p className="text-sm text-gray-600">Aceleración 0-50km/h</p>
          </div>
          <div>
            <p className="text-xl font-bold text-red-600">{slidesData[activeSlide].maxSpeed}</p>
            <p className="text-sm text-gray-600">Velocidad máxima</p>
          </div>
          <div>
            <p className="text-xl font-bold text-red-600">{slidesData[activeSlide].autonomy}</p>
            <p className="text-sm text-gray-600">Autonomía WMTC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleCarousel;
