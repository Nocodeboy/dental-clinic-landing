<script lang="ts">
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "$lib/components/ui/accordion";

  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }

  const FAQList: FAQProps[] = [
    {
      question: "¿Los tratamientos dentales son realmente sin dolor?",
      answer: "Utilizamos protocolos de anestesia avanzada, sedación consciente y técnicas microinvasivas. Nuestros especialistas certificados garantizan procedimientos indoloros con tecnología láser de última generación.",
      value: "item-1",
    },
    {
      question: "¿Cuál es la frecuencia recomendada para revisiones profesionales?",
      answer:
        "Según protocolos internacionales, recomendamos profilaxis cada 6 meses y evaluaciones de riesgo trimestuales para pacientes de alto riesgo. Nuestro diagnóstico digital 3D permite detección temprana con 99.5% de precisión.",
      value: "item-2",
    },
    {
      question:
        "¿Qué opciones de financiamiento ofrecen para tratamientos especializados?",
      answer:
        "Contamos con financiamiento 0% interés hasta 24 meses, seguros dentales privados y planes corporativos. Aceptamos todas las tarjetas de crédito y ofrecemos descuentos por pago anticipado.",
      value: "item-3",
    },
    {
      question: "🚨 ¿Qué debo hacer en una emergencia dental?",
      answer: "LLAME INMEDIATAMENTE al +52 (55) 1234-5678. Atendemos emergencias 24/7/365 con especialista de guardia. Para trauma dental: preserve el diente en leche, aplique presión en hemorragias y acuña a nuestra clínica.",
      value: "item-4",
    },
    {
      question:
        "¿Cuándo debe ser la primera consulta odontopediátrica?",
      answer: "La Academia Americana de Odontopediatría recomienda la primera consulta antes del primer año de edad. Nuestro protocolo incluye educación para padres, prevención de caries y adaptación gradual.",
      value: "item-5",
    },
    {
      question: "¿Qué garantías ofrecen en sus tratamientos?",
      answer: "Todos nuestros tratamientos incluyen garantía escrita: implantes (garantía de por vida), ortodoncia (resultados garantizados), blanqueamientos (resultados mínimos garantizados). Respaldados por seguro de responsabilidad profesional.",
      value: "item-6",
    },
  ];
</script>

<section id="faq" class="container md:w-[700px] py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">PREGUNTAS</h2>
    <h2 class="text-3xl md:text-4xl text-center font-bold">
      Preguntas Frecuentes de Pacientes
    </h2>
    <p class="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
      Respuestas profesionales basadas en <strong>evidencia clínica</strong> y protocolos internacionales
    </p>
  </div>

  <Accordion type="single" class="w-full">
    {#each FAQList as { question, answer, value }}
      <AccordionItem {value}>
        <AccordionTrigger class="text-left">
          {question}
        </AccordionTrigger>
        <AccordionContent>
          {answer}
        </AccordionContent>
      </AccordionItem>
    {/each}
  </Accordion>

  <div class="mt-8 text-center">
    <h3 class="font-medium mb-4">
      ¿Aún tienes dudas? 🤔
    </h3>
    <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
      <a href="#contact" class="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
        📞 Consulta Gratuita
      </a>
      <a href="tel:+525512345678" class="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
        🚨 Emergencia 24/7
      </a>
    </div>
  </div>
</section>
