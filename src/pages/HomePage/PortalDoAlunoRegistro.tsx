import { useState } from "react";
import instanciaAPI from '../../utils/api.ts';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await instanciaAPI.post("/aluno", dadosAluno);
      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={dadosAluno.nome}
          onChange={handleChange}
          className="bg-green-400 p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={dadosAluno.email}
          onChange={handleChange}
          className="bg-green-400 p-2"
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={dadosAluno.senha}
          onChange={handleChange}
          className="bg-green-400 p-2"
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={dadosAluno.telefone}
          onChange={handleChange}
          className="bg-green-400 p-2"
        />
        <input
          type="date"
          name="data_nascimento"
          placeholder="Data de nascimento"
          value={dadosAluno.data_nascimento}
          onChange={handleChange}
          className="bg-green-400 p-2"
        />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Registrar
        </button>
      </form>
    </main>
  );
};

export default PortalDoAlunoRegistro;
