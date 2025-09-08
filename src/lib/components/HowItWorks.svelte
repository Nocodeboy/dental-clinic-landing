<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";

  interface HowItWorksProps {
    badgeTitle: string;
    title: string;
    description: string;
    image: string;
  }

  const HowItWorksList: HowItWorksProps[] = [
    {
      badgeTitle: "Consulta",
      title: "Evaluación Inicial Completa",
      description:
        "Realizamos una evaluación dental completa para entender tus necesidades y crear un plan de tratamiento personalizado.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&h=200&fit=crop&crop=center",
    },
    {
      badgeTitle: "Planificación",
      title: "Plan de Tratamiento Personalizado",
      description:
        "Diseñamos un plan de tratamiento específico para ti, explicando cada paso y los resultados esperados.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center",
    },
    {
      badgeTitle: "Tratamiento",
      title: "Atención Profesional y Cómoda",
      description:
        "Ejecutamos tu tratamiento con tecnología avanzada y técnicas modernas para garantizar tu comodidad.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&h=200&fit=crop&crop=center",
    },
    {
      badgeTitle: "Seguimiento",
      title: "Cuidado Continuo y Preventivo",
      description:
        "Mantenemos un seguimiento continuo de tu salud dental con citas regulares y cuidados preventivos.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop&crop=center",
    },
  ];
</script>

<section id="features" class="container py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Cómo Trabajamos
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold">
      Nuestro Proceso Paso a Paso
    </h2>
  </div>

  <div class="lg:w-[80%] mx-auto relative">
    {#each HowItWorksList as { badgeTitle, title, description, image }, index}
      <div class="flex mb-8 items-center" class:flex-row-reverse={index % 2 !== 0}>
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{badgeTitle}</Badge>
            </div>

            <CardTitle>
              {title}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[80%]">
            {description}
          </CardContent>
        </Card>

        <img
          src={image}
          alt="Image describing {title}"
          class="w-[150px] md:w-[250px] lg:w-[300px] mx-auto -scale-x-100"
        />
        
        <div
          class="-z-10 absolute right-0 w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl"
          class:left-0={index % 2 !== 0}
        ></div>
      </div>
    {/each}
  </div>
</section>
