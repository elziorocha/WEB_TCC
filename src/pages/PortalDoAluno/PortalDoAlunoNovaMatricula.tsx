import type React from 'react';
import { criarAlunoMatricula } from '@/services/apiMatricula';
import type { AlunoMatriculaInterface } from '@/utils/interfaces.interface';
import { useState } from 'react';
import {
  Building2Icon,
  CalendarDays,
  GraduationCap,
  BookOpen,
  Clock,
  Handshake,
  MapPin,
  FileText,
  Loader2,
  ArrowLeftIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function PortalDoAlunoNovaMatricula() {
  const [formData, setFormData] = useState<Partial<AlunoMatriculaInterface>>({
    ano_letivo: new Date().getFullYear(),
    turno: undefined,
  });

  const { criarMatricula, loading } = criarAlunoMatricula();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : [
                'ano_letivo',
                'serie_ou_periodo',
                'distancia_instituicao',
              ].includes(name)
            ? Number(value)
            : value,
    }));
  };

  const dadosAlunoMatricula = (e: React.FormEvent) => {
    e.preventDefault();
    criarMatricula(formData);
  };

  return (
    <main className="flex max-w-4xl flex-col gap-4 p-3">
      <Link
        to="/portal-do-aluno/dashboard"
        className="bg-primary text-blackText self-start rounded-lg px-3 py-1.5 text-sm shadow-md"
      >
        <div className="text-yellowText flex items-center gap-1 font-semibold">
          <ArrowLeftIcon className="size-5" />
          <span>Voltar</span>
        </div>
      </Link>

      <div className="overflow-hidden rounded-2xl border-none bg-white shadow-lg">
        <header className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-4 sm:px-6 sm:py-6">
          <h1 className="flex items-center gap-2 text-xl font-bold text-blue-700 sm:text-2xl">
            <GraduationCap className="size-6 sm:size-8" />
            Nova Matrícula
          </h1>
          <p className="mt-1 text-sm text-gray-600 sm:text-base">
            Preencha os dados para criar uma nova matrícula
          </p>
        </header>

        <div className="px-4 py-4 sm:px-6 sm:py-6">
          <form onSubmit={dadosAlunoMatricula} className="space-y-4">
            <section className="space-y-3">
              <div className="flex items-center gap-2 font-semibold text-blue-700">
                <CalendarDays className="size-4" />
                <span className="text-xs uppercase sm:text-sm">
                  Informações Básicas
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-1">
                  <label className="flex items-center gap-1 text-xs font-medium text-gray-600">
                    <CalendarDays className="size-3" />
                    Ano Letivo
                  </label>
                  <input
                    type="number"
                    name="ano_letivo"
                    value={formData.ano_letivo || ''}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="2024"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="flex items-center gap-1 text-xs font-medium text-gray-600">
                    <GraduationCap className="size-3" />
                    Série/Período
                  </label>
                  <input
                    type="number"
                    name="serie_ou_periodo"
                    value={formData.serie_ou_periodo || ''}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="1"
                    required
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="flex items-center gap-1 text-xs font-medium text-gray-600">
                    <Building2Icon className="size-3" />
                    Instituição
                  </label>
                  <input
                    type="text"
                    name="instituicao"
                    value={formData.instituicao || ''}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Nome da Instituição"
                    required
                  />
                </div>
              </div>
            </section>

            <hr className="border-dashed border-zinc-300" />

            <section className="space-y-3">
              <div className="flex items-center gap-2 font-semibold text-blue-700">
                <BookOpen className="size-4" />
                <span className="text-xs uppercase sm:text-sm">
                  Período e Curso
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">
                    Data de Início
                  </label>
                  <input
                    type="date"
                    name="data_inicio"
                    value={
                      formData.data_inicio
                        ? new Date(formData.data_inicio)
                            .toISOString()
                            .split('T')[0]
                        : ''
                    }
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">
                    Data de Fim
                  </label>
                  <input
                    type="date"
                    name="data_fim"
                    value={
                      formData.data_fim
                        ? new Date(formData.data_fim)
                            .toISOString()
                            .split('T')[0]
                        : ''
                    }
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-medium text-gray-600">
                    Grau de Escolaridade
                  </label>
                  <select
                    name="grau_scolaridade"
                    value={formData.grau_scolaridade || ''}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  >
                    <option value="">Selecione o grau</option>
                    <option value="Ensino Fundamental">
                      Ensino Fundamental
                    </option>
                    <option value="Ensino Médio">Ensino Médio</option>
                    <option value="Ensino Superior">Ensino Superior</option>
                    <option value="Curso Técnico Semestral">
                      Curso Técnico Semestral
                    </option>
                    <option value="Curso Técnico Anual">
                      Curso Técnico Anual
                    </option>
                    <option value="CEEBJA e EJAs Fundamental">
                      CEEBJA e EJAs Fundamental
                    </option>
                    <option value="CEEBJA e EJAs Médio">
                      CEEBJA e EJAs Médio
                    </option>
                  </select>
                </div>

                <div className="space-y-1 sm:col-span-2 lg:col-span-4">
                  <label className="flex items-center gap-1 text-xs font-medium text-gray-600">
                    <BookOpen className="size-3" />
                    Curso
                  </label>
                  <input
                    type="text"
                    name="curso"
                    value={formData.curso || ''}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Nome do Curso"
                    required
                  />
                </div>
              </div>
            </section>

            <hr className="border-dashed border-zinc-300" />

            <section className="space-y-3">
              <div className="flex items-center gap-2 font-semibold text-blue-700">
                <Clock className="size-4" />
                <span className="text-xs uppercase sm:text-sm">
                  Detalhes Complementares
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-1">
                  <label className="flex items-center gap-1 text-xs font-medium text-gray-600">
                    <Clock className="size-3" />
                    Turno
                  </label>
                  <select
                    name="turno"
                    value={formData.turno || ''}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  >
                    <option value="">Selecione o turno</option>
                    <option value="Matutino">Matutino</option>
                    <option value="Vespertino">Vespertino</option>
                    <option value="Noturno">Noturno</option>
                    <option value="Integral">Integral</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="flex items-center gap-1 text-xs font-medium text-gray-600">
                    <MapPin className="size-3" />
                    Distância (km)
                  </label>
                  <input
                    type="number"
                    name="distancia_instituicao"
                    value={formData.distancia_instituicao || ''}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="0"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="flex items-center gap-1 text-xs font-medium text-gray-600">
                    <Handshake className="size-3" />
                    Convênio
                  </label>
                  <select
                    name="convenio"
                    value={formData.convenio || ''}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  >
                    <option value="">Selecione o convênio</option>
                    <option value="ProUni">ProUni</option>
                    <option value="FIES">FIES</option>
                    <option value="EducaMais">EducaMais</option>
                    <option value="Bolsa">Bolsa</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="flex items-center gap-1 text-xs font-medium text-gray-600">
                    <FileText className="size-3" />
                    CGM
                  </label>
                  <input
                    type="text"
                    name="cgm"
                    value={formData.cgm || ''}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Número do CGM"
                    required
                  />
                </div>
              </div>
            </section>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Salvando...
                  </>
                ) : (
                  <>
                    <GraduationCap className="size-4" />
                    Criar Matrícula
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
