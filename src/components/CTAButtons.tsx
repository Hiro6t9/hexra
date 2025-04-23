
import React from "react";

interface CTAButtonProps {
  text: string;
  href: string;
  isPrimary?: boolean;
  delay?: number;
}

const CTAButton = ({ text, href, isPrimary = false, delay = 0 }: CTAButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={isPrimary ? "neon-button" : "glass-button"}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {text}
    </a>
  );
};

const CTAButtons = () => {
  const buttons = [
    { text: "Join Discord", href: "https://dsc.gg/hexra", isPrimary: true },
    { text: "Dashboard", href: "https://dash.hexra.cloud" },
    { text: "Panel", href: "https://panel.hexra.cloud" },
    { text: "Billing Area", href: "https://billing.hexra.cloud" }
  ];

  return (
    <section className="py-16 px-4 md:px-6" id="cta">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ready to Get Started?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our community and experience the power of HEXRA.CLOUD hosting
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((button, index) => (
            <CTAButton
              key={index}
              text={button.text}
              href={button.href}
              isPrimary={button.isPrimary}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTAButtons;
