import { useState } from "react";
import instanciaAPI from "../../utils/api.ts";

const PortalDoAlunoRegistro = () => {
  const [dadosAluno, setDadosAluno] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    data_nascimento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDadosAluno((prev) => ({ ...prev, [name]: value }));
  };

  const enviarFormularioRegistro = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await instanciaAPI.post("/aluno", dadosAluno);
      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <main className="flex items-center justify-center w-full p-8 h-full">
      <form
        onSubmit={enviarFormularioRegistro}
        className="flex flex-col gap-2 p-4 bg-zinc-400 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="nome"
          placeholder="Seu Nome"
          value={dadosAluno.nome}
          onChange={handleChange}
          className="bg-zinc-300 rounded-lg p-2"
        />
        <input
          type="email"
          name="email"
          value={dadosAluno.email}
          placeholder="Seu Email"
          onChange={handleChange}
          className="bg-zinc-300 rounded-lg p-2"
        />
        <input
          type="password"
          name="senha"
          placeholder="Sua Senha"
          value={dadosAluno.senha}
          onChange={handleChange}
          className="bg-zinc-300 rounded-lg p-2"
        />
        <input
          type="text"
          name="telefone"
          placeholder="Seu Telefone"
          value={dadosAluno.telefone}
          onChange={handleChange}
          className="bg-zinc-300 rounded-lg p-2"
        />
        <input
          type="date"
          name="data_nascimento"
          placeholder="Sua Data de nascimento"
          value={dadosAluno.data_nascimento}
          onChange={handleChange}
          className="bg-zinc-300 rounded-lg p-2"
        />

        <button
          type="submit"
          className="bg-secondary text-white p-2 rounded-md cursor-pointer"
        >
          Registrar
        </button>
      </form>
    </main>
  );
};

export default PortalDoAlunoRegistro;
