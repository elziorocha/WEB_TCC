import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { inicioBanners } from '@/utils/objetosExportaveis/objetosExportaveis';

export const CarrosselInicio = () => {
  return (
    <main>
      <Carousel className="w-full">
        <CarouselContent>
          {inicioBanners.map((imagem, index) => (
            <CarouselItem key={index}>
              <Card className="relative rounded-none border-none p-0 shadow-md">
                <CardContent className="flex items-center justify-center p-0">
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-full w-full object-contain"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-3">
                    <CarouselPrevious className="pointer-events-auto relative top-0 left-0 translate-y-0 cursor-pointer border-none bg-white/40 shadow-md hover:bg-white" />
                    <CarouselNext className="pointer-events-auto relative top-0 right-0 translate-y-0 cursor-pointer border-none bg-white/40 shadow-md hover:bg-white" />
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
