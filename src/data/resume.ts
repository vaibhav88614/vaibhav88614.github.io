// Centralized resume data derived from provided resume text.
export const resume = {
  lastUpdated: new Date('2025-09-28T00:00:00Z'),
  summary: `Web Developer with a strong foundation in full-stack development and API design. Proficient in JavaScript, jQuery, Git, npm, and CSS preprocessors for building responsive web applications. Experienced in creating efficient, user-friendly solutions and thriving in collaborative, cross-functional environments.`,
  skills: {
    languages: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'PHP'],
    frontend: ['Next.js', 'React.js', 'CSS', 'HTML'],
    backend: ['Node.js', 'Express'],
    frameworks: ['Django', 'Flask', 'Qt5'],
    databases: ['MySQL', 'PostgreSQL'],
    apis: ['REST', 'FastAPI'],
    tools: ['Vite', 'Git'],
    quality: ['Website Accessibility Compliance', 'User Experience Testing']
  },
  education: [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      institution: 'Basaveshwar Engineering College',
      start: 'Dec 2020',
      end: 'Jun 2024',
      gpa: '8.16'
    }
  ],
  experience: [
    {
      title: 'Python Developer',
      company: 'Tata Consultancy Services',
      location: 'Bangalore',
      start: 'Aug 2024',
      end: 'Present',
      bullets: [
        'Optimized Python-based applications, improving system efficiency by 30%.',
        'Designed standalone tools using QtDesigner, Altair, NumPy, PyVista, and VTK.',
        'Engineered a standalone 3D visualizer for battery pack analysis with VTK.',
        'Built a responsive web dashboard for manufacturing data visualization (JavaScript, CSS, HTML).',
        'Automated data processing tasks with Python scripts, reducing manual work by ~4 weeks.'
      ]
    }
  ],
  projects: [
    {
      name: 'Weather App',
      year: '2025',
      tech: ['Python', 'APIs', 'QtDesigner'],
      bullets: [
        'Developed a weather app using APIs to fetch and display real-time weather data.',
        'Designed a GUI with QtDesigner for user-friendly location-based searches.'
      ],
      links: {
        live: 'https://placeholder-live-weather.example.com',
        source: 'https://github.com/your-username/weather-app'
      }
    },
    {
      name: 'Train Management System',
      year: '2024',
      tech: ['Java', 'Servlets', 'JDBC', 'HTML', 'CSS', 'JavaScript'],
      bullets: [
        'Created a web-based train management system with Java Servlets and JDBC.',
        'Built frontend with HTML, CSS, and JavaScript for booking, scheduling, and reservations.'
      ],
      links: {
        live: 'https://placeholder-live-train.example.com',
        source: 'https://github.com/your-username/train-management-system'
      }
    }
  ],
  certifications: [
    { name: 'Introduction to Cybersecurity - Cisco (2024)', link: 'https://placeholder-cert-cisco.example.com' },
    { name: 'Crash Course on Python - Google (2024)', link: 'https://placeholder-cert-google-python.example.com' },
    { name: 'Python Data Structures - University of Michigan (2024)', link: 'https://placeholder-cert-umich-python-ds.example.com' }
  ],
  contact: {
    email: 'vaibhavrp614@gmail.com',
    portfolio: 'https://vaibhav88614.github.io/',
    location: 'India',
    phone: '+91 8861495511'
  }
} as const;

export type ResumeData = typeof resume;
