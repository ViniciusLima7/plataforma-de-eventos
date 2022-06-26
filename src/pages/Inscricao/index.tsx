import { gql, useMutation } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { useCreateSubscriberMutation } from "../../graphql/generated";
import ImgCodeMockup from "/src/assets/code-mockup.png";

export default function Inscricao() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createInscricao, { loading }] = useCreateSubscriberMutation();

  async function handleInscricao(event: FormEvent) {
    event.preventDefault();

    await createInscricao({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className=" w-full max-w-[1110px]  flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block ">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleInscricao}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Digite seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              className="bg-green-500 mt-4 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={ImgCodeMockup} className="mt-10" alt="" />
      <Footer />
    </div>
  );
}
