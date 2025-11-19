import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Abhishek Singhania. Built with
            <Heart size={16} className="text-accent animate-pulse" />
            and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
