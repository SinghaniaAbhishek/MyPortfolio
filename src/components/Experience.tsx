import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Web Development Intern",
      company: "PreppRight x LumenXo",
      period: "May - June 2025",
      type: "Internship",
      icon: Briefcase,
      achievements: [
        "Developed a MERN stack finance tracker application to record, categorize, and manage user income and expenses.",
        "Implemented user authentication and secure access using backend APIs.",
        "Built 10+ responsive UI components using React for improved user experience.",
        "Integrated JWT authentication for secure access control.",
      ],
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      gradient: "from-primary to-accent",
    },
    {
      role: "Java & DSA Lead",
      company: "Code Communicators Club",
      period: "Dec 2024 - Present",
      type: "Leadership",
      icon: Users,
      achievements: [
        "Led Java and Data Structures & Algorithms sessions for club members.",
        "Mentored peers on problem-solving approaches and coding best practices.",
        "Conducted workshops on advanced DSA concepts and competitive programming.",
        "Helped 15+ students improve their coding skills and interview preparation.",
      ],
      techStack: ["Java", "DSA", "Algorithms", "Mentoring"],
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">Professional experience and leadership roles</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 md:p-8 rounded-2xl hover:scale-102 transition-transform"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`p-3 bg-gradient-to-br ${exp.gradient} rounded-lg glow-effect flex-shrink-0`}>
                    <exp.icon size={24} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text mb-1">{exp.role}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-1">{exp.period}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="ml-16 md:ml-0">
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted/50 border border-border/50 rounded-full text-xs font-medium text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
