<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import {
    Paintbrush,
    MessageCircle,
    TabletSmartphone,
    BadgeCheck,
    Goal,
    PictureInPicture,
    MousePointerClick,
    Newspaper,
  } from "lucide-svelte";

  interface FeaturesProps {
    icon: 'tabletSmartphone' | 'badgeCheck' | 'goal' | 'pictureInPicture' | 
          'paintbrush' | 'mousePointerClick' | 'messageCircle' | 'newspaper';
    title: string;
    description: string;
  }

  const featureList: FeaturesProps[] = [
    {
      icon: "tabletSmartphone",
      title: "Tecnología Avanzada",
      description:
        "Contamos con equipos de última generación para diagnósticos precisos y tratamientos más cómodos y efectivos.",
    },
    {
      icon: "badgeCheck",
      title: "Certificación Profesional",
      description:
        "Nuestro equipo cuenta con las más altas certificaciones y experiencia en odontología moderna.",
    },
    {
      icon: "goal",
      title: "Tratamientos Personalizados",
      description:
        "Cada plan de tratamiento se adapta a las necesidades específicas de cada paciente.",
    },
    {
      icon: "pictureInPicture",
      title: "Resultados Visibles",
      description:
        "Utilizamos imágenes y tecnología 3D para mostrarte los resultados esperados antes del tratamiento.",
    },
    {
      icon: "mousePointerClick",
      title: "Citas Fáciles",
      description:
        "Sistema de citas online simple y rápido para tu conveniencia. Agenda tu consulta en minutos.",
    },
    {
      icon: "newspaper",
      title: "Información Clara",
      description:
        "Te explicamos cada procedimiento de manera clara y comprensible para que tomes decisiones informadas.",
    },
  ];

  const iconMap = {
    tabletSmartphone: TabletSmartphone,
    badgeCheck: BadgeCheck,
    goal: Goal,
    pictureInPicture: PictureInPicture,
    paintbrush: Paintbrush,
    mousePointerClick: MousePointerClick,
    messageCircle: MessageCircle,
    newspaper: Newspaper,
  };
</script>

<section id="features" class="container py-24 sm:py-32">
  <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
    Características
  </h2>

  <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    Lo Que Nos Hace Diferentes
  </h2>

  <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    Combinamos experiencia, tecnología de vanguardia y un enfoque personalizado 
    para brindarte la mejor atención dental en un ambiente cómodo y profesional.
  </h3>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each featureList as { icon, title, description }}
      <Card class="h-full bg-background border-0 shadow-none">
        <CardHeader class="flex justify-center items-center">
          <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
            <svelte:component 
              this={iconMap[icon]} 
              class="size-6 text-primary"
            />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent class="text-muted-foreground text-center">
          {description}
        </CardContent>
      </Card>
    {/each}
  </div>
</section>
