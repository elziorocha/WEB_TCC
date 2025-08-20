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
} from "lucide-react";

export const cardsInicio = [
  { key: "1", icon: BusIcon, label: "Transporte Coletivo Urbano" },
  {
    key: "2",
    icon: SquareUserRoundIcon,
    label: "Concessão Pública e Atendimento Diário",
  },
  { key: "3", icon: MapPinIcon, label: "Ponto de Atendimento" },
  {
    key: "4",
    icon: BadgeCheckIcon,
    label: "Qualidade e Certificação",
  },
];

export const navHome = [
  { key: "/", icon: Home, label: "Home" },
  { key: "nossa-historia", icon: HistoryIcon, label: "Nossa História" },
  { key: "fale-conosco", icon: MessageCircleMoreIcon, label: "Fale Conosco" },
  {
    key: "horarios-itinerarios",
    icon: ClockIcon,
    label: "Horários e Itinerários",
  },
  {
    key: "tarifas",
    icon: TicketIcon,
    label: "Tarifas",
  },
];

export const navUsuarios = [
  {
    key: "portal-do-aluno/login",
    icon: BookUserIcon,
    label: "Portal do Aluno",
  },
  {
    key: "area-do-colaborador",
    icon: BusFrontIcon,
    label: "Área do Colaborador",
  },
];
