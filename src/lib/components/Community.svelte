<script lang="ts">
  import {
    Card,
    CardHeader,
    CardTitle,
    CardFooter,
    CardContent,
  } from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import DiscordIcon from "$lib/icons/DiscordIcon.svelte";
</script>

<section id="community" class="py-12">
  <hr />
  <div class="container py-20 sm:py-20">
    <div class="lg:w-[60%] mx-auto">
      <Card class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0">
        <CardHeader>
          <CardTitle class="text-4xl md:text-5xl font-bold">
            <DiscordIcon class="w-20 h-20 m-auto mb-4" />
            ¿Listo para unirte a nuestra
            <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Comunidad?
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
          ¡Únete a nuestra vibrante comunidad de pacientes! Conéctate, comparte experiencias y crece junto a otros que priorizan su salud dental. ¡Haz clic para comenzar! 🦷
        </CardContent>

        <CardFooter>
          <Button>
            <a
              href="#contact"
              class="w-full h-full"
            >
              Únete a Nosotros
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
  <hr />
</section>
