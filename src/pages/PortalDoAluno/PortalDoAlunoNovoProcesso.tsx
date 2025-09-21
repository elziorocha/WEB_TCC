import type React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileText,
  GraduationCap,
  Loader2,
  ArrowLeftIcon,
  Upload,
  Check,
} from 'lucide-react';
import { criarAlunoProcesso } from '@/services/ChamadasApi/apiProcessos';

export const PortalDoAlunoNovoProcesso = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [arquivosSelecionados, setArquivosSelecionados] = useState<
    Record<string, boolean>
  >({});
  const navigate = useNavigate();

  const { criarProcesso, loading } = criarAlunoProcesso();

  const inputArquivo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) setFormData(new FormData());

    const arquivos = e.target.files;
    if (arquivos && arquivos[0]) {
      const newFormData = formData || new FormData();
      newFormData.set(e.target.name, arquivos[0]);
      setFormData(newFormData);

      setArquivosSelecionados((prev) => ({
        ...prev,
        [e.target.name]: true,
      }));
    }
  };

  const enviarArquivos = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    await criarProcesso(formData);
    navigate('/portal-do-aluno/consultar-processo');
  };

  const FileInputField = ({
    name,
    arquivoAceito,
    label,
    icone: Icon = FileText,
  }: {
    name: string;
    arquivoAceito: string;
    label: string;
    icone?: any;
  }) => {
    const temArquivo = arquivosSelecionados[name];

    return (
      <div className="space-y-1">
        <label className="ml-1 flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
          <Icon className="size-4 sm:size-5" />
          {label}
        </label>
        <div className="relative">
          <input
            type="file"
            name={name}
            accept={arquivoAceito}
            onChange={inputArquivo}
            required
            className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
          />
          <div
            className={`flex h-24 w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed transition-all duration-200 ${
              temArquivo
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100'
            } `}
          >
            {temArquivo ? (
              <main className="flex flex-col items-center justify-center gap-2">
                <Check className="size-6 text-green-600" />
                <span className="text-xs font-medium">Arquivo submetido</span>
              </main>
            ) : (
              <main className="flex flex-col items-center justify-center gap-2">
                <Upload className="size-6 text-gray-400" />
                <span className="text-xs text-gray-500">
                  Clique para enviar
                </span>
              </main>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="flex w-full flex-col gap-4 self-center p-3">
      <Link
        to="/portal-do-aluno/dashboard"
        className="bg-primary text-blackText hover:bg-primary/70 self-start rounded-lg px-3 py-1.5 text-sm shadow-md transition-all sm:px-4 sm:py-2 sm:text-base"
      >
        <div className="text-yellowText flex items-center gap-1 font-semibold">
          <ArrowLeftIcon className="size-5" />
          <span>Voltar</span>
        </div>
      </Link>

      <div className="max-w-4xl self-center overflow-hidden rounded-2xl bg-white shadow-lg sm:w-14/12">
        <header className="from-quarter/20 to-quarter/45 border-b border-dashed border-zinc-400 bg-gradient-to-br p-3 sm:px-6 sm:py-6">
          <h1 className="text-secondary flex items-center gap-2 text-xl font-bold sm:text-2xl">
            <GraduationCap className="size-6 sm:size-8" />
            Novo Processo
          </h1>
          <p className="mt-1 text-xs font-medium text-gray-700 sm:text-base">
            Envie os documentos necessários para criar um novo processo
          </p>
        </header>

        <div className="p-4 sm:p-6">
          <form onSubmit={enviarArquivos} className="space-y-6">
            <section className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <FileInputField
                name="formulario_educard"
                arquivoAceito=".pdf"
                label="Formulário Educard"
              />

              <FileInputField
                name="declaracao_matricula"
                arquivoAceito=".pdf"
                label="Declaração de Matrícula"
              />

              <FileInputField
                name="comprovante_pagamento"
                arquivoAceito=".jpg,.jpeg,.png"
                label="Comprovante de Pagamento"
              />

              <FileInputField
                name="comprovante_residencia"
                arquivoAceito=".jpg,.jpeg,.png"
                label="Comprovante de Residência"
              />

              <div className="sm:col-span-2">
                <FileInputField
                  name="rf_frente_ou_verso"
                  arquivoAceito=".jpg,.jpeg,.png"
                  label="RG Frente e Verso"
                />
              </div>
            </section>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400 sm:text-base"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Upload className="size-4 sm:size-6" />
                    Enviar Documentos
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
