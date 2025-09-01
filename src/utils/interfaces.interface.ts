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

export interface AlunoDocumentoInterface {
  alunoDocumentoId: number;
  rg: number;
  cpf: number;
  orgao_emissor: string;
  comprovante_matricula: string;
  atestado_frequencia: string;
  liberado: boolean;
}
