import { interbairros1Data } from './objetoInterbairros1';
import { mattosLeaoData } from './objetoMattosLeao';

export const linhasOnibusData: Record<string, any[]> = {
  'mattos-leao': mattosLeaoData,
  'interbairros-1': interbairros1Data,
};

export const linhasOnibusPDF: Record<string, string> = {
  'mattos-leao':
    'https://www.peroladooeste.com.br/wp-content/uploads/2025/07/23-Julho-2025.pdf',
  'interbairros-1':
    'https://www.peroladooeste.com.br/wp-content/uploads/2025/07/Inter-01-Julho-2025.pdf',
};
