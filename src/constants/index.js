import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fso,
  lacite,
  atc,
  cisco,
  rdvapp,
  mw,
  fc,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Programming            Proficiency",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Problem Solving",
    icon: backend,
  },
  {
    title: "Data Analysis",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack developer",
    company_name: "La Cite College - Ottawa - Canada",
    icon: lacite,
    iconBg: "#383E56",
    date: "Septembre 2021 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Android Application Development",
    company_name: "TATC (Advanced Training Consultants)",
    icon: atc,
    iconBg: "#E6DEDD",
    date: "May.30. 2022 ",
    points: [
      
    ],
  },
  {
    title: "CCNA (Cisco Certified Network Associate)",
    company_name: "Cisco Systems, Inc",
    icon: cisco,
    iconBg: "#383E56",
    date: "January.09. 2022",
    points: [
      
    ],
  },
  {
    title: "Physics/Maths",
    company_name: "Mohammed First - Oujda - Morocco",
    icon: fso,
    iconBg: "#E6DEDD",
    date: "Juin 2014 - Septembre 2019",
    points: [
      "Quantitative Reasoning: Proficient in applying mathematical principles to model complex physical phenomena and perform critical data analysis.",
      "Problem-Solving Skills: Skilled in decomposing complicated problems, leveraging analytical thinking for innovative solutions, and constructing predictive models.",
      "Laboratory Skills: Capable in designing, conducting, and interpreting experiments, with keen attention to detail and proficiency in equipment handling.",
      "Computational Skills: Proficient in using simulation and data analysis software, alongside strong proficiency in programming languages.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Marouane proved me wrong.",
    name: "Carrie Boutili",
    designation: " ",
    company: " ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mar does.",
    name: "Davi Dumais ",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Marouane optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Mac",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Appointement Desk Manager",
    description:
      "An appointment scheduling desktop application designed to streamline the booking and management process for various businesses and professionals. This application enables users to easily create, update, and cancel appointments while providing a clear overview of their schedules. Using C# and SQL Server, I created a robust backend to support efficient data storage and retrieval for a seamless user experience.",
    tags: [
      {
        name: "C#,",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      {
        name: ".NET Framework",
        color: "pink-text-gradient",
      },
    ],
    image: rdvapp,
    source_code_link: "https://github.com/marouaneAbdeL/RDVapp",
  },
  {
    name: "Moroccan Wonders",
    description:
      "A web project to promote tourism in Morocco. This website enables users to easily discover relevant tourist activities in different regions of Morocco and select a hotel based on their preferences.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Text API ",
        color: "pink-text-gradient",
      },
    ],
    image: mw,
    source_code_link: "https://github.com/",
  },
  {
    name: "Financial coaching",
    description:
      "An iOS application that allows users to track their expenses, plan a budget, and view their financial progress clearly and intuitively.",
    tags: [
      {
        name: "SwiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "Core Data",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: fc,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
