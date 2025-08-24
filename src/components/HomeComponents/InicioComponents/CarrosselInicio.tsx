import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import banner1 from "../../../assets/CarouselImages/banner_1.jpg";
import banner2 from "../../../assets/CarouselImages/banner_2.jpg";
import banner3 from "../../../assets/CarouselImages/banner_3.jpg";
import banner4 from "../../../assets/CarouselImages/banner_4.jpg";
import banner5 from "../../../assets/CarouselImages/banner_5.png";
import banner6 from "../../../assets/CarouselImages/banner_6.jpg";

const CarrosselInicio = () => {
  const imagens = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <main>
      <Carousel className="w-full">
        <CarouselContent>
          {imagens.map((imagem, index) => (
            <CarouselItem key={index}>
              <Card className="relative border-none shadow-md rounded-none p-0">
                <CardContent className="flex items-center justify-center p-0">
                  <img src={imagem} className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                    <CarouselPrevious className="pointer-events-auto relative left-0 top-0 translate-y-0 bg-white/80 hover:bg-white shadow-md border-none cursor-pointer" />
                    <CarouselNext className="pointer-events-auto relative right-0 top-0 translate-y-0 bg-white/80 hover:bg-white shadow-md border-none cursor-pointer" />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </main>
  );
};

export default CarrosselInicio;
