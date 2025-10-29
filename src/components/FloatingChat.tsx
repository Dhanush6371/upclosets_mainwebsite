import { useState } from 'react';
import { MessageCircle, X, Send, Mic, Image as ImageIcon, Package } from 'lucide-react';
import { useRouter } from '../utils/router';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { navigate } = useRouter();

  const quickActions = [
    {
      icon: <Send size={18} />,
      label: 'Consultation',
      action: () => navigate('/contact'),
    },
    {
      icon: <ImageIcon size={18} />,
      label: 'Catalog',
      action: () => navigate('/gallery'),
    },
    {
      icon: <Package size={18} />,
      label: 'Track Order',
      action: () => navigate('/track-order'),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden animate-slide-up">
          <div className="bg-gold text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">UpClosets Assistant</h3>
              <p className="text-sm opacity-90">How can I help you today?</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto bg-light-bg">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm text-dark-text">
                  Welcome to UpClosets of NOVA! How can we assist you with your custom closet
                  project today?
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white border-t">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => {
                    action.action();
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-2 bg-light-bg hover:bg-gold hover:text-white text-dark-text px-3 py-2 rounded-full text-sm font-medium transition-all"
                >
                  {action.icon}
                  <span>{action.label}</span>
                </button>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                <Send size={20} />
              </button>
              <button className="bg-light-bg text-dark-text p-2 rounded-full hover:bg-gold hover:text-white transition-colors">
                <Mic size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-gold border-2 border-gold rounded-full p-4 shadow-2xl hover:shadow-gold/50 hover:scale-110 transition-all duration-300 animate-pulse-soft"
        >
          <MessageCircle size={32} />
        </button>
      )}
    </div>
  );
}
