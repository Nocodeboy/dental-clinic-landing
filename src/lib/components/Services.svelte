<script lang="ts">
  import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";

  const ProService = {
    YES: 1,
    NO: 0,
  } as const;

  type ProServiceType = typeof ProService[keyof typeof ProService];

  interface ServiceProps {
    title: string;
    pro: ProServiceType;
    description: string;
  }

  const serviceList: ServiceProps[] = [
    {
      title: "Odontología General",
      description:
        "Profilaxis profesional, obturaciones con resina compuesta y extracciones atraumáticas. 🕵️ Diagnóstico digital avanzado - 98% de éxito preventivo.",
      pro: 0,
    },
    {
      title: "Ortodoncia Avanzada",
      description:
        "Sistema Damon autoligado y ortodoncia invisible Invisalign®. 📊 Reducción del tiempo de tratamiento hasta 40% - Resultados garantizados.",
      pro: 0,
    },
    {
      title: "Implantología Premium",
      description: "Implantes dentales de titanio grado IV con tecnología Nobel Biocare®. 🏆 Tasa de éxito 99.2% - Garantía de por vida.",
      pro: 1,
    },
    {
      title: "Estética Dental Premium",
      description: "Carillas de porcelana ultrafinas, blanqueamiento Zoom!® y diseño de sonrisa digital. ✨ Resultados inmediatos - Sin sensibilidad.",
      pro: 1,
    },
  ];
</script>

<section id="services" class="container py-24 sm:py-32">
  <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
    Servicios
  </h2>

  <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    Tratamientos Especializados de Vanguardia
  </h2>
  <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    <strong>Tecnología europea certificada</strong> y protocolos clínicos internacionales.
    Más de <span class="text-primary font-semibold">15 años de experiencia</span> respaldando cada tratamiento.
  </h3>

  <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
    {#each serviceList as { title, description, pro }}
      <Card class="bg-muted/60 dark:bg-card h-full pb-6 relative">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {#if pro === ProService.YES}
          <Badge variant="secondary" class="absolute -top-2 -right-3">
            PREMIUM
          </Badge>
        {/if}
      </Card>
    {/each}
  </div>
</section>
