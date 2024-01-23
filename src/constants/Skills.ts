import { SkillCategory } from "@/enums/SkillCategory";

export const Skills: Skill[] = [
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
    code: "mssql",
    skillName: "MS SQL",
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
];

class Skill {
  code = "";
  skillName = "";
  percentage = 0;
  category: SkillCategory = SkillCategory.Unspecified;
}
