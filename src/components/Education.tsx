import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: "2022 - 2027",
      title: "Bachelor of Technology - CSE",
      institution: "Gandhi Institute of Engineering and Technology University, Odisha, Gunupur",
      description: "Currently pursuing B.Tech in Computer Science & Engineering with focus on full-stack development and software engineering principles. 3rd Year Student.",
      icon: GraduationCap,
    },
    {
      year: "2020",
      title: "Higher Secondary (12th)",
      institution: "CBSE Board",
      description: "Completed higher secondary education with strong foundation in Mathematics and Science.",
      icon: BookOpen,
    },
    {
      year: "2018",
      title: "Secondary (10th)",
      institution: "CBSE Board",
      description: "Completed secondary education with excellent academic performance.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0" style={{ backgroundImage: `var(--gradient-mesh)`, opacity: 0.1 }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">My academic journey</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center glow-effect">
                <item.icon size={16} className="text-background" />
              </div>

              {/* Content Card */}
              <div className="glass-card p-6 rounded-xl ml-6 hover:scale-105 transition-transform group cursor-pointer">
                <span className="text-accent text-sm font-semibold">{item.year}</span>
                <h3 className="text-2xl font-bold gradient-text mt-2">{item.title}</h3>
                <p className="text-primary font-medium mt-1">{item.institution}</p>
                <p className="text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
