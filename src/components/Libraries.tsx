
import React from 'react';
import { portfolioData } from '@/assets/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Libraries: React.FC = () => {
  return (
    <section id="libraries" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">My <span className="gradient-text">Libraries</span></h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Open-source libraries and packages that I've developed and contributed to the community.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.libraries.map((library, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col"
            >
              <CardHeader>
                <Badge variant="outline" className="self-start mb-2">{library.type}</Badge>
                <CardTitle>{library.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 dark:text-gray-300">
                  {library.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={library.url} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Libraries;
