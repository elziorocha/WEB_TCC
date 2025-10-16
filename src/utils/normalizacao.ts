export const slugify = (nome: string) =>
  nome
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-');

export const formatRg = (value: string) => {
  if (!value) return '';
  const digits = value.replace(/\D/g, '');
  return digits
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2}\.\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{2}\.\d{3}\.\d{3})(\d)/, '$1-$2')
    .slice(0, 12);
};

export const formatCpf = (value: string) => {
  if (!value) return '';
  const digits = value.replace(/\D/g, '');
  return digits
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3}\.\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3}\.\d{3}\.\d{3})(\d{1,2})/, '$1-$2')
    .slice(0, 14);
};

export const formatCep = (value: string) => {
  if (!value) return '';
  const digits = value.replace(/\D/g, '');
  return digits.replace(/^(\d{5})(\d)/, '$1-$2').slice(0, 9);
};
