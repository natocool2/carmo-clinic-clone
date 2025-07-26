import { Facebook } from "lucide-react";
const medicarmoLogo = "/lovable-uploads/27452384-a7dd-4f2a-bd60-8169eeaad545.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-8 border-b border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={medicarmoLogo}
                alt="Medicarmo"
                className="h-12 w-12"
              />
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://pt-pt.facebook.com/medicarmocentroclinico/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary hover:bg-primary-variant transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 text-center">
          <p className="text-sm text-background/80">
            Copyright © 2024 Medicarmo | Powered by{" "}
            <a
              href="https://about.cloudintec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background hover:text-white transition-colors"
            >
              EasyNetPro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;