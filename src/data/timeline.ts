export type TimelineEntry = {
  title: string;
  url?: string;
  date: string;
  subtitle: string;
  tags?: string[];
  category: 'work' | 'education';
  badge?: string;
};

export const timeline: TimelineEntry[] = [
  // ── Work Experience ───────────────────────────────────────
  {
    category: 'work',
    title: 'Tuskira Inc',
    url: 'https://www.tuskira.ai/',
    date: 'Aug 2025 – Present',
    subtitle: 'Senior Software Engineer',
    tags: ['Microservices', 'AWS', 'Cybersecurity', 'GenAI'],
  },
  {
    category: 'work',
    title: 'Espressif Systems',
    url: 'https://www.espressif.com/',
    date: 'Jan 2024 – Jul 2025',
    subtitle: 'Senior Cloud Backend Engineer',
    tags: ['Product Management', 'Serverless', 'Cloud Architecture', 'Matter IoT', 'Cost Optimisation'],
  },
  {
    category: 'work',
    title: 'Connectivity Standards Alliance',
    url: 'https://csa-iot.org/',
    date: 'Oct 2023 – Jul 2025',
    subtitle: 'Vice Chair of SDTT',
    tags: ['Leadership', 'Security', 'Matter IoT'],
  },
  {
    category: 'work',
    title: 'Espressif Systems',
    url: 'https://www.espressif.com/',
    date: 'Jun 2021 – Dec 2023',
    subtitle: 'Cloud Backend Engineer',
    tags: ['Serverless', 'Mentoring', 'Cloud Architecture', 'Matter IoT'],
  },
  {
    category: 'work',
    title: 'Espressif Systems',
    url: 'https://www.espressif.com/',
    date: 'Dec 2020 – Jun 2021',
    subtitle: 'Associate Cloud Engineer',
    tags: ['Golang', 'Python', 'AWS', 'Security'],
  },
  {
    category: 'work',
    title: 'UBS',
    url: 'https://www.ubs.com/in/en.html',
    date: 'Jul 2019 – Nov 2020',
    subtitle: 'Software Developer',
    tags: ['R', 'Risk Management', 'TeamCity', 'Puppet'],
  },
  {
    category: 'work',
    title: 'Yoryo Technologies',
    date: 'Jan 2019 – Mar 2019',
    subtitle: 'Blockchain Developer',
    badge: 'Internship',
    tags: ['Hyperledger Fabric', 'Node JS', 'Docker'],
  },

  // ── Education & College ───────────────────────────────────
  {
    category: 'education',
    title: 'Pune Institute of Computer Technology',
    url: 'https://pict.edu/',
    date: 'Aug 2015 – Jun 2019',
    subtitle: 'B.E. Computer Engineering',
    tags: ['CGPA 8.88 / 10'],
  },
  {
    category: 'education',
    title: 'Smart India Hackathon 2019',
    url: 'https://sih.gov.in/',
    date: '2019',
    subtitle: 'Runner Up — Ministry of Textiles',
    badge: 'Competition',
    tags: ['Node JS', 'React JS', 'MongoDB'],
  },
  {
    category: 'education',
    title: 'PICT Robocon',
    url: 'https://pict.edu/robocon/index.php',
    date: 'Aug 2017 – Mar 2018',
    subtitle: 'AIR 14 / 106 teams — National Level',
    badge: 'Club',
    tags: ['Embedded C++', 'Robotic Design'],
  },
];

export const work      = timeline.filter((e) => e.category === 'work');
export const education = timeline.filter((e) => e.category === 'education');
