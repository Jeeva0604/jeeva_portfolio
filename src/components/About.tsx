
import React from 'react';
import { portfolioData } from '@/assets/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About: React.FC = () => {
  const { description, interests } = portfolioData.about;
  
  return (
    <section id="about" className="py-16">
      <div className="section-container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardContent className="pt-6">
                {description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Interests & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                      {interest}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Bachelor of Computer Science</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">University of Technology</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Experience</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Senior Mobile Developer</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">TechSolutions Inc, 2020-Present</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Backend Developer</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Data Systems Ltd, 2018-2020</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
