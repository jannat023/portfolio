import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Database, Zap, Globe, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "PHP, Laravel, MySQL, RESTful APIs",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "MySQL, SQL Queries, Data Modeling",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Frontend Technologies",
    description: "HTML5, CSS3, JavaScript, jQuery, AJAX",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Machine Learning",
    description: "Python, Scikit-learn, Pandas, XGBoost",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "Web Development",
    description: "MVC, OOP, Full-Stack Development",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Tools & Version Control",
    description: "Git, GitHub, Matplotlib, Seaborn",
    color: "from-pink-500 to-rose-500",
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[hsl(270,80%,60%)]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block"
            >
              What I Do Best
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              My <span className="gradient-text">Skills</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
                
                <div className="glass rounded-2xl p-8 relative overflow-hidden h-full border-border/50 group-hover:border-primary/30 transition-all duration-300">
                  {/* Animated gradient background */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <motion.div
                      className={`bg-gradient-to-br ${skill.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <skill.icon className="text-white" size={28} />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
