import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useRouter } from '../utils/router';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Closets',
    dropdown: [
      { label: 'Walk-in Closets', path: '/walk-in-closets' },
      { label: 'Reach-in Closets', path: '/reach-in-closets' },
      { label: 'Office Room', path: '/office-room' },
      { label: 'Hobby Room', path: '/hobby-room' },
      { label: 'Mud Room', path: '/mud-room' },
      { label: 'Laundry Room', path: '/laundry-room' },
      { label: 'Kitchen Pantry', path: '/kitchen-pantry' },
      { label: 'Garages', path: '/garages' },
    ],
  },
  { label: 'Work Culture', path: '/process' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Closet Catalog', path: '/gallery' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { currentPath, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path?: string) => {
    if (path) {
      navigate(path);
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${
      isScrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      {/* Top bar: logo + contact + CTA */}
      <div className="container-custom mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => handleNavClick('/')} className="text-left">
            <div className="text-2xl font-extrabold text-dark-text leading-tight">
              Up Closets
            </div>
            <div className="text-xs tracking-widest text-gray-500 uppercase">
              Upgrade Your Space
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a href="tel:+17037839581" className="flex items-center space-x-2 text-primary">
              <span className="text-gold"><Phone size={20} /></span>
              <span className="text-dark-text font-semibold">+1-(703)783-9581</span>
            </a>
            <a href="mailto:lbotla@upclosets.com" className="flex items-center space-x-2">
              <span className="text-gold"><Mail size={20} /></span>
              <span className="text-dark-text font-semibold">Lbotla@upclosets.com</span>
            </a>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleNavClick('/track-order')}
                className="border-2 border-gold text-gold px-6 py-3 rounded-full font-semibold hover:bg-gold hover:text-white transition-all shadow-md"
              >
                Track Order
              </button>
              <button
                onClick={() => handleNavClick('/contact')}
                className="bg-gold text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 shadow-lg"
              >
                Lets Get Started
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-dark-text"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Bottom bar: navigation + socials */}
      <div className="border-t border-gray-100">
        <div className="container-custom mx-auto px-6">
          <div className="hidden lg:flex items-center justify-between h-14">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                >
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center space-x-1 font-medium text-dark-text hover:text-gold">
                        <span>{item.label}</span>
                        <ChevronDown size={16} />
                      </button>
                      {activeDropdown === item.label && (
                        <div 
                          className="absolute top-full left-0 pt-2 w-56 z-50"
                        >
                          <div className="bg-white shadow-lg rounded-lg py-2">
                            {item.dropdown.map((dropdownItem) => (
                              <button
                                key={dropdownItem.path}
                                onClick={() => handleNavClick(dropdownItem.path)}
                                className={`block w-full text-left px-4 py-2 text-dark-text hover:bg-gold hover:text-white transition-colors ${
                                  currentPath === dropdownItem.path ? 'font-bold text-gold' : ''
                                }`}
                              >
                                {dropdownItem.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`font-medium transition-colors ${
                        currentPath === item.path
                          ? 'text-gold font-bold'
                          : 'text-dark-text hover:text-gold'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex items-center space-x-3 text-dark-text">
              <span className="text-gold font-semibold mr-1">Follow Us :</span>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-[#1877F2] text-white"><Facebook size={16} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-[#0A66C2] text-white"><Linkedin size={16} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-[#E1306C] text-white"><Instagram size={16} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-[#FF0000] text-white"><Youtube size={16} /></a>
            </div>
          </div>

          {/* Mobile dropdown content */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4">
              <div className="space-y-4">
                <a href="tel:+17037839581" className="flex items-center space-x-2 text-dark-text">
                  <span className="text-gold"><Phone size={18} /></span>
                  <span className="font-medium">+1-(703)783-9581</span>
                </a>
                <a href="mailto:lbotla@upclosets.com" className="flex items-center space-x-2 text-dark-text">
                  <span className="text-gold"><Mail size={18} /></span>
                  <span className="font-medium">Lbotla@upclosets.com</span>
                </a>
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={() => handleNavClick('/track-order')}
                    className="w-full border-2 border-gold text-gold px-6 py-3 rounded-full font-semibold hover:bg-gold hover:text-white transition-all"
                  >
                    Track Order
                  </button>
                  <button
                    onClick={() => handleNavClick('/contact')}
                    className="w-full bg-gold text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90"
                  >
                    Lets Get Started
                  </button>
                </div>
              </div>

              <nav className="mt-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveDropdown(activeDropdown === item.label ? null : item.label)
                          }
                          className="flex items-center justify-between w-full text-dark-text font-medium py-2"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="pl-4 space-y-2 mt-2">
                            {item.dropdown.map((dropdownItem) => (
                              <button
                                key={dropdownItem.path}
                                onClick={() => handleNavClick(dropdownItem.path)}
                                className="block w-full text-left py-2 text-dark-text hover:text-gold"
                              >
                                {dropdownItem.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.path)}
                        className={`block w-full text-left py-2 ${
                          currentPath === item.path
                            ? 'text-gold font-bold'
                            : 'text-dark-text hover:text-gold'
                        }`}
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-6 flex items-center space-x-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-[#1877F2] text-white"><Facebook size={16} /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-[#0A66C2] text-white"><Linkedin size={16} /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-[#E1306C] text-white"><Instagram size={16} /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-[#FF0000] text-white"><Youtube size={16} /></a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
