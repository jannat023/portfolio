import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experience = {
  company: "Confidence Infrastructure PLC",
  role: "IT Intern",
  period: "September 2024 - Present",
  location: "Sonargoan Road, Dhaka",
  achievements: [
    "Built Geocil Automation software for tracking production process of Geocil bags with lab testing using PHP, CSS, HTML, JavaScript, REST API, and AJAX",
    "Automated the entire production process, reducing manual hours and improving operational efficiency",
    "Collaborated with team members to ensure seamless integration with existing systems",
    "Developed real-time data tracking and reporting features for production stages and lab tests",
  ],
  skills: {
    technical: ["PHP", "CSS", "HTML", "JavaScript", "REST API", "AJAX", "Full-stack Development"],
    soft: ["Teamwork", "Communication", "Problem Solving", "Technical Documentation"],
  },
};

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[hsl(270,80%,60%)]/10 rounded-full blur-3xl" />
      
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
              Professional Journey
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden group"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {experience.role}
                    </h3>
                    <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-3">
                      <Briefcase size={20} />
                      {experience.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-8 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground/80 leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.technical.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm glass border border-primary/30 text-primary rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.soft.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm glass border border-border text-foreground/70 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass rounded-3xl p-8 mt-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">B.Sc. in Computer Science and Engineering</h4>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="font-medium text-primary">BRAC University</span>
                      <span>•</span>
                      <span>July 2020 – October 2024</span>
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
