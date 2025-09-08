import type { Convenio, GrauEscolaridade, TipoCartao } from './intarfaces-enum';

export interface AlunoLoginInterface {
  email: string;
  senha: string;
}

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

export interface AlunoMatriculaInterface {
  id: number;
  ano_letivo: number;
  instituicao: string;
  data_inicio: Date;
  data_fim: Date;
  grau_scolaridade: GrauEscolaridade;
  serie_ou_periodo: number;
  curso: string;
  turno: 'matutino' | 'vespertino' | 'noturno' | 'integral';
  convenio: Convenio;
  cgm: string;
  distancia_instituicao: number;
  status_matricula: boolean;
}
