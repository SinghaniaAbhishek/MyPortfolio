import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Trophy } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "MERN Stack expertise with modern UI principles",
    },
    {
      icon: Database,
      title: "Strong Fundamentals",
      description: "DBMS, OS, COA, DSA - Solid computer science foundation",
    },
    {
      icon: Trophy,
      title: "Python & DSA Certified",
      description: "Tech club member and continuous learner",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">Get to know more about my journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm a <span className="gradient-text-accent font-semibold">3rd-year CSE student</span> passionate 
                about building modern full-stack applications with MERN, SQL, and clean UI principles. 
                I enjoy creating dashboards, booking systems, CRM modules, and real-world projects with 
                strong focus on design and functionality.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                I love learning new technologies and transforming ideas into real products. My expertise 
                spans from frontend frameworks like <span className="text-primary font-semibold">React</span> to 
                backend systems with <span className="text-accent font-semibold">Node.js</span> and various databases.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border-l-4 border-accent">
              <p className="text-muted-foreground italic">
                "Building applications that combine beautiful design with powerful functionality is my passion. 
                Every project is an opportunity to learn and create something impactful."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-transform group cursor-pointer glow-effect"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg group-hover:scale-110 transition-transform">
                    <item.icon size={24} className="text-background" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 gradient-text">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
