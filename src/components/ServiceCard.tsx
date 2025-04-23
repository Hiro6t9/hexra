
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="glass-card p-6 flex flex-col items-center text-center"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center text-hexra-purple">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
