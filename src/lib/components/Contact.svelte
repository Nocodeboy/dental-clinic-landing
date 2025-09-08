<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card, CardHeader, CardContent, CardFooter } from "$lib/components/ui/card";
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Alert, AlertDescription, AlertTitle } from "$lib/components/ui/alert";
  import { AlertCircle, Building2, Phone, Mail, Clock } from "lucide-svelte";
  import * as Select from "$lib/components/ui/select/index.js";

  interface ContactFormProps {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  }

  let contactForm: ContactFormProps = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "Consulta General",
    message: "",
  };

  let invalidInputForm = false;

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const { firstName, lastName, email, subject, message } = contactForm;
    console.log(contactForm);

    const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;
    window.location.href = mailToLink;
  }

  const subjects = [
    { value: "Consulta General", label: "Consulta General" },
    { value: "Ortodoncia", label: "Ortodoncia" },
    { value: "Implantes Dentales", label: "Implantes Dentales" },
    { value: "Estética Dental", label: "Estética Dental" },
    { value: "Emergencia Dental", label: "Emergencia Dental" }
  ];

  $: triggerContent = subjects.find(s => s.value === contactForm.subject)?.label ?? "Select a subject";
</script>

<section id="contact" class="container py-24 sm:py-32">
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <div class="mb-4">
        <h2 class="text-lg text-primary mb-2 tracking-wider">Contacto</h2>
        <h2 class="text-3xl md:text-4xl font-bold">Conecta Con Nosotros</h2>
      </div>
      <p class="mb-8 text-muted-foreground lg:w-5/6">
        Estamos aquí para atender todas tus necesidades dentales. Programa tu cita 
        o contáctanos para cualquier consulta. Tu salud dental es nuestra prioridad.
      </p>

      <div class="flex flex-col gap-4">
        <div>
          <div class="flex gap-2 mb-1">
            <Building2 />
            <div class="font-bold">Encuéntranos</div>
          </div>
          <div>Av. Salud Dental 123, Colonia Centro, Ciudad México</div>
        </div>

        <div>
          <div class="flex gap-2 mb-1">
            <Phone />
            <div class="font-bold">Llámanos</div>
          </div>
          <div>+52 (55) 1234-5678</div>
        </div>

        <div>
          <div class="flex gap-2 mb-1">
            <Mail />
            <div class="font-bold">Escríbenos</div>
          </div>
          <div>contacto@clinicadental.com</div>
        </div>

        <div>
          <div class="flex gap-2 mb-1">
            <Clock />
            <div class="font-bold">Visítanos</div>
          </div>
          <div>
            <div>Lunes - Viernes</div>
            <div>8:00 AM - 6:00 PM</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Form -->
    <Card class="bg-muted/60 dark:bg-card">
      <CardHeader class="text-primary text-2xl" />
      <CardContent>
        <form on:submit={handleSubmit} class="grid gap-4">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="flex flex-col w-full gap-1.5">
              <Label for="firstName">Nombre</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Leopoldo"
                bind:value={contactForm.firstName}
              />
            </div>

            <div class="flex flex-col w-full gap-1.5">
              <Label for="lastName">Apellido</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Miranda"
                bind:value={contactForm.lastName}
              />
            </div>
          </div>

          <div class="flex flex-col gap-1.5">
            <Label for="contactEmail">Email</Label>
            <Input
              id="contactEmail"
              type="email"
              placeholder="leomirandadev@gmail.com"
              bind:value={contactForm.email}
            />
          </div>

          <div class="flex flex-col gap-1.5">
            <Label for="contactSubject">Asunto</Label>
            <Select.Root type="single" bind:value={contactForm.subject}>
              <Select.Trigger id="contactSubject" class="w-full">
                {triggerContent}
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  {#each subjects as subject}
                    <Select.Item value={subject.value} label={subject.label}>
                      {subject.label}
                    </Select.Item>
                  {/each}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>

          <div class="flex flex-col gap-1.5">
            <Label for="contactMessage">Mensaje</Label>
            <Textarea
              id="contactMessage"
              placeholder="Tu mensaje..."
              rows={5}
              bind:value={contactForm.message}
            />
          </div>

          {#if invalidInputForm}
            <Alert variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Hay un error en el formulario. Por favor verifica tu información.
              </AlertDescription>
            </Alert>
          {/if}

          <Button class="mt-4">Enviar mensaje</Button>
        </form>
      </CardContent>
      <CardFooter />
    </Card>
  </section>
</section>
