
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-light border-t border-neutral-medium">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div>
            <h3 className="text-xl font-handwriting font-bold text-pink-medium mb-4">
              Montre-moi l'Histoire
            </h3>
            <p className="text-neutral-dark mb-4">
              © {currentYear} Montre-moi l'Histoire. {t('footer.rights')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-dark hover:text-pink-medium transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-neutral-dark hover:text-pink-medium transition-colors">
                  {t('nav.tours')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-dark hover:text-pink-medium transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-dark hover:text-pink-medium transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-dark hover:text-pink-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-dark hover:text-pink-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-dark hover:text-pink-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-dark hover:text-pink-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"></path>
                  <path d="M15 8c0 1.657-1.343 3-3 3"></path>
                  <path d="M20 6c-1.657 0-3-1.343-3-3"></path>
                  <path d="M20 6v8"></path>
                  <path d="M12 11V3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-4 border-t border-neutral-medium text-sm text-center">
          <Link to="/legal" className="text-neutral-dark hover:text-pink-medium mx-2">
            {t('footer.legal')}
          </Link>
          <span className="mx-2 text-neutral-dark">|</span>
          <Link to="/privacy" className="text-neutral-dark hover:text-pink-medium mx-2">
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
