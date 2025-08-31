export type TipoCartao = "VEM" | "EDUCARD";

export interface AlunoInterface {
  alunoId: number;
  nome: string;
  email: string;
  telefone: string;
  data_nascimento: string;
  tipo_cartao: TipoCartao | null;
  criado_em: string;
  aluno_documentoId: number | null;
  aluno_enderecoId: number | null;
  aluno_responsavelId: number | null;
}
