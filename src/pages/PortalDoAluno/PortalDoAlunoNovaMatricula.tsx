import { postAlunoMatriculas } from '@/services/api';
import type { AlunoMatriculaInterface } from '@/utils/interfaces.interface';
import { useState } from 'react';

export function PortalDoAlunoNovaMatricula() {
  const [formData, setFormData] = useState<Partial<AlunoMatriculaInterface>>({
    ano_letivo: new Date().getFullYear(),
    turno: undefined,
    status_matricula: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const dataToSend: AlunoMatriculaInterface = {
        ...formData,
        ano_letivo: Number(formData.ano_letivo),
        serie_ou_periodo: Number(formData.serie_ou_periodo),
        distancia_instituicao: Number(formData.distancia_instituicao),
        data_inicio: new Date(formData.data_inicio!)
          .toISOString()
          .split('T')[0],
        data_fim: new Date(formData.data_fim!).toISOString().split('T')[0],
        turno: formData.turno!,
        grau_scolaridade: formData.grau_scolaridade!,
        convenio: formData.convenio!,
        cgm: formData.cgm!,
        curso: formData.curso!,
        instituicao: formData.instituicao!,
        status_matricula: formData.status_matricula ?? true,
        id: formData.id ?? 0,
      };

      console.log('JSON que será enviado:', dataToSend);

      await postAlunoMatriculas(dataToSend);
      setSuccess(true);

      setFormData({
        ano_letivo: new Date().getFullYear(),
        turno: undefined,
        status_matricula: true,
      });
    } catch (err: any) {
      console.error(err.response?.data || err);
      setError(err.response?.data?.message || 'Erro ao criar matrícula.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-md p-4">
      <h1>Nova Matrícula do Aluno</h1>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
        <input
          type="number"
          name="ano_letivo"
          value={formData.ano_letivo || ''}
          onChange={handleChange}
          placeholder="Ano Letivo"
          required
        />

        <input
          type="text"
          name="instituicao"
          value={formData.instituicao || ''}
          onChange={handleChange}
          placeholder="Instituição"
          required
        />

        <input
          type="date"
          name="data_inicio"
          value={
            formData.data_inicio
              ? new Date(formData.data_inicio).toISOString().split('T')[0]
              : ''
          }
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="data_fim"
          value={
            formData.data_fim
              ? new Date(formData.data_fim).toISOString().split('T')[0]
              : ''
          }
          onChange={handleChange}
          required
        />

        <select
          name="grau_scolaridade"
          value={formData.grau_scolaridade || ''}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o grau</option>
          <option value="Ensino Fundamental">Ensino Fundamental</option>
          <option value="Ensino Médio">Ensino Médio</option>
          <option value="Ensino Superior">Ensino Superior</option>
          <option value="Curso Técnico Semestral">
            Curso Técnico Semestral
          </option>
          <option value="Curso Técnico Anual">Curso Técnico Anual</option>
          <option value="CEEBJA e EJAs Fundamental">
            CEEBJA e EJAs Fundamental
          </option>
          <option value="CEEBJA e EJAs Médio">CEEBJA e EJAs Médio</option>
        </select>

        <input
          type="number"
          name="serie_ou_periodo"
          value={formData.serie_ou_periodo || ''}
          onChange={handleChange}
          placeholder="Série ou Período"
          required
        />

        <input
          type="text"
          name="curso"
          value={formData.curso || ''}
          onChange={handleChange}
          placeholder="Curso"
          required
        />

        <select
          name="turno"
          value={formData.turno || ''}
          onChange={handleChange}
          required
        >
          <option value="Matutino">Matutino</option>
          <option value="Vespertino">Vespertino</option>
          <option value="Noturno">Noturno</option>
        </select>

        <select
          name="convenio"
          value={formData.convenio || ''}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o convênio</option>
          <option value="ProUni">ProUni</option>
          <option value="FIES">FIES</option>
          <option value="EducaMais">EducaMais</option>
          <option value="Bolsa">Bolsa</option>
        </select>

        <input
          type="text"
          name="cgm"
          value={formData.cgm || ''}
          onChange={handleChange}
          placeholder="CGM"
          required
        />

        <input
          type="number"
          name="distancia_instituicao"
          value={formData.distancia_instituicao || ''}
          onChange={handleChange}
          placeholder="Distância da Instituição (km)"
          required
        />

        <label className="flex items-center gap-2">
          Status Matrícula:
          <input
            type="checkbox"
            name="status_matricula"
            checked={formData.status_matricula || false}
            onChange={handleChange}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-blue-500 p-2 text-white"
        >
          {loading ? 'Salvando...' : 'Criar Matrícula'}
        </button>

        {error && <p className="mt-2 text-red-500">{error}</p>}
        {success && (
          <p className="mt-2 text-green-500">Matrícula criada com sucesso!</p>
        )}
      </form>
    </main>
  );
}
