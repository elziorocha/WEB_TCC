import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Inicio() {
  return (
    <main className="p-2 -mt-8">
      <section className="bg-secondary px-4 py-3 rounded-b-2xl">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="relative h-56 border-none shadow-md">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                        <CarouselPrevious className="pointer-events-auto relative left-0 top-0 translate-y-0 bg-white/80 hover:bg-white shadow-md border-none" />
                        <CarouselNext className="pointer-events-auto relative right-0 top-0 translate-y-0 bg-white/80 hover:bg-white shadow-md border-none" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
}

export default Inicio;
