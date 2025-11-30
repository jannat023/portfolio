import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown } from "lucide-react";

export const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Syeda_Jannatul_Ferdous_Resume (1).pdf";
    link.download = "Syeda_Jannatul_Ferdous_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[hsl(200,80%,60%)]/10 rounded-full blur-3xl" />
      
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
              My Professional Summary
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Resume</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden group text-center"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
              
              <div className="relative">
                <div className="mb-8">
                  <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-shadow duration-300">
                    <FileDown className="text-primary" size={40} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    Download My Resume
                  </h3>
                  <p className="text-lg text-foreground/80 mb-8">
                    Get a comprehensive overview of my professional experience, education, skills, and achievements.
                  </p>
                </div>

                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300"
                >
                  <FileDown size={20} />
                  Download Resume (PDF)
                </motion.button>

                <div className="mt-12 pt-8 border-t border-border/30">
                  <h4 className="text-lg font-semibold mb-6">Quick Highlights</h4>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="p-4">
                      <div className="text-3xl font-bold gradient-text mb-2">6+</div>
                      <p className="text-sm text-foreground/70">Projects Completed</p>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold gradient-text mb-2">CSE</div>
                      <p className="text-sm text-foreground/70">BRAC University</p>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold gradient-text mb-2">Full-Stack</div>
                      <p className="text-sm text-foreground/70">Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
