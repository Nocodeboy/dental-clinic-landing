<script lang="ts">
  import { ChevronsDown } from "lucide-svelte";
  import { Separator } from "$lib/components/ui/separator";
</script>

<footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
  <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
      <div class="col-span-full xl:col-span-2">
        <a href="/" class="flex font-bold items-center">
          <ChevronsDown class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
          <h3 class="text-2xl">Clínica Dental</h3>
        </a>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Contacto</h3>
        <div><a href="tel:+5255123456678" class="opacity-60 hover:opacity-100">Teléfono</a></div>
        <div><a href="mailto:contacto@clinicadental.com" class="opacity-60 hover:opacity-100">Email</a></div>
        <div><a href="#contact" class="opacity-60 hover:opacity-100">Ubicación</a></div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Servicios</h3>
        <div><span class="opacity-60 hover:opacity-100 cursor-default">Ortodoncia</span></div>
        <div><span class="opacity-60 hover:opacity-100 cursor-default">Implantes</span></div>
        <div><span class="opacity-60 hover:opacity-100 cursor-default">Estética</span></div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Ayuda</h3>
        <div><a href="#contact" class="opacity-60 hover:opacity-100">Contáctanos</a></div>
        <div><a href="#faq" class="opacity-60 hover:opacity-100">Preguntas</a></div>
        <div><a href="#contact" class="opacity-60 hover:opacity-100">Comentarios</a></div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Redes</h3>
        <div><a href="https://facebook.com" class="opacity-60 hover:opacity-100">Facebook</a></div>
        <div><a href="https://instagram.com" class="opacity-60 hover:opacity-100">Instagram</a></div>
        <div><a href="https://whatsapp.com" class="opacity-60 hover:opacity-100">WhatsApp</a></div>
      </div>
    </div>

    <Separator class="my-6" />
    
    <section>
      <h3>
        &copy; 2024 Clínica Dental - Todos los derechos reservados.
        <a
          href="#contact"
          class="text-primary transition-all border-primary hover:border-b-2"
        >
          Tu Salud Dental es Nuestra Pasión
        </a>
      </h3>
    </section>
  </div>
</footer>
