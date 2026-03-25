export interface Organisation {
  id: number;
  name: string;
  industry: string;
  created_at: string;
  updated_at: string;
  users?: User[];
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  personal_email: string;
  company_email: string;
  role: "EMPLOYEE" | "MANAGER" | "ADMIN";
  job_title: string;
  department: string;
  organisation_id: number;
  created_at: string;
  updated_at: string;
  skills?: Skill[];
}

export interface Skill {
  id: number;
  user_id: number;
  skill: string;
  category: "TECHNICAL" | "DOMAIN" | "LEADERSHIP" | "SOFT" | "TOOL";
  proficiency: number;
  verified: boolean;
  created_at: string;
  updated_at: string;
  user?: Partial<User>;
}

declare const data: {
  getOrganisations: () => Organisation[];
  getOrganisationById: (id: number) => Organisation | null;
  getUsers: () => User[];
  getUserById: (id: number) => User | null;
  getAllSkills: () => Skill[];
  getSkillsByUserId: (userId: number) => Skill[];
  getSkillById: (id: number) => Skill | null;
};

export default data;
