<script lang="ts">
  import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import * as Carousel from "$lib/components/ui/carousel";
  import { Star } from "lucide-svelte";
  import type { CarouselAPI } from "$lib/components/ui/carousel/context";
  import Autoplay from "embla-carousel-autoplay";

  interface ReviewProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
    rating: number;
  }

  const reviewList: ReviewProps[] = [
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
      name: "María González",
      userName: "Paciente desde 2022",
      comment:
        "¡La atención es excepcional! El Dr. Martínez y su equipo me ayudaron a recuperar mi sonrisa. Los tratamientos son completamente indoloros y el ambiente es muy profesional.",
      rating: 5.0,
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      name: "Carlos Rodriguez",
      userName: "Paciente desde 2021",
      comment:
        "Después de años de evitar al dentista, finalmente encontré una clínica donde me siento cómodo. La tecnología que usan es impresionante y el personal es muy amable.",
      rating: 5.0,
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      name: "Ana Martínez",
      userName: "Paciente desde 2023",
      comment:
        "Mi ortodoncia fue un éxito total. El plan de tratamiento fue muy claro desde el inicio y los resultados superaron mis expectativas. ¡Totalmente recomendado!",
      rating: 4.9,
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      name: "Luis Herrera",
      userName: "Paciente desde 2020",
      comment:
        "Los implantes dentales cambiaron mi vida. El proceso fue mucho más sencillo de lo que esperaba y el resultado es perfecto. Gracias por devolverme la confianza al sonreír.",
      rating: 5.0,
    },
    {
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      name: "Sofía López",
      userName: "Paciente desde 2022",
      comment:
        "El blanqueamiento dental que me hicieron quedó perfecto y muy natural. Todo el equipo es muy profesional y siempre te explican cada paso del tratamiento.",
      rating: 4.9,
    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      name: "Elena Torres",
      userName: "Paciente desde 2021",
      comment:
        "Traje a toda mi familia a esta clínica. La atención con los niños es extraordinaria y los precios son muy justos. Definitivamente la mejor clínica dental de la ciudad.",
      rating: 5.0,
    },
  ];

  let api = $state<CarouselAPI>();
  const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });
</script>

<section id="testimonials" class="container py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Testimonios
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Lo Que Dicen Nuestros 1000+ Pacientes
    </h2>
  </div>

  <Carousel.Root
    opts={{
      align: "start",
      loop: true,
    }}
    plugins={[plugin]}
    class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    setApi={(emblaApi) => (api = emblaApi)}
    onmouseenter={plugin.stop}
    onmouseleave={plugin.reset}
  >
    <Carousel.Content class="-ml-4">
      {#each reviewList as review (review.name)}
        <Carousel.Item class="pl-4 md:basis-1/2 lg:basis-1/3">
          <Card class="bg-muted/50 dark:bg-card h-full">
            <CardContent class="p-6 h-full flex flex-col">
              <div class="flex-1">
                <div class="flex gap-1 mb-6">
                  {#each Array(5) as _}
                    <Star class="size-4 fill-primary text-primary" />
                  {/each}
                </div>

                <p class="mb-6">"{review.comment}"</p>
              </div>

              <div class="flex items-center gap-4 pt-6 border-t">
                <Avatar>
                  <AvatarImage
                    src={review.image}
                    alt={`Avatar of ${review.name}`}
                  />
                  <AvatarFallback>
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.userName}</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
</section>
