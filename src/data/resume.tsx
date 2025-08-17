import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Suhas Pete",
  initials: "SP",
  url: "https://suhaspete.com",
  resume: "/Suhas Pete_photo.pdf",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "Data Analyst at Airbus specializing in aviation data analysis, machine learning for time-series applications, and flight data recorder parameter mapping. Expert in Python, ML algorithms, and data visualization.",
  summary:
    "Passionate Data Analyst with expertise in aviation safety systems and machine learning applications. Currently developing cutting-edge tools at Airbus for flight data analysis and fault propagation mapping. Proficient in Python, time-series ML, data visualization, and aircraft system analysis with multiple hackathon wins and national-level achievements.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "Machine Learning",
    "Time-Series Analysis",
    "Scikit-learn",
    "TensorFlow",
    "SciPy",
    "Data Visualization",
    "Matplotlib",
    "Plotly",
    "D3.js",
    "Flight Data Analysis",
    "Aviation Systems",
    "Fault Propagation Analysis",
    "Feature Engineering",
    "Data Preprocessing",
    "UI/UX Design",
    "FastAPI",
    "Flask",
    "Docker",
    "Kubernetes",
    "Vector Databases",
    "FAISS",
    "ChromaDB",
    "Google Cloud",
    "Argo CD",
    "LangChain",
    "OpenCV",
    "Streamlit",
    "C++",
    "JavaScript",
    "MySQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "petesuhas@gmail.com",
    tel: "+917259633946",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/suhaspete",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/suhaspete",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/Suhas Pete_photo.pdf",
        icon: Icons.resume,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:petesuhas@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Airbus",
      location: "Bengaluru, India",
      title: "Data Analyst - Intern",
      start: "Aug 2025",
      end: "Present",
      logoUrl: "https://www.airbus.com/favicon.ico",
      href: "https://www.airbus.com",
      badges: ["Internship"],
      description:
        "Developing interactive tools for mapping Flight Data Recorder parameters based on aircraft systems and subsystems. Implementing ML algorithms for time-series applications, conducting fault propagation analysis, and building data visualization interfaces for aviation safety applications.",
    },
    {
      company: "Xzayogn (AI Startup)",
      location: "Bengaluru, India",
      title: "AI/ML Backend Engineer",
      start: "Nov 2024",
      end: "Jul 2025",
      logoUrl: "",
      href: "",
      badges: ["Contract"],
      description:
        "Built scalable backend services with FastAPI and distributed storage systems using ChromaDB, optimizing database queries and implementing RESTful APIs for AI model deployments.",
    },
    {
      company: "Deloai Pvt Ltd",
      location: "Bengaluru, India",
      title: "Backend Engineer",
      start: "Jul 2024",
      end: "Sept 2024",
      logoUrl: "",
      href: "",
      badges: ["Contract"],
      description:
        "Implemented distributed backend services with storage architecture design, integrated AI APIs and optimized database performance.",
    },
    {
      company: "Nuevera Infotech Pvt Ltd",
      location: "Bengaluru, India",
      title: "Web Developer",
      start: "Oct 2023",
      end: "Mar 2024",
      logoUrl: "",
      href: "",
      badges: ["Contract"],
      description:
        "Developed web applications with automated testing frameworks using Selenium and version control systems.",
    },
  ],
  education: [
    {
      school: "BMS Institute of Technology and Management",
      degree: "BE in Information Science and Engineering | GPA: 8.68/10",
      start: "Nov 2022",
      end: "May 2026",
      logoUrl: "",
      href: "",
    },
  ],
  projects: [
    {
      title: "Flight Data Fault Mapping Tool (Airbus-Aligned)",
      href: "https://github.com/suhaspete/airbus_project",
      dates: "Jul 2025 – Present",
      active: true,
      image: "",
      video: "",
      links: [
        {
          icon: (
            <>
              <Icons.github />
            </>
          ),
          type: "GitHub",
          href: "https://github.com/suhaspete/airbus_project",
        },
      ],
      description:
        "Designed a tool to map fault propagation across Airbus aircraft systems using FDR data. Applied time-series ML models to detect parameter anomalies, codified fault trees for incident tracing, and built an interactive dashboard visualizing system/subsystem impacts.",
      technologies: [
        "Python",
        "Scikit-learn",
        "TensorFlow",
        "Plotly",
        "Streamlit",
      ],
    },
    {
      title: "Dockerized Web App Deployment with Kubernetes and Argo CD",
      href: "https://github.com/suhaspete/docker-kubernetes-argocd-webapp",
      dates: "Dec 2024",
      active: true,
      image: "",
      video: "",
      links: [
        {
          icon: (
            <>
              <Icons.github />
            </>
          ),
          type: "GitHub",
          href: "https://github.com/suhaspete/docker-kubernetes-argocd-webapp",
        },
      ],
      description:
        "Deployed a scalable web app using Docker, Kubernetes, GitOps via Argo CD, and implemented canary deployments with Argo Rollouts and full infrastructure documentation.",
      technologies: ["Docker", "Kubernetes", "Argo CD", "GitOps"],
    },
    {
      title: "Multi-PDF Chatbot with Distributed Storage",
      href: "https://github.com/suhaspete/Multi-PDF-Chatbot",
      dates: "Apr 2025",
      active: true,
      image: "",
      video: "",
      links: [
        {
          icon: (
            <>
              <Icons.github />
            </>
          ),
          type: "GitHub",
          href: "https://github.com/suhaspete/Multi-PDF-Chatbot",
        },
      ],
      description:
        "Developed a LangChain-based multi-PDF chatbot using FAISS and Vector DBs, with Flask APIs and Streamlit UI for efficient document storage and semantic querying.",
      technologies: ["LangChain", "FAISS", "Streamlit", "Flask", "Vector DBs"],
    },
    {
      title: "Emotion-Aware Interview System",
      href: "https://github.com/suhaspete/NITK_HACKATHON",
      dates: "Jan 2025",
      active: true,
      image: "",
      video: "",
      links: [
        {
          icon: (
            <>
              <Icons.github />
            </>
          ),
          type: "GitHub",
          href: "https://github.com/suhaspete/NITK_HACKATHON",
        },
      ],
      description:
        "Built an AI-powered virtual interviewer using OpenCV and Flask for real-time emotion detection and speech processing with optimized multimedia data management.",
      technologies: ["Flask", "OpenCV", "Streamlit", "Python"],
    },
  ],
  hackathons: [
    {
      title: "IIT Madras – Finlatics Challenge",
      dates: "Feb 2025",
      location: "National",
      description: "National Finalist - Top 25 teams nationwide for finance solution with advanced analytics and portfolio optimization algorithms.",
      image: "",
      links: [],
    },
    {
      title: "NITK Hackathon – HackVerse 5.0",
      dates: "Jan 2025",
      location: "NITK",
      description: "Second Runner Up - JARVIS AI Assistant: Intelligent voice-activated system with speech processing and efficient backend architecture.",
      image: "",
      links: [],
    },
    {
      title: "0Xday Hackathon – Pondicherry",
      dates: "Feb 2025",
      location: "Pondicherry",
      description: "Second Prize - Dynamic ML model selector with automated feature analysis and efficient data processing mechanisms.",
      image: "",
      links: [],
    },
  ],
};
