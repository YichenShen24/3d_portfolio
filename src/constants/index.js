export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Podcaster AI - AI Podcast Platform",
    desc: "Podcaster AI is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    href: "https://podcaster-ai-beta.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      // {
      //   id: 4,
      //   name: "Framer Motion",
      //   path: "/assets/framer.png",
      // },
    ],
  },

  {
    title: "Imagin AI - AI Photo Manipulation App",
    desc: "Imagin AI is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://imagin-ai-eta.vercel.app/",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-50, 25, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "SOTI Inc.",
    pos: "Cloud Research and Development Intern",
    duration: "May 2023 - Dec 2023",
    title:
      "- Designed and implemented a cloud cost optimization system for 50+ accounts, leveraging AWS and Azure.\n" +
      "- Implemented Terraform to standardize infrastructure as code, reducing rebuild time by 30%.\n" +
      "- Achieved an estimated 22% (~150K USD monthly) in cost savings by optimizing underutilized resources.\n" +
      "- Developed an AI assisted cloud admin chatbot that automates 10% of repetitive administrative tasks by integratinf with Azure and OpenAI API.",
    tech: "AWS (Amplify, API Gateway, Lambda, DynamoDB), Azure (Blob Storage, Functions, CosmosDB), Terraform, OpenAI, Node.js",
    icon: "/assets/soti-logo.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "ADT Security Services",
    pos: "Web & Product Intern",
    duration: "Jul 2022 - Aug 2022",
    title:
      "- Developed a Proof of Concept (POC) management website using Vue.js, reducing retrieval time by 30% and enhancing onboarding and daily workflows.\n" +
      "- Leveraged Firebase and ADT's Vue library for efficient data storage, authentication, deployment, and component reusability.\n" +
      "- Integrated Google Analytics, defining 5 events and 2 views, driving data-informed platform refinements.",
    tech: "Vue.js, Firebase (Firestore, Authentication, Hosting), Google Analytics",
    icon: "/assets/adt-logo.jpg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Lehigh University",
    pos: "Data Analyst / Digital Marketing Programmer",
    duration: "Sep 2019 - Jan 2020",
    title:
      "- Assisted in investigating the impact of self-order machines on diner satisfaction in restaurants.\n" +
      "- Conducted sentiment analysis with Python's VADER on 300,000 Yelp restaurant reviews from 2017.\n" +
      "- Utilized Python to mine data from 648 PDFs, culminating in the extraction and organization of 580,000+ URL links into a consolidated Excel sheet, streamlining the department’s ability to analyze digital marketing strategies.",
    tech: "Python (Pandas, NLTK/VADER), Web Scraping, Data Mining, Excel",
    icon: "/assets/lehigh-logo.png",
    animation: "salute",
  },
];
