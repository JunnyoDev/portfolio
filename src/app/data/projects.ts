export interface Project {
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    title: 'CRM em C# / .NET',
    eyebrow: 'Backend · Em evolução',
    description: 'Sistema de gerenciamento de clientes desenvolvido com C#, com foco em orientação a objetos, organização de código, operações CRUD e integração com banco de dados.',
    technologies: ['C#', '.NET', 'SQL', 'Entity Framework Core'],
    featured: true,
    links: [{ label: 'GitHub', href: 'https://github.com/JunnyoDev' }, { label: 'Detalhes', href: '#contato' }],
  },
];