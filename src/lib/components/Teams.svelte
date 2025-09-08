<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "$lib/components/ui/card";

  import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte";
  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  import XIcon from "$lib/icons/XIcon.svelte";

  interface TeamProps {
    imageUrl: string;
    firstName: string;
    lastName: string;
    positions: string[];
    socialNetworks: SocialNetworkProps[];
  }

  interface SocialNetworkProps {
    name: 'LinkedIn' | 'Github' | 'X';
    url: string;
  }

  const teamList: TeamProps[] = [
    {
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    firstName: "Dr. Carlos",
    lastName: "Martínez",
    positions: ["Director Médico", "18 años de experiencia", "Certificación Harvard Medical"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    firstName: "Dra. Ana",
    lastName: "López",
    positions: ["Ortodoncista Certificada", "15 años de experiencia", "Especialista Invisalign® Diamond"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    firstName: "Dr. Luis",
    lastName: "García",
    positions: ["Implantólogo Certificado", "12 años de experiencia", "Especialista Nobel Biocare®"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1594824804732-ca8fbf272d2a?w=400&h=400&fit=crop&crop=face",
    firstName: "Dra. María",
    lastName: "Torres",
    positions: ["Endodoncista Certificada", "10 años de experiencia", "Especialista en Microcirugía"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    firstName: "Dr. Roberto",
    lastName: "Sánchez",
    positions: ["Periodoncista Certificado", "14 años de experiencia", "Especialista en Regeneración Ósea"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "#",
      },
    ],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face",
    firstName: "Dra. Laura",
    lastName: "Herrera",
    positions: ["Odontopediatra Certificada", "8 años de experiencia", "Especialista en Sedación Infantil"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
    ],
  },
  ];

  const socialIconMap = {
    LinkedIn: LinkedInIcon,
    Github: GithubIcon,
    X: XIcon,
  };
</script>

<section id="team" class="container max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
  <div class="text-center mb-12">
    <h2 class="text-lg text-primary text-center mb-3 tracking-wider">Equipo</h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold">
      Especialistas Certificados Internacionalmente
    </h2>
    <p class="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
      Profesionales con <strong>formación europea y norteamericana</strong>, certificaciones internacionales
      y más de <span class="text-primary font-semibold">100 horas anuales de educación continua</span>.
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-center items-start">
    {#each teamList as { imageUrl, firstName, lastName, positions, socialNetworks }}
      <Card class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              src={imageUrl}
              alt={`${firstName} ${lastName}`}
              class="w-full aspect-square object-cover saturate-0 transition-all duration-300 ease-in-out group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-105"
            />
          </div>
          <CardTitle class="p-4 sm:p-6">
            {firstName}
            <span class="text-primary">{lastName}</span>
          </CardTitle>
        </CardHeader>

        <div class="px-4 sm:px-6 flex-grow">
          {#each positions as position, index}
            <CardContent class="p-0 pb-2 text-muted-foreground">
              {position}{#if index < positions.length - 1},{/if}
            </CardContent>
          {/each}
        </div>

        <CardFooter class="space-x-4 px-4 sm:px-6 py-4">
          {#each socialNetworks as { name, url }}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              class="hover:opacity-80 transition-opacity"
              aria-label="Visit our {name} page"
            >
              <svelte:component this={socialIconMap[name]} />
            </a>
          {/each}
        </CardFooter>
      </Card>
    {/each}
  </div>
</section>
