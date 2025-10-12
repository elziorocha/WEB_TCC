import type { ColumnDef } from '@tanstack/react-table';
import type { Convenio, GrauEscolaridade, TipoCartao } from './intarfaces-enum';

export interface AlunoLoginInterface {
  email: string;
  senha: string;
}

export interface AlunoRegistroInterface {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  data_nascimento: string;
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
  rg: string;
  cpf: string;
  orgao_emissor: string;
}

export interface AlunoEnderecoInterface {
  cep: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: number;
}

export interface AlunoResponsavelInterface {
  cpf_mae: string;
  nome_mae: string;
  nome_pai: string;
  nome_responsavel: string;
}

export interface AlunoMatriculaInterface {
  id: number;
  ano_letivo: number;
  instituicao: string;
  data_inicio: string;
  data_fim: string;
  grau_scolaridade: GrauEscolaridade;
  serie_ou_periodo: number;
  curso: string;
  turno: 'matutino' | 'vespertino' | 'noturno' | 'integral' | 'Sem Convênio';
  convenio: Convenio;
  cgm: string;
  distancia_instituicao: number;
  status_matricula: boolean;
}

export interface AlunoProcessoInterface {
  processoId: number;
  formulario_educard: boolean;
  formulario_educard_url?: string;

  declaracao_matricula: boolean;
  declaracao_matricula_url?: string;

  comprovante_pagamento: boolean;
  comprovante_pagamento_url?: string;

  comprovante_residencia_url?: string;
  comprovante_residencia: boolean;

  rg_frente_ou_verso: boolean;
  rg_frente_ou_verso_url?: string;

  liberado: boolean;
}

export interface PortalDoAlunoDocumentoProcessoInterface {
  label: string;
  status: boolean;
  arquivoUrl?: string;
}

export interface DataTableInterface<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  renderizarMobile?: (row: TData) => React.ReactNode;
  mensagemDadosVazios?: string;
}

export interface DatePickerInputPropsInterface {
  value: string;
  onChange: (date: string) => void;
  min?: string;
  max?: string;
  required?: boolean;
  placeholder?: string;
}
