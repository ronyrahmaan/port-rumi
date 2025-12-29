export interface ResearchProject {
  id: number;
  title: string;
  role: string;
  fundingOrganization: string;
  fundingAmount: number;
  dateRange: string;
  year: string;
  description?: string;
  status: 'completed' | 'ongoing';
}

export const researchProjects: ResearchProject[] = [
  // 2026
  {
    id: 1,
    title: 'Inter-religious dialogue, resilience building and countering violent extremism in Bangladesh',
    role: 'Junior Consultant',
    fundingOrganization: 'World Bank',
    fundingAmount: 82000,
    dateRange: '2026',
    year: '2026',
    description: 'Research on inter-religious dialogue initiatives and strategies for countering violent extremism in Bangladesh.',
    status: 'ongoing'
  },
  // 2024-2025
  {
    id: 2,
    title: 'Career Planning and Development of Department of Social Service Officers in Bangladesh',
    role: 'Principal Investigator',
    fundingOrganization: 'Ministry of Social Welfare',
    fundingAmount: 2790,
    dateRange: '2024-2025',
    year: '2024-2025',
    description: 'Investigating career development pathways and planning mechanisms for social service officers.',
    status: 'ongoing'
  },
  {
    id: 3,
    title: 'Application of AI Chatbots in Banking Service Management in Bangladesh',
    role: 'Co-Investigator',
    fundingOrganization: 'UGC-Dhaka University Research Fund',
    fundingAmount: 11800,
    dateRange: '2024-2025',
    year: '2024-2025',
    description: 'Examining the implementation and effectiveness of AI chatbots in Bangladesh\'s banking sector.',
    status: 'ongoing'
  },
  {
    id: 4,
    title: 'Safe And Green Transportation: Assessing Gender-based Victimization in Public Transport in Dhaka City',
    role: 'Co-Investigator',
    fundingOrganization: 'UGC-Dhaka University Research Fund',
    fundingAmount: 6060,
    dateRange: '2024-2025',
    year: '2024-2025',
    description: 'Assessing gender-based victimization and safety concerns in Dhaka\'s public transportation system.',
    status: 'ongoing'
  },
  {
    id: 5,
    title: 'Future of Ethnic Products Development and Marketing Start-ups in Bangladesh',
    role: 'Principal Investigator',
    fundingOrganization: 'Social Science Research Council',
    fundingAmount: 2500,
    dateRange: '2024-2025',
    year: '2024-2025',
    description: 'Exploring opportunities and challenges for ethnic product startups in Bangladesh.',
    status: 'ongoing'
  },
  {
    id: 6,
    title: 'Ensuring Road Safety in Bangladesh: Defies and Directions',
    role: 'Co-Investigator',
    fundingOrganization: 'BANBEIS',
    fundingAmount: 12000,
    dateRange: '2024-2025',
    year: '2024-2025',
    description: 'Comprehensive study on road safety challenges and policy recommendations for Bangladesh.',
    status: 'ongoing'
  },
  // 2023
  {
    id: 7,
    title: 'Just Transition: A Desk Review of Existing Policy Instruments on Just Transition in Bangladesh',
    role: 'Co-Investigator',
    fundingOrganization: 'World Bank',
    fundingAmount: 1000,
    dateRange: '2023',
    year: '2023',
    description: 'Policy analysis of just transition frameworks and their implementation in Bangladesh.',
    status: 'completed'
  },
  // 2023-2024
  {
    id: 8,
    title: 'Knowledge, Attitude and Practice of Students Regarding Fire Safety in Educational Institutions',
    role: 'Data Analyst',
    fundingOrganization: 'UGC-Dhaka University Research Fund',
    fundingAmount: 2790,
    dateRange: '2023-2024',
    year: '2023-2024',
    description: 'Analyzing students\' awareness and practices regarding fire safety measures.',
    status: 'completed'
  },
  {
    id: 9,
    title: 'Safe And Green Transportation in Dhaka City',
    role: 'Data Analyst',
    fundingOrganization: 'UGC-Dhaka University Research Fund',
    fundingAmount: 6500,
    dateRange: '2023-2024',
    year: '2023-2024',
    description: 'Research on sustainable and safe transportation solutions for Dhaka city.',
    status: 'completed'
  },
  {
    id: 10,
    title: 'Youth Perception on Introducing Quit-line Service in Bangladesh',
    role: 'Supervisor',
    fundingOrganization: 'Bangladesh Medical Research Council',
    fundingAmount: 2500,
    dateRange: '2023-2024',
    year: '2023-2024',
    description: 'Investigating youth perspectives on tobacco cessation quit-line services.',
    status: 'completed'
  },
  {
    id: 11,
    title: 'Inclusive Startup Ecosystem for the Marginalized People in Bangladesh',
    role: 'Principal Investigator',
    fundingOrganization: 'Ministry of ICT',
    fundingAmount: 2500,
    dateRange: '2023-2024',
    year: '2023-2024',
    description: 'Examining barriers and opportunities for marginalized communities in the startup ecosystem.',
    status: 'completed'
  },
  {
    id: 12,
    title: 'Work-Life Balance of University Teachers in Bangladesh',
    role: 'Co-Investigator',
    fundingOrganization: 'Social Science Research Council',
    fundingAmount: 2500,
    dateRange: '2023-2024',
    year: '2023-2024',
    description: 'Studying work-life balance challenges faced by university faculty members.',
    status: 'completed'
  },
  {
    id: 13,
    title: 'Safety Culture at Higher Level Academic Institutions in Bangladesh',
    role: 'Co-Investigator & Team Leader',
    fundingOrganization: 'University of Dhaka',
    fundingAmount: 8000,
    dateRange: '2023-2024',
    year: '2023-2024',
    description: 'Comprehensive assessment of safety culture and practices in higher education institutions.',
    status: 'completed'
  },
  {
    id: 14,
    title: 'Role of Religious Sermon on Preventing Tobacco Usage in Bangladesh',
    role: 'Co-Investigator, Data Analyst & Team Leader',
    fundingOrganization: 'UGC Grant',
    fundingAmount: 2500,
    dateRange: '2023-2024',
    year: '2023-2024',
    description: 'Examining the influence of religious leaders and sermons on tobacco prevention.',
    status: 'completed'
  },
  {
    id: 15,
    title: 'Assessing multi-hazards risk governance mechanism for urban resilience in Dhaka',
    role: 'Team Leader & Data Analyst',
    fundingOrganization: 'American Red Cross',
    fundingAmount: 7000,
    dateRange: '2023-2024',
    year: '2023-2024',
    description: 'Evaluating risk governance mechanisms for multi-hazard urban resilience.',
    status: 'completed'
  },
  // 2022-2023
  {
    id: 16,
    title: 'Citizens\' Trust in Bangladesh Police: An Empirical Study',
    role: 'Co-Investigator & Team Leader',
    fundingOrganization: 'CRG Grant, University of Dhaka',
    fundingAmount: 6500,
    dateRange: '2022-2023',
    year: '2022-2023',
    description: 'Empirical research on public trust and confidence in Bangladesh Police.',
    status: 'completed'
  },
  // 2020-2021
  {
    id: 17,
    title: 'Effect of Advertisement on E-cigarette Consumption among Young People in Bangladesh',
    role: 'Principal Investigator',
    fundingOrganization: 'Johns Hopkins University / Bloomberg Philanthropies',
    fundingAmount: 5000,
    dateRange: '2020-2021',
    year: '2020-2021',
    description: 'Investigating the impact of advertising on e-cigarette usage among youth.',
    status: 'completed'
  },
  {
    id: 18,
    title: 'Knowledge, Attitude and Practice on Antibiotic Usage in Dhaka, Bangladesh',
    role: 'Data Analyst & Co-Team Leader',
    fundingOrganization: 'WaterAid Bangladesh',
    fundingAmount: 1000,
    dateRange: '2020-2021',
    year: '2020-2021',
    description: 'Research on antibiotic usage patterns and awareness in Dhaka.',
    status: 'completed'
  },
  {
    id: 19,
    title: 'A Study on Livelihood Pattern of Barber Community in Bangladesh',
    role: 'Data Analyst',
    fundingOrganization: 'Ministry of Social Welfare',
    fundingAmount: 2500,
    dateRange: '2020-2021',
    year: '2020-2021',
    description: 'Socioeconomic study of the barber community\'s livelihood patterns.',
    status: 'completed'
  }
];

// Helper functions
export const getTotalFunding = (): number => {
  return researchProjects.reduce((sum, project) => sum + project.fundingAmount, 0);
};

export const getUniqueRoles = (): string[] => {
  const roles = new Set<string>();
  researchProjects.forEach(project => {
    // Split combined roles
    project.role.split(/[,&]/).forEach(r => {
      roles.add(r.trim());
    });
  });
  return Array.from(roles).sort();
};

export const getUniqueYears = (): string[] => {
  const years = new Set(researchProjects.map(p => p.year));
  return Array.from(years).sort((a, b) => b.localeCompare(a));
};

export const getUniqueFundingOrgs = (): string[] => {
  const orgs = new Set(researchProjects.map(p => p.fundingOrganization));
  return Array.from(orgs).sort();
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};
