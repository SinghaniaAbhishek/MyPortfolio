import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, Presentation } from "lucide-react";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Trophy,
      title: "7 Real Projects",
      description: "Successfully built and deployed 7 full-stack applications across various domains including CRM, booking systems, and finance management.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Users,
      title: "Tech Club Member",
      description: "Active member of college tech club, collaborating on innovative projects and staying updated with latest technologies.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Presentation,
      title: "Major Presentations",
      description: "Delivered impactful presentations on 'Color Psychology in UI/UX' and 'Blockchain Beyond Cryptocurrency' to technical audiences.",
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Achievements</h2>
          <p className="text-muted-foreground text-lg">Milestones and accomplishments</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card p-8 rounded-2xl text-center group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" 
                   style={{ backgroundImage: `linear-gradient(135deg, hsl(217 91% 60%), hsl(180 95% 55%))` }} />
              
              <div className="relative z-10">
                <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-effect`}>
                  <achievement.icon size={32} className="text-background" />
                </div>
                
                <h3 className="text-2xl font-bold gradient-text mb-4">{achievement.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
