// data.js (CommonJS export)

const organisations = [
  { id: 1, name: "TechCorp", industry: "Technology", created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 2, name: "HealthInc", industry: "Healthcare", created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
];

const users = [
  { id: 1, first_name: "Amara", last_name: "Osei", personal_email: "amara@example.com", company_email: "amara@techcorp.com", role: "EMPLOYEE", job_title: "Senior Software Engineer", department: "Engineering", password: "hash", organisation_id: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 2, first_name: "Kofi", last_name: "Mensah", personal_email: "kofi@example.com", company_email: "kofi@techcorp.com", role: "MANAGER", job_title: "Product Manager", department: "Product", password: "hash", organisation_id: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 3, first_name: "Nadia", last_name: "Boateng", personal_email: "nadia@example.com", company_email: "nadia@techcorp.com", role: "EMPLOYEE", job_title: "UX Designer", department: "Design", password: "hash", organisation_id: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 4, first_name: "Kwame", last_name: "Asante", personal_email: "kwame@example.com", company_email: "kwame@healthinc.com", role: "EMPLOYEE", job_title: "DevOps Engineer", department: "Engineering", password: "hash", organisation_id: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 5, first_name: "Esi", last_name: "Darko", personal_email: "esi@example.com", company_email: "esi@healthinc.com", role: "ADMIN", job_title: "HR Business Partner", department: "HR", password: "hash", organisation_id: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
];

const skills = [
  // Amara
  { id: 1, user_id: 1, skill: "TypeScript", category: "TECHNICAL", proficiency: 5, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 2, user_id: 1, skill: "React", category: "TECHNICAL", proficiency: 5, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 3, user_id: 1, skill: "Node.js", category: "TECHNICAL", proficiency: 4, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 4, user_id: 1, skill: "PostgreSQL", category: "TECHNICAL", proficiency: 4, verified: false, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 5, user_id: 1, skill: "System Design", category: "DOMAIN", proficiency: 4, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 6, user_id: 1, skill: "Mentoring", category: "LEADERSHIP", proficiency: 3, verified: false, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  // Kofi
  { id: 7, user_id: 2, skill: "Roadmapping", category: "DOMAIN", proficiency: 5, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 8, user_id: 2, skill: "Stakeholder Mgmt", category: "SOFT", proficiency: 5, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 9, user_id: 2, skill: "Jira", category: "TOOL", proficiency: 4, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 10, user_id: 2, skill: "Data Analysis", category: "TECHNICAL", proficiency: 3, verified: false, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 11, user_id: 2, skill: "Strategic Thinking", category: "LEADERSHIP", proficiency: 4, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  // Nadia
  { id: 12, user_id: 3, skill: "Figma", category: "TOOL", proficiency: 5, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 13, user_id: 3, skill: "User Research", category: "DOMAIN", proficiency: 5, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 14, user_id: 3, skill: "Prototyping", category: "DOMAIN", proficiency: 4, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 15, user_id: 3, skill: "Communication", category: "SOFT", proficiency: 4, verified: false, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 16, user_id: 3, skill: "HTML/CSS", category: "TECHNICAL", proficiency: 3, verified: false, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  // Kwame
  { id: 17, user_id: 4, skill: "Docker", category: "TOOL", proficiency: 5, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 18, user_id: 4, skill: "Kubernetes", category: "TOOL", proficiency: 4, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 19, user_id: 4, skill: "CI/CD Pipelines", category: "TECHNICAL", proficiency: 5, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 20, user_id: 4, skill: "AWS", category: "TOOL", proficiency: 4, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 21, user_id: 4, skill: "Linux", category: "TECHNICAL", proficiency: 5, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 22, user_id: 4, skill: "Python", category: "TECHNICAL", proficiency: 3, verified: false, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  // Esi
  { id: 23, user_id: 5, skill: "Talent Acquisition", category: "DOMAIN", proficiency: 5, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 24, user_id: 5, skill: "Conflict Resolution", category: "SOFT", proficiency: 5, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 25, user_id: 5, skill: "Performance Mgmt", category: "DOMAIN", proficiency: 4, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 26, user_id: 5, skill: "Employment Law", category: "DOMAIN", proficiency: 4, verified: true, created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
  { id: 27, user_id: 5, skill: "Leadership", category: "LEADERSHIP", proficiency: 4, verified: false, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
];

const stripPassword = (user) => {
  if (!user) return user;
  const { password, ...rest } = user;
  return rest;
};

module.exports = {
  getOrganisations: () => organisations,
  
  getOrganisationById: (id) => {
    const org = organisations.find(o => o.id === id);
    if (!org) return null;
    return {
      ...org,
      users: users.filter(u => u.organisation_id === id).map(stripPassword)
    };
  },
  
  getUsers: () => users.map(stripPassword),
  
  getUserById: (id) => {
    const user = users.find(u => u.id === id);
    if (!user) return null;
    return {
      ...stripPassword(user),
      skills: skills.filter(s => s.user_id === id)
    };
  },
  
  getAllSkills: () => skills.map(skill => {
    const user = users.find(u => u.id === skill.user_id);
    return {
      ...skill,
      user: user ? {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        job_title: user.job_title,
        department: user.department
      } : null
    };
  }),
  
  getSkillsByUserId: (userId) => skills.filter(s => s.user_id === userId),
  
  getSkillById: (id) => {
    const skill = skills.find(s => s.id === id);
    if (!skill) return null;
    const user = users.find(u => u.id === skill.user_id);
    return {
      ...skill,
      user: user ? {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        job_title: user.job_title,
        department: user.department
      } : null
    };
  }
};
