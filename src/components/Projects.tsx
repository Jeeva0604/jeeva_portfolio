
import React, { useState } from 'react';
import { portfolioData } from '@/assets/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioData.projects)[0] | null>(null);

  return (
    <section id="projects" className="py-16">
      <div className="section-container">
        <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Click on any project to learn more about it.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Project Details Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="h-56 overflow-hidden mb-4 rounded-md">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogDescription className="text-base text-foreground mb-4">
                {selectedProject.description}
              </DialogDescription>
              <div className="flex flex-wrap gap-2 mb-2">
                <h4 className="font-medium w-full">Technologies Used:</h4>
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
