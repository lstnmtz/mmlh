import React, { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToursMenuOpen, setIsToursMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toursMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/tours', label: t('nav.tours') },
    { to: '/faq', label: t('nav.faq') },
    { to: '/testimonials', label: t('nav.testimonials') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-95 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-handwriting font-bold text-pink-medium">
            Montre-moi l'Histoire
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.to === '/tours' ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => {
                  if (toursMenuTimeout.current) clearTimeout(toursMenuTimeout.current);
                  setIsToursMenuOpen(true);
                }}
                onMouseLeave={() => {
                  toursMenuTimeout.current = setTimeout(() => setIsToursMenuOpen(false), 200);
                }}
              >
                <span
                  className={
                    location.pathname === '/tours'
                      ? 'text-pink-medium font-semibold transition-colors cursor-pointer'
                      : 'text-neutral-dark hover:text-pink-medium transition-colors cursor-pointer'
                  }
                >
                  {link.label}
                </span>
                {isToursMenuOpen && (
                  <div
                    className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-50"
                    onMouseEnter={() => {
                      if (toursMenuTimeout.current) clearTimeout(toursMenuTimeout.current);
                      setIsToursMenuOpen(true);
                    }}
                    onMouseLeave={() => {
                      toursMenuTimeout.current = setTimeout(() => setIsToursMenuOpen(false), 200);
                    }}
                  >
                    {['Troyes', 'Reims', 'Langres'].map((city) => (
                      <button
                        key={city}
                        type="button"
                        className="block w-full text-left px-4 py-2 text-neutral-dark hover:bg-pink-light/20 hover:text-pink-medium transition-colors"
                        onClick={() => {
                          setIsToursMenuOpen(false);
                          navigate('/tours', { state: { city } });
                        }}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={
                  location.pathname === link.to
                    ? 'text-pink-medium font-semibold transition-colors'
                    : 'text-neutral-dark hover:text-pink-medium transition-colors'
                }
              >
                {link.label}
              </Link>
            )
          )}
          <LanguageSelector />
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <LanguageSelector />
          <button
            onClick={toggleMenu}
            className="ml-4 p-2 text-neutral-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white animate-slide-in">
          <div className="container mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={
                  location.pathname === link.to
                    ? 'block py-3 text-pink-medium font-semibold transition-colors'
                    : 'block py-3 text-neutral-dark hover:text-pink-medium transition-colors'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
