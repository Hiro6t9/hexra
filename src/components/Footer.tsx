
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 glass border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-400">
            © HEXRA.CLOUD {new Date().getFullYear()} • All Rights Reserved
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Powered by the Community</span>
          <div className="bg-hexra-purple/20 px-2 py-1 rounded-full">
            <span className="text-xs font-medium text-hexra-purple">2,500+ members</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
