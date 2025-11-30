import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Geocil Automation",
    description: "Factory workflow system for tracking Geocil bag production with lab testing. Automated entire production process, reducing manual hours and improving operational efficiency.",
    tags: ["PHP", "JavaScript", "REST API", "AJAX"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "PoshaPrani",
    description: "Website where animal lovers can find necessary things along with grooming and veterinary services. Features include grooming facilities by choice, product restock with real-time inventory, wishlist, veterinary service with disease history, and loyalty discounts.",
    tags: ["HTML", "PHP", "MySQL"],
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "News Website",
    description: "News portal providing news and advertisements for viewers. Features categorical news viewing with keywords, recommendations, monetization features, and user interaction through email and newsletter sections.",
    tags: ["Javascript", "HTML", "CSS", "Laravel"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Rainfall Prediction",
    description: "Machine learning model to predict rainfall based on weather data. Preprocessed data by handling missing values, normalization, and feature selection. Built and evaluated regression models using Linear Regression and Decision Tree.",
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1504711331083-9c895941bf81?w=800&h=600&fit=crop",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Cattle Disease Prediction",
    description: "ML model predicting cattle diseases based on symptoms and animal characteristics using Decision Tree, Random Forest, and XGBoost. Applied label encoding and SMOTE to handle categorical data and balance the dataset.",
    tags: ["Python", "Scikit-learn", "Keras", "XGBoost"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Heart Disease Prediction",
    description: "Machine learning model to predict heart disease using patient health data with Logistic Regression, Random Forest, and XGBoost. Preprocessed data with label encoding, scaling, and SMOTE to manage categorical variables and class imbalance.",
    tags: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    gradient: "from-red-500/20 to-pink-500/20",
  },
  {
    title: "News Bias Detection",
    description: "Text classification model to detect political bias (left, center, right) in news articles. Applied NLP techniques and TF-IDF vectorization for feature extraction. Trained and evaluated models including Logistic Regression and Random Forest.",
    tags: ["Python", "Scikit-learn", "NLTK"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
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
              My Work
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-3xl`} />
                
                <div className="glass rounded-3xl overflow-hidden border-border/50 group-hover:border-primary/30 transition-all duration-500 relative">
                  <div className="relative overflow-hidden aspect-video">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-10`} />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover relative z-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 gap-4 z-20">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Button size="sm" variant="outline">
                          <ExternalLink size={16} className="mr-2" />
                          View Details
                        </Button>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://github.com/jannat-023" target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-2" />
                            GitHub
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-1.5 text-sm glass border border-primary/30 text-primary rounded-full font-medium"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
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
