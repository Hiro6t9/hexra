
import { Server, Cloud, Gamepad2, Globe, Gift } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "VPS Hosting",
      description: "Blazing-fast Linux machines for your projects",
      icon: <Server className="w-10 h-10" />,
    },
    {
      title: "Minecraft Server Hosting",
      description: "Java + Bedrock optimized servers",
      icon: <Gamepad2 className="w-10 h-10" />,
    },
    {
      title: "Discord Bot Hosting",
      description: "Low-latency, 24/7 uptime guaranteed",
      icon: <Cloud className="w-10 h-10" />,
    },
    {
      title: "Web Hosting",
      description: "SSL, Panel, subdomain ready",
      icon: <Globe className="w-10 h-10" />,
    },
    {
      title: "Free Minecraft Hosting",
      description: "Earned by inviting people to Discord",
      icon: <Gift className="w-10 h-10" />,
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium hosting solutions at affordable prices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
