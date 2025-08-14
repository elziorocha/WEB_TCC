import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarrosselInicio = () => {
  return (
    <main>
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="relative h-56 border-none shadow-md rounded-none">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                  <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                    <CarouselPrevious className="pointer-events-auto relative left-0 top-0 translate-y-0 bg-white/80 hover:bg-white shadow-md border-none" />
                    <CarouselNext className="pointer-events-auto relative right-0 top-0 translate-y-0 bg-white/80 hover:bg-white shadow-md border-none" />
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
