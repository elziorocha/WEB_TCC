export interface AlunoRegistroInterface {
  nome: string;
  email: string;
  senha: string;
  data_nascimento: string;
  telefone: string;
}

export interface AlunoLoginInterface {
  email: string;
  senha: string;
}
