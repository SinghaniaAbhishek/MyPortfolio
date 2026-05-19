import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Instagram, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useTyping } from "@/hooks/use-typing";

// Avatar component that can render small (default) or full-size (fills parent container)
type AvatarProps = { full?: boolean };
const Avatar: React.FC<AvatarProps> = ({ full = false }) => {
  const [errored, setErrored] = useState(false);

  // container classes differ depending on full mode
  const containerClass = full
    ? "absolute inset-0 rounded-full overflow-hidden"
    : "w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-primary/20 relative";

  const fallbackClass = full ? "absolute inset-0 flex items-center justify-center bg-primary/10" : "w-full h-full flex items-center justify-center bg-primary/10";

  return (
    <div className={containerClass}>
      {!errored ? (
        <img
          src="/profileImage.png"
          alt="Abhishek Singhania"
          className={full ? "w-full h-full object-cover block bg-gradient-to-br from-primary/20 to-accent/20" : "w-full h-full object-cover block"}
          onError={() => setErrored(true)}
        />
      ) : (
        <div className={fallbackClass}>
          <span className="text-6xl gradient-text font-bold">AS</span>
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const typingText = useTyping([
    "MERN Stack Developer",
    "React Enthusiast",
    "Problem Solver",
    "Full-Stack Engineer"
  ]);

  const socialLinks = [
    { icon: Github, href: "https://github.com/SinghaniaAbhishek", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/singhaniaabhishek13", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_.abhishek._013", label: "Instagram" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" style={{ backgroundImage: `var(--gradient-mesh)` }} />
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-accent text-lg font-medium mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
                Abhishek Singhania
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light flex items-center gap-2">
                <span>{typingText}</span>
                <span className="inline-block w-0.5 h-8 bg-primary animate-pulse" />
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-foreground/80 leading-relaxed"
            >
              I build modern, scalable and visually clean web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 glass-card rounded-full hover:scale-110 transition-transform glow-effect-accent"
                >
                  <social.icon size={24} className="text-accent" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 animate-glow" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 glass-card rounded-full overflow-hidden border-4 border-primary/30 animate-float">
                {/* Full-size avatar that fills the big circular container */}
                <Avatar full />
                <div className="absolute inset-0 w-full h-full flex items-end justify-center pb-8 pointer-events-none">
                  <p className="text-muted-foreground text-sm px-8 pointer-events-auto">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          type="button"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-accent/60 bg-background/60 backdrop-blur-md shadow-lg hover-scale"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to about section"
        >
          <ArrowDown size={28} className="text-accent animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
