import { SkillCategory } from "@/enums/SkillCategory";

export class Skill {
  code = "";
  skillName = "";
  percentage = 0;
  category: SkillCategory = SkillCategory.Unspecified;
}
