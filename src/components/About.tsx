import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code, Heart } from "lucide-react";

const highlights = [
  { icon: Award, label: "6+ Projects", sublabel: "Completed" },
  { icon: Heart, label: "Full-Stack", sublabel: "Development" },
  { icon: Code, label: "PHP, React", sublabel: "& JavaScript" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block"
            >
              Get to know me
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  CSE graduate from BRAC University with hands-on experience building web applications 
                  using PHP, Laravel, MySQL, JavaScript, jQuery, HTML5, CSS3, and RESTful APIs. 
                  I've worked on impactful projects including a factory workflow system (Geocil Automation), 
                  a Laravel-based news portal, and a core PHP/MySQL platform (PoshaPrani).
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  My strengths include SQL, OOP, MVC architecture, API integration, testing, and debugging. 
                  Currently expanding my skill set with React and Next.js to become a more versatile 
                  full-stack developer. I'm passionate about building efficient, scalable solutions that 
                  solve real-world problems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-6 text-center relative overflow-hidden group"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-shadow duration-300">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <div className="text-2xl font-bold mb-1 gradient-text">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
