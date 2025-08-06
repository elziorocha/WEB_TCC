import {
  BookUserIcon,
  BusFrontIcon,
  ClockIcon,
  HistoryIcon,
  Home,
  MessageCircleMoreIcon,
} from "lucide-react";

export const navHome = [
  { key: "/", icon: Home, label: "Home" },
  { key: "nossa-historia", icon: HistoryIcon, label: "Nossa História" },
  { key: "fale-conosco", icon: MessageCircleMoreIcon, label: "Fale Conosco" },
  {
    key: "horarios-itinerarios",
    icon: ClockIcon,
    label: "Horários e Itinerários",
  },
];

export const navUsuarios = [
  { key: "portal-do-aluno", icon: BookUserIcon, label: "Portal do Aluno" },
  {
    key: "area-do-colaborador",
    icon: BusFrontIcon,
    label: "Área do Colaborador",
  },
];
