import Image from "next/image";
import { Container } from "@/components/Container";

const Tech = () => {
  return (
    <>
      <Container className="flex flex-col items-center justify-center text-center">
        <h2 className="max-w-2xl p-0 mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Nuestro stack
        </h2>
        <div className="container p-8 mx-auto xl:px-0 flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Usamos <span className="text-indigo-600">tecnología probada</span>{" "}
            en el mundo
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src="/img/openai_logo.svg"
                alt="Open AI"
                width="142"
                height="35"
              />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <Image
                src="/img/python_logo.svg"
                alt="Python"
                width="144"
                height="35"
              />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image
                src="/img/docker_logo.svg"
                alt="Docker"
                width="135"
                height="35"
              />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image
                src="/img/gcp_logo.svg"
                alt="Google Cloud Platform"
                width="185"
                height="29"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src="/img/nvidia_logo.svg"
                alt="Nvidia"
                width="185"
                height="29"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Tech;
