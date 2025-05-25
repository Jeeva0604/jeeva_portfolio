import React from "react";
import { portfolioData } from "@/assets/data";
import { Card, CardContent } from "@/components/ui/card";

const Skills: React.FC = () => {
  // Group skills by category
  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <Card
              key={category}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary h-2" />
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill.name} className="skill-pill">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
