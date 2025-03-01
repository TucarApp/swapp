import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel } from "swiper/modules";
import { useState } from "react";
import styled from "styled-components";

// ICONS
import { LuWind } from "react-icons/lu";
import { MdOutlineSpeed } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";

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
    left: 60px;
  }

  .swiper-button-next {
    right: 65px;
  }
`;

const VehicleCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const slidesData = [
    {
      name: "CPX",
      subname: "Comfort y performance",
      image: "/CPX/cpxcostado.webp",
      acceleration: "3.6s",
      maxSpeed: "105km/h",
      autonomy: "130km",
    },
    {
      name: "VS1",
      subname: "Ágilidad para entregas ",
      image: "/VS1/vs1.png",
      acceleration: "4.0s",
      maxSpeed: "90km/h",
      autonomy: "130km",
    },
    {
      name: "VS3 Heavy Duty",
      subname: "Comodidad urbana",
      image: "/VS3/VS3.webp",
      acceleration: "3.2s",
      maxSpeed: "45km/h",
      autonomy: "110km",
    },
  ];

  return (
    <section className="relative bg-gray-100 py-12">
      <div className="w-full">
        {/* Título y descripción */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-x-2">
            <h2 className="text-xl md:text-4xl font-bold text-[#333333]">
              {slidesData[activeSlide].name}
            </h2>
            <h2 className="text-xl md:text-4xl font-bold text-gray-400">
              {slidesData[activeSlide].subname}
            </h2>
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
            modules={[Navigation]}
            navigation
            initialSlide={1}
            spaceBetween={-20}
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
        <div className="mt-6 flex justify-center space-x-8 text-center  px-5">
          <div>
            <div className="flex justify-center items-center gap-x-2">
              <LuWind className="text-4xl mt-[-4px] text-red-600" size={20} />
              <p className="text-lg font-bold text-red-600">
                {slidesData[activeSlide].acceleration}
              </p>
            </div>
            <p className="text-sm text-gray-600">Aceleración 0-50 km/h</p>
          </div>
          <div>
            <div className="flex justify-center items-center gap-x-2">
              <MdOutlineSpeed
                className="text-4xl mt-[-4px] text-red-600"
                size={20}
              />
              <p className="text-lg font-bold text-red-600">
                {slidesData[activeSlide].maxSpeed}
              </p>
            </div>
            <p className="text-sm text-gray-600">Velocidad máxima</p>
          </div>
          <div>
            <div className="flex justify-center items-center gap-x-2">
              <MdElectricBolt
                className="text-4xl mt-[-4px] text-red-600"
                size={20}
              />
            
              <p className="text-lg font-bold text-red-600">
                {slidesData[activeSlide].autonomy}
              </p>
            </div>
            <p className="text-sm text-gray-600">Autonomía MTC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleCarousel;
