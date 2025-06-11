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
                <Link to="/about" className="text-neutral-dark hover:text-pink-medium transition-colors">
                  {t('nav.about')}
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
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.tiktok.com/@montremoilhistoire"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiktok"
                className="hover:scale-110 transition"
              >
                <img src="/icons/tiktok.svg" alt="Tiktok" className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@MontremoilHistoire/?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="hover:scale-110 transition"
              >
                <img src="/icons/youtube.svg" alt="Youtube" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/montremoilhistoire/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 transition"
              >
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
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
