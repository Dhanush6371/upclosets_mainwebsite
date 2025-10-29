import { useState } from 'react';
import { Search, Package, Truck, Wrench, CheckCircle } from 'lucide-react';

export default function TrackOrder() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [trackingResult, setTrackingResult] = useState<number | null>(null);

  const stages = [
    { icon: <Package size={32} />, title: 'Processing', description: 'Order received and confirmed' },
    { icon: <Wrench size={32} />, title: 'Manufacturing', description: 'Custom closet being built' },
    { icon: <Truck size={32} />, title: 'Delivery', description: 'En route to your location' },
    { icon: <Wrench size={32} />, title: 'Installation', description: 'Professional installation' },
    { icon: <CheckCircle size={32} />, title: 'Completed', description: 'Project finished' },
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const randomStage = Math.floor(Math.random() * stages.length);
    setTrackingResult(randomStage);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">TRACK YOUR INSTALLATION</h1>
          <p className="text-xl md:text-2xl font-light">
            Stay updated on your custom closet project status
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="bg-light-bg p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-dark-text mb-6 text-center">
              Enter Your Order Details
            </h2>

            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label className="block text-dark-text font-semibold mb-2">Order Number</label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g., UC2025-1234"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                  required
                />
              </div>

              <div>
                <label className="block text-dark-text font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
              >
                <Search size={20} />
                <span>Track My Order</span>
              </button>
            </form>
          </div>

          {trackingResult !== null && (
            <div className="mt-12 animate-fade-in">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-dark-text mb-8 text-center">
                  Order Status: {stages[trackingResult].title}
                </h3>

                <div className="relative">
                  <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300">
                    <div
                      className="h-full bg-gold transition-all duration-1000"
                      style={{ width: `${(trackingResult / (stages.length - 1)) * 100}%` }}
                    ></div>
                  </div>

                  <div className="relative grid grid-cols-5 gap-4">
                    {stages.map((stage, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all ${
                            index <= trackingResult
                              ? 'bg-gold text-white shadow-lg scale-110'
                              : 'bg-gray-300 text-gray-500'
                          }`}
                        >
                          {stage.icon}
                        </div>
                        <h4
                          className={`font-bold text-sm text-center mb-1 ${
                            index <= trackingResult ? 'text-gold' : 'text-gray-500'
                          }`}
                        >
                          {stage.title}
                        </h4>
                        <p className="text-xs text-gray-600 text-center hidden md:block">
                          {stage.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-6 bg-light-bg rounded-lg">
                  <p className="text-center text-dark-text">
                    <strong>Current Status:</strong> {stages[trackingResult].description}
                  </p>
                  {trackingResult < stages.length - 1 && (
                    <p className="text-center text-gray-600 mt-2">
                      Next Step: {stages[trackingResult + 1].title}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-light-bg text-center">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-dark-text mb-4">Need Assistance?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Our customer service team is here to help with any questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Call Customer Service
            </a>
            <a
              href="mailto:support@upclosetsofnova.com"
              className="bg-dark-text text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
