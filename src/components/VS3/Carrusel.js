import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/// GOATSLEXIS

const images = [
  {
    url: "/VS3/VS3-neon1.webp",
    alt: "Moto vs3",
    angle: "0°",
  },
  {
    url: "/VS3/VS3-neon2.webp",
    alt: "Moto vs3",
    angle: "0°",
  },
  {
    url: "/VS3/VS3-neon3.webp",
    alt: "Moto vs3",
    angle: "0°",
  },
  {
    url: "/VS3/VS3-neon4.webp",
    alt: "Moto vs3",
    angle: "0°",
  },
  {
    url: "/VS3/VS3-neon5.webp",
    alt: "Moto vs3",
    angle: "0°",
  },
  {
    url: "/VS3/VS3-neon6.webp",
    alt: "Moto vs3",
    angle: "0°",
  },
  {
    url: "/VS3/VS3-neon7.webp",
    alt: "Moto vs3",
    angle: "0°",
  },
  {
    url: "/VS3/VS3-neon8.webp",
    alt: "Moto vs3",
    angle: "0°",
  },
];

const Carousel360 = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-[#333333]">
            Explora cada detalle
          </h2>
          <p className="text-lg text-gray-600">
            Gira 360° y descubre el diseño desde todos los ángulos
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-4xl mx-auto border-4 border-gray-200 rounded-lg shadow-xl">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative p-6">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                    />
                    {/* <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-lg font-semibold text-gray-900">
                        {image.angle}
                      </span>
                    </div> */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Carousel360;
