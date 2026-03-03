import {
  SunIcon,
  ChatBubbleLeftRightIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  AdjustmentsHorizontalIcon,
  PuzzlePieceIcon,
  LockOpenIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Cómo trabajamos",
  desc: "Personas reales. Problemas reales. Todas las inteligencias en la solución.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Escuchamos con atención",
      desc: "Necesitamos conocerte y que nos conozcas. Las personas ante todo.",  
      icon: <ChatBubbleLeftRightIcon />,
    },
    {
      title: "Entendemos el problema",
      desc: "Analizamos posibles soluciones con pragmatismo. No siempre es una IA.",
      icon: <Cog8ToothIcon />,
    },
    {
      title: "Implementamos lo acordado",  
      desc: "Y te mostramos los avances con frecuencia.",
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: "Tratamos de que las maquinas hagan el resto del trabajo",  
      desc: "Para tomar sol como seres humanos.",
      icon: <SunIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Qué hacemos",
  desc: "Tenemos experiencia en distintas áreas",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Integraciones de IA",
      desc: "Sacá provecho modelos de IA en tu sistema o las herramientas que ya usas.",
      icon: <PuzzlePieceIcon />,
    },
    {
      title: "Modelos open-source",
      desc: "Cuando aplica, usamos software y modelos de IA open-source que abaratan costos, dan transparencia y evitan el vendor lock-in.",
      icon: <LockOpenIcon />,
    },
    {
      title: "Entrenamiento y adaptaciones a medida",
      desc: "¿Qué tal un chatbot privado que conozca los detalles de tu negocio?",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Despliegue e infrastructuras escalables",
      desc: "Arquitecturas de cloud, on-prem, híbridas. Soluciones de inteligencia artificial en las que se pueda confiar.", 
      icon: <CpuChipIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
