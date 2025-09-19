import type { ColumnDef } from '@tanstack/react-table';
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
  formulario_educard: string;
  declaracao_matricula: string;
  comprovante_pagamento: string;
  comprovante_residência: string;
  rf_frente_ou_verso: string;
  liberado: boolean;
}

export interface DataTableInterface<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  renderizarMobile?: (row: TData) => React.ReactNode;
  mensagemDadosVazios?: string;
}
