<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import {
    Sparkle,
    Tag,
    Paintbrush,
    Blocks,
    LineChart,
    Wallet,
  } from "lucide-svelte";

  interface BenefitsProps {
    icon: 'sparkle' | 'tag' | 'paintbrush' | 'blocks' | 'lineChart' | 'wallet';
    title: string;
    description: string;
  }

  const benefitList: BenefitsProps[] = [
    {
      icon: "blocks",
      title: "Tecnología Avanzada",
      description:
        "Equipos de última generación para diagnósticos precisos y tratamientos más efectivos y cómodos.",
    },
    {
      icon: "lineChart",
      title: "Experiencia Profesional",
      description:
        "Más de 15 años de experiencia en odontología con especialistas certificados en cada área.",
    },
    {
      icon: "wallet",
      title: "Planes de Financiamiento",
      description:
        "Facilidades de pago y planes personalizados para que el costo no sea una barrera para tu salud dental.",
    },
    {
      icon: "sparkle",
      title: "Atención Personalizada",
      description:
        "Cada paciente es único. Creamos planes de tratamiento personalizados adaptados a tus necesidades específicas.",
    },
  ];

  const iconMap = {
    sparkle: Sparkle,
    tag: Tag,
    paintbrush: Paintbrush,
    blocks: Blocks,
    lineChart: LineChart,
    wallet: Wallet,
  };
</script>

<section id="benefits" class="container py-24 sm:py-32">
  <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
    <div>
      <h2 class="text-lg text-primary mb-2 tracking-wider">Ventajas</h2>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        ¿Por Qué Elegirnos?
      </h2>
      <p class="text-xl text-muted-foreground mb-8">
        Combinamos experiencia profesional, tecnología de vanguardia y un trato
        humano excepcional para brindarte la mejor atención dental.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-4 w-full">
      {#each benefitList as { icon, title, description }, index}
        <Card class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number">
          <CardHeader>
            <div class="flex justify-between">
              <svelte:component 
                this={iconMap[icon]} 
                class="size-8 mb-6 text-primary"
              />
              <span class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                0{index + 1}
              </span>
            </div>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {description}
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
