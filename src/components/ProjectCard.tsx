import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { use3DTilt } from "@/hooks/use-3d-tilt";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
  };
  index: number;
  isInView: boolean;
}

export const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  const { cardRef, rotateX, rotateY, handleMouseMove, handleMouseLeave } = use3DTilt();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="cursor-pointer"
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="glass-card rounded-2xl overflow-hidden group"
      >
        {/* Project Image Placeholder */}
        <div
          className={`h-48 bg-gradient-to-br ${
            project.image === "gradient-primary" ? "from-primary to-accent" : "from-accent to-secondary"
          } relative overflow-hidden`}
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="absolute inset-0 bg-background/10 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-background font-semibold text-sm">Project Screenshot</p>
              <p className="text-background/80 text-xs mt-2">Image placeholder</p>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6" style={{ transform: "translateZ(20px)" }}>
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
            <Button
              size="sm"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              style={{ transform: "translateZ(30px)" }}
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-accent text-accent hover:bg-accent/10"
              style={{ transform: "translateZ(30px)" }}
            >
              <Github size={16} className="mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
