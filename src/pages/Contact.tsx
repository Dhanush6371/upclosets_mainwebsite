import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">GET IN TOUCH WITH US</h1>
          <p className="text-xl md:text-2xl font-light">
            Let's discuss your custom closet project
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-dark-text mb-6">
                Schedule Your Free Consultation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our design experts will contact you to schedule your
                complimentary in-home or virtual consultation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-dark-text font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                    required
                  />
                </div>

                <div>
                  <label className="block text-dark-text font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                    required
                  />
                </div>

                <div>
                  <label className="block text-dark-text font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                    required
                  />
                </div>

                <div>
                  <label className="block text-dark-text font-semibold mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            <div>
              <div className="bg-light-bg p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-dark-text mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-gold mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-dark-text mb-1">Phone</h4>
                      <a href="tel:+15551234567" className="text-gray-600 hover:text-gold">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-gold mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-dark-text mb-1">Email</h4>
                      <a
                        href="mailto:info@upclosetsofnova.com"
                        className="text-gray-600 hover:text-gold"
                      >
                        info@upclosetsofnova.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-gold mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-dark-text mb-1">Showroom Address</h4>
                      <p className="text-gray-600">
                        123 Design Avenue
                        <br />
                        Northern Virginia, VA 22102
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-gold mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-dark-text mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.542796612796!2d-77.18126968464798!3d38.94074597956891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64ea4ca5b7b31%3A0x9d1b3c3f3d3f3d3f!2sNorthern%20Virginia!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-bg text-center">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-dark-text mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Give us a call now or visit our showroom to see our work firsthand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Call Now
            </a>
            <a
              href="mailto:info@upclosetsofnova.com"
              className="bg-dark-text text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
