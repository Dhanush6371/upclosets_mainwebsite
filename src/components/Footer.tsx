import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useRouter } from '../utils/router';

export default function Footer() {
  const { navigate } = useRouter();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Catalog', path: '/gallery' },
    { label: 'Process', path: '/process' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-dark-text text-white">
      <div className="container-custom mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">UpClosets of NOVA</h3>
            <p className="text-gray-300 leading-relaxed">
              Transforming spaces with custom closet solutions designed for beauty and built for
              function. Experience premium craftsmanship and personalized service.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors"
              >
                <Phone size={20} />
                <span>(555) 123-4567</span>
              </a>
              <a
                href="mailto:info@upclosetsofnova.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors"
              >
                <Mail size={20} />
                <span>info@upclosetsofnova.com</span>
              </a>
              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-gold transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-gold transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 UpClosets of NOVA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
