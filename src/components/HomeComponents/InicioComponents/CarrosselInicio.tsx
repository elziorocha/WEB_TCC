import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { inicioBanners } from "@/utils/objetosExportaveis";

const CarrosselInicio = () => {
  return (
    <main>
      <Carousel className="w-full">
        <CarouselContent>
          {inicioBanners.map((imagem, index) => (
            <CarouselItem key={index}>
              <Card className="relative border-none shadow-md rounded-none p-0">
                <CardContent className="flex items-center justify-center p-0">
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-between p-3 pointer-events-none">
                    <CarouselPrevious className="pointer-events-auto relative left-0 top-0 translate-y-0 bg-white/40 hover:bg-white shadow-md border-none cursor-pointer" />
                    <CarouselNext className="pointer-events-auto relative right-0 top-0 translate-y-0 bg-white/40 hover:bg-white shadow-md border-none cursor-pointer" />
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
