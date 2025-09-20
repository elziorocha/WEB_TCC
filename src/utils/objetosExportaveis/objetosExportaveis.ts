import {
  BadgeCheckIcon,
  BusIcon,
  MapPinIcon,
  SquareUserRoundIcon,
  BookUserIcon,
  BusFrontIcon,
  ClockIcon,
  HistoryIcon,
  Home,
  MessageCircleMoreIcon,
  TicketIcon,
  FileInputIcon,
  UniversityIcon,
  BookAlertIcon,
} from 'lucide-react';

export const cardsInicio = [
  { key: '1', icon: BusIcon, label: 'Transporte Coletivo Urbano' },
  {
    key: '2',
    icon: SquareUserRoundIcon,
    label: 'Concessão Pública e Atendimento Diário',
  },
  { key: '3', icon: MapPinIcon, label: 'Ponto de Atendimento' },
  {
    key: '4',
    icon: BadgeCheckIcon,
    label: 'Qualidade e Certificação',
  },
];

export const navHome = [
  { key: '/', icon: Home, label: 'Página Inicial' },
  { key: 'nossa-historia', icon: HistoryIcon, label: 'Nossa História' },
  { key: 'fale-conosco', icon: MessageCircleMoreIcon, label: 'Fale Conosco' },
  {
    key: 'horarios-itinerarios',
    icon: ClockIcon,
    label: 'Horários e Itinerários',
  },
  {
    key: 'tarifas',
    icon: TicketIcon,
    label: 'Tarifas',
  },
];

export const navUsuarios = [
  {
    key: 'portal-do-aluno/login',
    icon: BookUserIcon,
    label: 'Portal do Aluno',
  },
  {
    key: 'area-do-colaborador',
    icon: BusFrontIcon,
    label: 'Área do Colaborador',
  },
];

export const cardsDashboardPortalAluno = [
  { key: '1', icon: SquareUserRoundIcon, label: 'Perfil de usuário' },
  {
    key: '2',
    icon: FileInputIcon,
    label: 'Processos Digitais',
  },
  {
    key: '3',
    icon: UniversityIcon,
    label: 'Matrículas',
  },
  {
    key: '4',
    icon: BookAlertIcon,
    label: 'Formulários',
  },
];

import banner1 from '/assets/CarouselImages/banner_1.jpg';
import banner2 from '/assets/CarouselImages/banner_2.jpg';
import banner3 from '/assets/CarouselImages/banner_3.jpg';
import banner4 from '/assets/CarouselImages/banner_4.jpg';
import banner5 from '/assets/CarouselImages/banner_5.png';
import banner6 from '/assets/CarouselImages/banner_6.jpg';

export const inicioBanners = [
  {
    src: banner1,
    alt: 'Imagem sobre cuidado nas faixas amarelas',
  },
  {
    src: banner2,
    alt: 'Imagem sobre preservar o patrimônio coletivo',
  },
  {
    src: banner3,
    alt: 'Imagem sobre incentivo ao transporte público',
  },
  {
    src: banner4,
    alt: 'Imagem sobre o portal do aluno',
  },
  {
    src: banner5,
    alt: 'Imagem sobre bons modos com o público',
  },
  {
    src: banner6,
    alt: 'Imagem sobre o cartão VEM',
  },
];
