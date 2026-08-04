import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { categories } from '@/data/categories';
import { Code, Cloud, Database, Shield, Smartphone, Brain, Terminal, Layout } from 'lucide-react';

const iconMap = {
  'icon-web-development': <Code className="w-8 h-8" />,
  'icon-cloud-computing': <Cloud className="w-8 h-8" />,
  'icon-database-management': <Database className="w-8 h-8" />,
  'icon-cybersecurity': <Shield className="w-8 h-8" />,
  'icon-mobile-app-development': <Smartphone className="w-8 h-8" />,
  'icon-ai-machine-learning': <Brain className="w-8 h-8" />,
  'icon-devops': <Terminal className="w-8 h-8" />,
  'icon-ui-ux-design': <Layout className="w-8 h-8" />,
};

export const Categories = () => {
  const displayCategories = categories.slice(0, 8);

  return (
    <section className="py-24 bg-background">
      <Container>
        <SectionHeader 
          title="Explore by Category" 
          subtitle="Find the perfect exam tailored to your career goals."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((cat) => (
            <Card key={cat.id} hover className="flex flex-col items-center text-center p-8 group">
              <div 
                className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2"
                style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
              >
                {iconMap[cat.icon] || <Code className="w-8 h-8" />}
              </div>
              <h3 className="text-lg font-bold text-textHeading mb-2">{cat.name}</h3>
              <p className="text-sm text-textMuted line-clamp-2">{cat.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
