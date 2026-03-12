import Image from "next/image";
import bgMed from "../../../../public/med.png"
import { Button } from "@/components/ui/button";

export function Hero() {
  return (

    <section className=" bg-white">

      <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">
        <main className="flex items-center justify-center">
          <article className=" flex-2 max-w-3xl space-y-8 me-8 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl max-w-2xl tracking-tight font-bold">
              Encontre o profissional ideal para cuidar da sua saúde!
            </h1>
            <p className="text-base">
              Nós conectamos pacientes a dentistas qualificados, oferecendo uma plataforma fácil de usar para agendar consultas, ler avaliações e encontrar o cuidado odontológico perfeito para você.
            </p>
            <Button className="bg-green-500 hover:bg-green-300 w-fit px-6 font-bold">
              Encontre um dentista
            </Button>
          </article>

          <div className="hidden lg:block ">
            <Image
              src={bgMed}
              alt="Imagem de um dentista"
              width={340}
              height={400}
              className="object-contain"
              quality={100}
              priority
            />
          </div>

        </main>
      </div>

    </section>

  );
}
