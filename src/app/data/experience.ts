export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  activities: string[];
}

export const experience: Experience[] = [{
  company: 'Telefônica',
  role: 'Atendente de Controle Técnico',
  period: '02/2025 — 03/2026',
  location: 'Belo Horizonte, MG',
  activities: [
    'Acompanhamento e validação de ordens técnicas e informações em sistemas internos.',
    'Identificação de inconsistências e acompanhamento do cumprimento de processos.',
    'Suporte às equipes operacionais e controle de atividades técnicas.',
  ],
}];