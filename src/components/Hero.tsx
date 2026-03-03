import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Inteligencia Artificial para la Vida Real
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              En idioma Mbya Guaraní, la palabra katupyry significa <b>inteligencia</b>, <b>sagacidad</b>. 
              Es la cualidad que se necesita para vivir en la selva misionera, para tener un conocimiento minucioso sobre dónde y cómo cazar, 
              extraer materiales, recolectar frutos y miel, o saber con qué planta se puede 
              tratar una dolencia. Son saberes que se actualizan permanentemente y se transmiten de generación en generación, 
              preservando la identidad cultural y buscando el bienestar de la comunidad.
              <br />
              <br />
              En Katupyry aplicamos toda la inteligencia a nuestro alcance para resolver problemas de la vida real. 
              </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/about-us"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Conocé más
              </a>              
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}


