import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Swayamvar – One Stop Wedding Platform",
      description: "Complete wedding planning platform built with MERN stack, featuring vendor management, booking systems, and event coordination tools.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "gradient-primary",
    },
    {
      title: "Blog Website + Dashboard System",
      description: "Full-featured blogging platform with admin dashboard for content management, user authentication, and rich text editing capabilities.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      image: "gradient-accent",
    },
    {
      title: "Restaurant Booking & Management System",
      description: "Complete restaurant management solution with table reservations, menu management, and order tracking system.",
      tech: ["React", "Express", "MySQL", "Bootstrap"],
      image: "gradient-primary",
    },
    {
      title: "SmartLeavePlus – Leave Application System",
      description: "Online leave management system streamlining the leave application process with approval workflows and status tracking.",
      tech: ["JavaScript", "Node.js", "MongoDB", "CSS"],
      image: "gradient-accent",
    },
    {
      title: "Online Food Ordering System",
      description: "Food ordering platform with cart functionality, order management, and payment integration built with PHP and MySQL.",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      image: "gradient-primary",
    },
    {
      title: "Vertex CRM",
      description: "Customer Relationship Management system with React frontend and Spring Boot backend for managing customer interactions and data.",
      tech: ["React", "Spring Boot", "Java", "MySQL"],
      image: "gradient-accent",
    },
    {
      title: "Kuber – Finance Management UI",
      description: "Modern finance and investment management interface with dashboard analytics, portfolio tracking, and data visualization.",
      tech: ["React", "TailwindCSS", "Chart.js"],
      image: "gradient-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Real-world applications I've built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
