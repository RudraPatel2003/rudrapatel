export const contactInformation = {
  email: "patelrudra2003@gmail.com",
  github: "https://github.com/RudraPatel2003",
  instagram: "https://www.instagram.com/pateltherudra/",
  linkedIn: "https://www.linkedin.com/in/rudra-j-patel/",
};

export const projects = [
  {
    name: "ParkUTK",
    description:
      "A cross-platform app that helps you find parking. Built using React Native with a Docker-containerized backend hosted on Google Cloud.",
    tags: ["React Native", "Docker", "Google Cloud", "CI/CD"],
    gitHubLink: "https://github.com/RudraPatel2003/park-utk-native",
  },
  {
    name: "productivist",
    description:
      "A responsive to-do list website built with Next.js and Tailwind CSS that incorporates user authentication through next-auth and MongoDB.",
    tags: ["React", "Next.js", "Tailwind CSS", "next-auth", "MongoDB"],
    githubLink: "https://github.com/RudraPatel2003/productivist",
    externalLink: "https://productivist.vercel.app/",
  },
  {
    name: "Community Coalition Against Human Trafficking",
    description:
      "With Hack4Impact UTK, I helped build an inventory management / warehousing system for a local non-profit.",
    tags: ["TypeScript", "React", "Dev Team"],
    githubLink:
      "https://github.com/hack4impact-utk/community-coalition-against-human-trafficking",
  },
  {
    name: "Portfolio Website",
    description:
      "The website you are currently on right now. Built to showcase my personal projects and introduce myself!",
    tags: ["JavaScript", "React", "Next.js", "Styled Components"],
    githubLink: "https://github.com/RudraPatel2003/rudrapatel",
  },
  {
    name: "Sudoku Solver GUI",
    description:
      "Play Sudoku on a pygame window and watch the Sudoku backtracking algorithm in action.",
    tags: ["Python", "pygame", "GUI", "Algorithms"],
    githubLink: "https://github.com/RudraPatel2003/Sudoku_Solver_GUI",
  },
  {
    name: "NYT Spelling Bee Solver",
    description:
      "Launch a Python Selenium bot that plays the New York Times' Spelling Bee game.",
    tags: ["Python", "Selenium", "Web Scraping"],
    githubLink: "https://github.com/RudraPatel2003/NYT_Spelling_Bee_Solver",
  },
  {
    name: "U.S. State Capitals Quiz GUI",
    description:
      "Launch a quiz on a Python tkinter window that tests you on the capitals of the 50 states.",
    tags: ["Python", "tkinter", "Selenium"],
    githubLink: "https://github.com/RudraPatel2003/US_State_Capitals_Quiz_GUI",
  },
];

export const INITIAL_JOB_INDEX = 0;

export const jobs = [
  {
    jobIndex: 0,
    companyName: "GE Vernova",
    longCompanyName: "General Electric Vernova",
    jobTitle: "Cloud Engineering Intern",
    dateOfEmployment: "May 2024 - August 2024",
    bulletPoints: [
      "Streamlined AWS account creation process, decreasing account delivery time to stakeholders by 70%.",
      "Implemented an Ansible playbook to facilitate Infrastructure as Code (IaC) for securely creating and managing AWS resources, reducing accidental spending by 40%",
      "Built a GitHub Actions workflow to verify that all IaC is valid and free of security vulnerabilities, maintaining codebase integrity and preventing data leaks",
    ],
  },
  {
    jobIndex: 1,
    companyName: "KUB",
    longCompanyName: "Knoxville Utilities Board",
    jobTitle: "Software Developer Intern",
    dateOfEmployment: "May 2023 - May 2024, August 2024 - Present",
    bulletPoints: [
      "Refactored power outage notification system that sends up to 1 million notifications per week to provide over 400,000 customers with more accurate estimated restoration times",
      "Enhanced cybersecurity and data integrity by implementing stricter authorization requirements for public API endpoints",
      "Updated Java Enterprise Edition APIs to ensure long-term stability and to meet financial constraints",
      "Strengthened database security by migrating SQL database information to Microsoft’s .NET Entity Framework Core",
      "Increased customer acquisition by improving the UI/UX on the fiber internet shopping page",
    ],
  },
  {
    jobIndex: 2,
    companyName: "Hack4Impact UTK",
    jobTitle: "Developer",
    dateOfEmployment: "October 2022 - Present",
    bulletPoints: [
      "Volunteered to create an internal warehouse and inventory management system for a local nonprofit organization that handles over 5000 items concurrently for over 35 staff members",
      "Collaborated with 6 other Hack4Impact developers to gather and implement product requirements using the Scrum framework for agile product development",
      "Spearheaded the implementation of user authentication to ensure data privacy and security",
      "Released the final product, immediately increasing warehouse efficiency and improving productivity",
    ],
  },
];
