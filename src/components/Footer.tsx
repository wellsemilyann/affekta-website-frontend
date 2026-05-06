import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import nasaLogo from 'figma:asset/48cd9513c05ba6d64a325decfb22d8f92405a48f.png';
import iCorpsLogo from 'figma:asset/05cde95de9a47c905de30ee81fdf453436cd4d66.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f5f7] border-t border-border/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2 bg-gray-200 p-8 rounded-2xl border border-gray-200/50">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-12" />
              <div className="text-sm">
              </div>
            </div>
            <div className="space-y-3 mb-4">
              {/* NASA Partnership */}
              <div className="flex items-center gap-3">
                <img 
                  src={nasaLogo} 
                  alt="NASA" 
                  className="h-10"
                  style={{
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.1)'
                  }}
                />
                <div className="text-sm">
                  <p>NASA STTR Phase I</p>
                  <p className="text-xs">T6.09-1000</p>
                </div>
              </div>
              
              {/* I-Corps Partnership */}
              <div className="flex items-center gap-3">
                <img 
                  src={iCorpsLogo} 
                  alt="NSF I-Corps" 
                  className="h-10"
                  style={{
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.1)'
                  }}
                />
                <div className="text-sm">
                  <p>NSF I-Corps</p>
                  <p className="text-xs">Selected 2025</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors text-[rgb(255,255,255)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors text-[rgb(255,255,255)]"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors text-[rgb(255,255,255)]"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@affekta.com" 
                className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors text-[rgb(255,253,253)]"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/technology"
                  className="hover:text-primary transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link 
                  to="/industries"
                  className="hover:text-primary transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link 
                  to="/icorps"
                  className="hover:text-primary transition-colors"
                >
                  I-Corps
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/engagement"
                  className="hover:text-primary transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:info@affekta.com"
                  className="hover:text-primary transition-colors"
                >
                  info@affekta.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} AFFEKTA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
