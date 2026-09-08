export interface Skill {
  name: string;
  level: number;
  label: string;
  accent?: boolean;
}

export const skills: Skill[] = [
  { name: 'C#', level: 100, label: 'Stack principal', accent: true },
  { name: '.NET', level: 96, label: 'Stack principal', accent: true },
  { name: 'Java', level: 68, label: 'Prática em projetos' },
  { name: 'SQL', level: 72, label: 'Prática em projetos' },
  { name: 'MySQL', level: 66, label: 'Prática em projetos' },
  { name: 'Azure', level: 45, label: 'Em aprendizado' },
];

export const otherTechnologies = ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Git', 'GitHub', 'Docker', 'Linux', 'MySQL', 'MariaDB', 'Postman'];
export const cloudTools = ['Azure', 'AWS', 'Docker', 'Git', 'GitHub', 'Linux'];