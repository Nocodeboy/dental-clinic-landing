<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import { ArrowRight } from "lucide-svelte";
    import { mode } from "mode-watcher";
    import { onMount } from 'svelte';

    let imageSrc = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop&crop=center';
    
    onMount(() => {
        mode.subscribe(currentMode => {
            imageSrc = currentMode === 'dark' 
                ? 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=800&fit=crop&crop=center'
                : 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop&crop=center';
        });
    });

</script>

<section class="container">
    <div
        class="grid place-items-center lg:max-w-screen-xl gap-12 mx-auto py-24 md:py-36"
    >
        <div class="text-center space-y-10">
            <Badge variant="outline" class="text-sm py-2">
                <span class="mr-2 text-primary">
                    <Badge>Urgente</Badge>
                </span>
                <span>🚨 Citas de emergencia disponibles 24/7</span>
            </Badge>

            <div
                class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
            >
                <h1>
                    Recupera tu
                    <span
                        class="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"
                    >
                        Sonrisa Saludable
                    </span>
                    en tiempo récord
                </h1>
            </div>

            <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground leading-relaxed">
                <strong class="text-foreground">Clínica especializada</strong> con más de <strong class="text-foreground">15 años de experiencia</strong> y tecnología de vanguardia.
                Tratamientos sin dolor garantizados con profesionales certificados internacionalmente.
                <span class="text-primary font-semibold block mt-2">¡Resultados visibles desde la primera cita!</span>
            </p>

            <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                <Button class="px-8 py-3 text-lg font-bold group/arrow bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl">
                    🏥 Agendar Cita
                    <ArrowRight
                        class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
                    />
                </Button>

                <Button variant="outline" class="px-8 py-3 text-lg font-bold border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    📞 Emergencia 24/7
                </Button>
            </div>
            
            <!-- Trust Indicators -->
            <div class="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
                <div class="flex items-center gap-3">
                    <span class="text-primary font-bold text-lg">✓</span>
                    <span class="font-medium">Certificación Internacional</span>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-primary font-bold text-lg">✓</span>
                    <span class="font-medium">+5,000 Pacientes Satisfechos</span>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-primary font-bold text-lg">✓</span>
                    <span class="font-medium">Garantía de Resultados</span>
                </div>
            </div>
        </div>

        <div class="relative group mt-14">
            <div
                class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
            ></div>

            <img
                class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
                src={imageSrc}
                alt="Clínica dental certificada con tecnología de vanguardia y especialistas con más de 15 años de experiencia"
            />

            <div
                class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
            ></div>
        </div>
    </div>
</section>

<style>
    .img-shadow-animation {
        animation-name: img-shadow-animation;
        animation-iteration-count: infinite;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-direction: alternate;
    }

    .img-border-animation {
        animation-name: img-border-animation;
        animation-iteration-count: infinite;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-direction: alternate;
    }

    @keyframes img-shadow-animation {
        from {
            opacity: 0.5;
            transform: translateY(30px);
        }

        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @keyframes img-border-animation {
        from {
            @apply border-t-primary/10;
        }

        to {
            @apply border-t-primary/60;
        }
    }
</style>
