import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { benefitOne, benefitTwo } from "@/components/data";
import Tech from "@/components/tech";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle preTitle="Katupyry" title="Nuestra vision">
        Vivimos en la era de la inteligencia artificial. Los modelos disponibles en la actualidad ya son una
        disrupcion cuyo impacto aun nos cuesta dimensionar en terminos economicos y sociales. En Katupyry construimos
        soluciones basadas en IA con una vision humana y sustentable, respetando la privacidad de las personas y
        ayudando a resolver problemas reales.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="Testimonios" title="Lo que dicen de nosotros" />
      <Testimonials />
      <Tech />
    </>
  );
}
