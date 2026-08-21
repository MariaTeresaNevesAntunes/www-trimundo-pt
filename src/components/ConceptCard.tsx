import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ConceptCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange';
  link?: string;
  delay?: number;
}

const ConceptCard = ({ title, description, icon, color, link, delay = 0 }: ConceptCardProps) => {
  const colorClasses = {
    blue: 'bg-math-blue/10 border-math-blue/20 hover:border-math-blue/40',
    green: 'bg-math-green/10 border-math-green/20 hover:border-math-green/40',
    purple: 'bg-math-purple/10 border-math-purple/20 hover:border-math-purple/40',
    orange: 'bg-math-orange/10 border-math-orange/20 hover:border-math-orange/40',
  };

  const iconColors = {
    blue: 'text-math-blue',
    green: 'text-math-green',
    purple: 'text-math-purple',
    orange: 'text-math-orange',
  };

  const content = (
    <div 
      className={`math-card ${colorClasses[color]} group cursor-pointer h-full animate-slide-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`w-12 h-12 rounded-lg ${iconColors[color]} mb-4 flex items-center justify-center bg-current/10`}>
        {icon}
      </div>
      
      <h3 className="heading-md mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      {link && (
        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
          Explorar
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );

  if (link) {
    return <Link to={link} className="block h-full">{content}</Link>;
  }

  return content;
};

export default ConceptCard;