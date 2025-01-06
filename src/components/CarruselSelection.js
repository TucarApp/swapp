import { SwiperSlide,Navigation } from "swiper/modules";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const CarouselSection = () => {
  return (
    <section className="relative bg-gray-100 py-12">
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <img
                src="/scooter1.png"
                alt="Scooter"
                className="w-full max-w-xs"
              />
              <div className="mt-4">
                <p className="text-lg font-bold">3.6s</p>
                <p className="text-sm text-gray-600">
                  Aceleración 0-50km/h
                </p>
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold">100km/h</p>
                <p className="text-sm text-gray-600">Velocidad máxima</p>
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold">133km</p>
                <p className="text-sm text-gray-600">Autonomía WMTC</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <img
                src="/scooter2.png"
                alt="Scooter"
                className="w-full max-w-xs"
              />
              <div className="mt-4">
                <p className="text-lg font-bold">4.2s</p>
                <p className="text-sm text-gray-600">
                  Aceleración 0-50km/h
                </p>
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold">90km/h</p>
                <p className="text-sm text-gray-600">Velocidad máxima</p>
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold">120km</p>
                <p className="text-sm text-gray-600">Autonomía WMTC</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center text-center">
              <img
                src="/scooter3.png"
                alt="Scooter"
                className="w-full max-w-xs"
              />
              <div className="mt-4">
                <p className="text-lg font-bold">3.0s</p>
                <p className="text-sm text-gray-600">
                  Aceleración 0-50km/h
                </p>
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold">110km/h</p>
                <p className="text-sm text-gray-600">Velocidad máxima</p>
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold">150km</p>
                <p className="text-sm text-gray-600">Autonomía WMTC</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CarouselSection;
