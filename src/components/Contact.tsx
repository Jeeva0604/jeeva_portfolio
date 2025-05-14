
import React from 'react';
import { portfolioData } from '@/assets/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { email, instagram, github, linkedin } = portfolioData.contact;
  
  const socialLinks = [
    {
      name: 'Email',
      href: `mailto:${email}`,
      icon: Mail,
      username: email,
    },
    {
      name: 'Instagram',
      href: `https://instagram.com/${instagram}`,
      icon: Instagram,
      username: `@${instagram}`,
    },
    {
      name: 'GitHub',
      href: `https://github.com/${github}`,
      icon: Github,
      username: github,
    },
    {
      name: 'LinkedIn',
      href: `https://linkedin.com/in/${linkedin}`,
      icon: Linkedin,
      username: linkedin,
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to say hi!
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <div className="flex items-center p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all">
                      <link.icon className="h-6 w-6 text-primary mr-3" />
                      <div>
                        <h3 className="font-medium">{link.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{link.username}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild className="px-8">
                  <a href={`mailto:${email}`}>
                    Send me an email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
