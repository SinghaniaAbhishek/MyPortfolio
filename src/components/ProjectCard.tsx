import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github?: string;
    liveDemo?: string;
  };
  index: number;
  isInView: boolean;
}

export const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cursor-pointer group"
      whileHover={{ scale: 1.02, y: -10 }}
    >
      <div className="glass-card rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        {/* Project Image Placeholder */}
        <div
          className={`h-48 bg-gradient-to-br ${
            project.image === "gradient-primary" ? "from-primary to-accent" : "from-accent to-secondary"
          } relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-background/10 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-background font-semibold text-sm">Project Screenshot</p>
              <p className="text-background/80 text-xs mt-2">Image placeholder</p>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold gradient-text mb-3">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-muted/50 border border-border/50 px-3 py-1 rounded-full text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1"
              >
                <button className="w-full px-4 py-2 text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-md flex items-center justify-center gap-2 cursor-pointer transition-colors">
                  <ExternalLink size={16} />
                  Live Demo
                </button>
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1"
              >
                <button className="w-full px-4 py-2 text-sm font-medium border border-accent text-accent hover:bg-accent/10 rounded-md flex items-center justify-center gap-2 cursor-pointer transition-colors">
                  <Github size={16} />
                  GitHub
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
