import { SkillCategory } from "@/enums/SkillCategory";

const backendSkills: Skill[] = [
  {
    code: "csharp",
    skillName: "C#",
    percentage: 90,
    category: SkillCategory.Backend,
  },
  {
    code: "aspnetcore",
    skillName: "ASP.NET Core",
    percentage: 80,
    category: SkillCategory.Backend,
  },
  {
    code: "efcore",
    skillName: "Entity Framework Core",
    percentage: 75,
    category: SkillCategory.Backend,
  },
  {
    code: "xunit",
    skillName: "XUnit",
    percentage: 80,
    category: SkillCategory.Backend,
  },
];

const frontendSkills: Skill[] = [
  {
    code: "typescript",
    skillName: "TypeScript",
    percentage: 85,
    category: SkillCategory.Frontend,
  },
  {
    code: "vue3",
    skillName: "Vue 3",
    percentage: 60,
    category: SkillCategory.Frontend,
  },
  {
    code: "angular",
    skillName: "Angular",
    percentage: 80,
    category: SkillCategory.Frontend,
  },
  {
    code: "cypress",
    skillName: "Cypress",
    percentage: 30,
    category: SkillCategory.Frontend,
  },
];

const infraSkills: Skill[] = [
  {
    code: "mssql",
    skillName: "MS SQL Server",
    percentage: 75,
    category: SkillCategory.Infrastructure,
  },
  {
    code: "yaml",
    skillName: "YAML",
    percentage: 50,
    category: SkillCategory.Infrastructure,
  },
  {
    code: "docker",
    skillName: "Docker",
    percentage: 20,
    category: SkillCategory.Infrastructure,
  },
  {
    code: "linux",
    skillName: "Linux",
    percentage: 60,
    category: SkillCategory.Infrastructure,
  },
];

const languageSkills: Skill[] = [
  {
    code: "dutch",
    skillName: "Dutch",
    percentage: 100,
    category: SkillCategory.Language,
  },
  {
    code: "english",
    skillName: "English",
    percentage: 95,
    category: SkillCategory.Language,
  },
  {
    code: "german",
    skillName: "German",
    percentage: 50,
    category: SkillCategory.Language,
  },
  {
    code: "chinese",
    skillName: "Chinese",
    percentage: 5,
    category: SkillCategory.Language,
  },
];

export const Skills: Skill[] = [
  ...backendSkills,
  ...frontendSkills,
  ...infraSkills,
  ...languageSkills,
];

class Skill {
  code = "";
  skillName = "";
  percentage = 0;
  category: SkillCategory = SkillCategory.Unspecified;
}
