
import React from "react";
import { Discord as DiscordIcon } from "lucide-react";

const DISCORD_INVITE = "https://discord.gg/AGykahgch8"; // Change to your invite if different
const DISCORD_WIDGET_ID = "1143934833893410906"; // Example: replace with your server ID

const Footer = () => {
  return (
    <footer className="py-8 px-4 glass border-t border-white/5 bg-[#1E2233]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm" style={{ color: "#A0789C" }}>
            © HEXRA.CLOUD {new Date().getFullYear()} • All Rights Reserved
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className="text-sm font-semibold"
            style={{ color: "#6D9EC5" }}
          >
            Powered by Hexra.cloud
          </span>
          <a
            href={DISCORD_INVITE}
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-1 bg-[#6D9EC5] hover:bg-[#F8B68D] transition-colors px-3 py-1 rounded-full text-[#1B1B1B] font-semibold hover:text-[#D04A4A] text-xs shadow neon-button"
            style={{
              boxShadow:
                "0 2px 12px 0px rgba(109,158,197,0.15), 0 0 0 2px #F2A7B4",
              border: "1px solid #F2A7B4"
            }}
          >
            <DiscordIcon size={16} className="mr-1" />
            Join Discord
          </a>
        </div>
      </div>
      {/* Discord Widget Embed */}
      <div className="mt-8 flex justify-center w-full">
        <iframe
          title="Hexra Discord"
          src={`https://discord.com/widget?id=${DISCORD_WIDGET_ID}&theme=dark`}
          width="350"
          height="180"
          allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          style={{
            borderRadius: "1rem",
            background: "#1E2233",
            border: "2px solid #A0789C"
          }}
        ></iframe>
      </div>
      {/* Neon accent bar (Sunset Pink) */}
      <div
        style={{
          margin: "2.5rem auto 0",
          height: "4px",
          width: "40%",
          background:
            "linear-gradient(90deg, #F2A7B4, #6D9EC5 50%, #A0789C)",
          borderRadius: "2px",
          boxShadow: "0 0 8px #F2A7B4, 0 0 16px #A0789C88"
        }}
      />
    </footer>
  );
};

export default Footer;
