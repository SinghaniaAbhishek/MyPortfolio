import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap"],
      gradient: "from-primary to-accent",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "PHP", "Java", "Spring Boot"],
      gradient: "from-accent to-secondary",
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
      gradient: "from-secondary to-primary",
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify", "EmailJS", "XAMPP"],
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0" style={{ backgroundImage: `var(--gradient-mesh)`, opacity: 0.1 }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:scale-105 transition-transform"
            >
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} text-background font-medium text-sm hover:shadow-lg transition-all cursor-pointer`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
