import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect((): (() => void) => {
    const sectionIds: string[] = navLinks.map((l: NavLink): string => l.href.slice(1));

    const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id: string): void => {
      const el: HTMLElement | null = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return (): void => observer.disconnect();
  }, []);

  const handleLinkClick: () => void = (): void => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / name */}
        <a
          href="#hero"
          className="text-white font-bold text-sm sm:text-base tracking-tight hover:text-blue-300 transition-colors"
        >
          Matthew Smith
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              className={[
                'text-sm font-medium px-3 py-1.5 rounded transition-colors',
                activeSection === link.href.slice(1)
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10',
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-sm font-semibold px-4 py-1.5 rounded border border-white/30 text-white hover:bg-white hover:text-navy transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={(): void => setMenuOpen((o: boolean): boolean => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-navy border-t border-white/10 px-6 pb-4 flex flex-col gap-1">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={[
                'text-sm font-medium px-3 py-2 rounded transition-colors',
                activeSection === link.href.slice(1)
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10',
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="mt-2 text-sm font-semibold px-3 py-2 rounded border border-white/30 text-white text-center hover:bg-white hover:text-navy transition-colors"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
