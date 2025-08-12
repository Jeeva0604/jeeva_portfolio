import React from "react";
import { portfolioData } from "@/assets/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const { description, interests } = portfolioData.about;

  return (
    <section id="about" className="py-16">
      <div className="section-container">
        {/* Heading Animation */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* Left Column - Description */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-lg">
              <CardContent className="pt-6">
                {description.split("\n\n").map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Interests, Education, Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Interests & Expertise
                </h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-medium">
                        Diploma in Mechanical Engineering
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Government Polytechnic College, 2017-2020
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Experience</h3>
                  <div className="space-y-3">
                    {[
                      {
                        role: "Mobile App Developer",
                        company: "Yaash",
                        year: "2023-Present",
                      },
                      {
                        role: "Backend Developer",
                        company: "Yaash",
                        year: "2024-Present",
                      },
                    ].map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <h4 className="font-medium">{exp.role}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {exp.company}, {exp.year}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
