import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Python Programming",
      issuer: "Professional Certification",
      description: "Comprehensive training in Python programming covering core concepts, OOP, and advanced features.",
      skills: ["Python", "OOP", "Data Structures"],
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Professional Certification",
      description: "In-depth study of DSA concepts, algorithm design, and problem-solving techniques.",
      skills: ["DSA", "Problem Solving", "Algorithms"],
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0" style={{ backgroundImage: `var(--gradient-mesh)`, opacity: 0.1 }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Certifications</h2>
          <p className="text-muted-foreground text-lg">Professional achievements and continuous learning</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg glow-effect">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold gradient-text mb-1">{cert.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="flex items-center gap-1 text-xs bg-muted/50 border border-border/50 px-3 py-1 rounded-full"
                      >
                        <CheckCircle size={12} className="text-accent" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
