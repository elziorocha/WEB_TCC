import type React from 'react';
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
  Calendar,
  Notebook,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { criarAlunoMatricula } from '@/services/ChamadasApi/apiMatricula';
import { DatePickerInput } from '../HomePage/date-picker-input';

export function PortalDoAlunoNovaMatricula() {
  const [formData, setFormData] = useState<Partial<AlunoMatriculaInterface>>({
    ano_letivo: new Date().getFullYear(),
    turno: undefined,
  });
  const navigate = useNavigate();

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

  const { criarMatricula, loading } = criarAlunoMatricula();

  const dadosAlunoMatricula = (e: React.FormEvent) => {
    e.preventDefault();
    criarMatricula(formData);

    navigate('/portal-do-aluno/consultar-matricula');
  };

  const mostrarCurso =
    formData.grau_escolaridade === 'Ensino Superior' ||
    formData.grau_escolaridade?.includes('Técnico');

  const mostrarDadosCEEBJA = formData.grau_escolaridade?.includes('CEEBJA');

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

      <div className="max-w-5xl self-center rounded-2xl bg-white shadow-lg sm:w-14/12">
        <header className="from-quarter/20 to-quarter/45 border-b border-dashed border-zinc-400 bg-gradient-to-br p-3 sm:px-6 sm:py-6">
          <h1 className="text-secondary flex items-center gap-2 text-xl font-bold sm:text-2xl">
            <GraduationCap className="size-6 sm:size-8" />
            Nova Matrícula
          </h1>
          <p className="mt-1 text-xs font-medium text-gray-700 sm:text-base">
            Preencha os dados para criar uma nova matrícula
          </p>
        </header>

        <div className="p-4 sm:p-6">
          <form
            onSubmit={dadosAlunoMatricula}
            className="space-y-3 sm:space-y-6"
          >
            <section className="space-y-3 sm:space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                <section className="flex gap-3 sm:gap-6">
                  <div className="space-y-1">
                    <label className="ml-1 flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
                      <CalendarDays className="size-3 sm:size-4" />
                      Ano Letivo
                    </label>
                    <input
                      type="number"
                      name="ano_letivo"
                      value={formData.ano_letivo || ''}
                      onChange={handleChange}
                      placeholder="Ex: 2024"
                      required
                      className="input_matricula"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="ml-1 flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
                      <GraduationCap className="size-3 sm:size-4" />
                      Série/Período
                    </label>
                    <input
                      type="number"
                      name="serie_ou_periodo"
                      value={formData.serie_ou_periodo || ''}
                      onChange={handleChange}
                      placeholder="1"
                      required
                      className="input_matricula"
                    />
                  </div>
                </section>

                <div className="w-full space-y-1">
                  <label className="ml-1 flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
                    <Building2Icon className="size-3 sm:size-4" />
                    Instituição
                  </label>
                  <input
                    type="text"
                    name="instituicao"
                    value={formData.instituicao || ''}
                    onChange={handleChange}
                    placeholder="Nome da Instituição"
                    required
                    className="input_matricula"
                  />
                </div>
              </div>
            </section>

            <hr className="border-dashed border-zinc-300" />

            <section className="space-y-3 sm:space-y-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
                <div className="space-y-1">
                  <label className="ml-1 flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
                    <Calendar className="size-3 sm:size-4" />
                    Data de Início
                  </label>
                  <DatePickerInput
                    value={formData.data_inicio ?? ''}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, data_inicio: value }))
                    }
                    required
                    placeholder="Data de Início"
                  />
                </div>

                <div className="space-y-1">
                  <label className="ml-1 flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
                    <Calendar className="size-3 sm:size-4" />
                    Data de Fim
                  </label>
                  <DatePickerInput
                    value={formData.data_fim ?? ''}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, data_fim: value }))
                    }
                    required
                    placeholder="Data de Fim"
                  />
                </div>

                <div className="col-span-2 space-y-1">
                  <label className="ml-1 flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
                    <Notebook className="size-3 sm:size-4" />
                    Grau de Escolaridade
                  </label>
                  <select
                    name="grau_escolaridade"
                    value={formData.grau_escolaridade || ''}
                    onChange={handleChange}
                    required
                    className="input_matricula py-1.5"
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
              </div>

              {mostrarCurso && (
                <div className="space-y-1">
                  <label className="flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
                    <BookOpen className="size-3 sm:size-4" />
                    Curso
                  </label>
                  <input
                    type="text"
                    name="curso"
                    value={formData.curso || ''}
                    onChange={handleChange}
                    placeholder="Nome do Curso"
                    required
                    className="input_matricula"
                  />
                </div>
              )}
            </section>

            <hr className="border-dashed border-zinc-300" />

            <section className="space-y-3">
              <div className="flex w-12/12 flex-col gap-3 sm:flex-row sm:gap-6">
                <div className="w-full space-y-1">
                  <label className="ml-1 flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
                    <Clock className="size-3 sm:size-4" />
                    Turno
                  </label>
                  <select
                    name="turno"
                    value={formData.turno || ''}
                    onChange={handleChange}
                    required
                    className="input_matricula"
                  >
                    <option value="">Selecione o turno</option>
                    <option value="Matutino">Matutino</option>
                    <option value="Vespertino">Vespertino</option>
                    <option value="Noturno">Noturno</option>
                    <option value="Integral">Integral</option>
                  </select>
                </div>

                <div className="w-full space-y-1">
                  <label className="ml-1 flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
                    <Handshake className="size-3 sm:size-4" />
                    Convênio
                  </label>
                  <select
                    name="convenio"
                    value={formData.convenio || ''}
                    onChange={handleChange}
                    required
                    className="input_matricula"
                  >
                    <option value="">Selecione o convênio</option>
                    <option value="Sem Convênio">Sem Convênio</option>
                    <option value="ProUni">ProUni</option>
                    <option value="FIES">FIES</option>
                    <option value="EducaMais">EducaMais</option>
                    <option value="Bolsa">Bolsa</option>
                  </select>
                </div>

                {mostrarDadosCEEBJA && (
                  <section className="flex w-12/12 flex-col items-center gap-3 sm:flex-row sm:gap-6">
                    <div className="w-full space-y-1">
                      <label className="flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
                        <MapPin className="size-3 sm:size-4" />
                        Distância (km)
                      </label>
                      <input
                        type="number"
                        name="distancia_instituicao"
                        value={formData.distancia_instituicao || ''}
                        onChange={handleChange}
                        placeholder="0"
                        required
                        className="input_matricula"
                      />
                    </div>

                    <div className="w-full space-y-1">
                      <label className="flex items-center gap-1 text-xs font-medium text-gray-600 sm:text-sm">
                        <FileText className="size-3 sm:size-4" />
                        CGM
                      </label>
                      <input
                        type="text"
                        name="cgm"
                        value={formData.cgm || ''}
                        onChange={handleChange}
                        className="input_matricula"
                        placeholder="Número do CGM"
                        required
                      />
                    </div>
                  </section>
                )}
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
                    Salvando...
                  </>
                ) : (
                  <>
                    <GraduationCap className="size-4 sm:size-6" />
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
