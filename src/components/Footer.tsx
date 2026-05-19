import { motion } from "framer-motion";

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
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <img 
              src="/profileImage.png" 
              alt="Abhishek Singhania" 
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
            />
          </div>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Abhishek Singhania 
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
