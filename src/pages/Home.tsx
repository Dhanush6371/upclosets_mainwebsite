import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Sparkles, Users, Clock, Award, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { useRouter } from '../utils/router';

export default function Home() {
  const { navigate } = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon to schedule your consultation.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const services = [
    {
      title: 'Walk-in Closets',
      description: 'Luxury walk-in closets designed to maximize space and elevate your daily routine.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/walk-in-closets',
    },
    {
      title: 'Reach-in Closets',
      description: 'Smart organization solutions for compact spaces with maximum functionality.',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/reach-in-closets',
    },
    {
      title: 'Pantry Systems',
      description: 'Custom pantry designs that bring order and elegance to your kitchen storage.',
      image: 'https://images.pexels.com/photos/6489119/pexels-photo-6489119.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/kitchen-pantry',
    },
    {
      title: 'Garage & Office Storage',
      description: 'Professional organization systems for garages, offices, and specialty spaces.',
      image: 'https://images.pexels.com/photos/7034682/pexels-photo-7034682.jpeg?auto=compress&cs=tinysrgb&w=800',
      path: '/garages',
    },
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6489119/pexels-photo-6489119.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7034682/pexels-photo-7034682.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  const processSteps = [
    {
      icon: <Users size={32} />,
      title: 'Consultation',
      description: 'We discuss your vision, measure your space, and understand your unique needs.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Design',
      description: 'Our designers create 3D renderings bringing your custom closet to life.',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Personalization',
      description: 'Choose materials, finishes, hardware, and lighting to match your style.',
    },
    {
      icon: <Award size={32} />,
      title: 'Installation',
      description: 'Expert installation with meticulous attention to detail and quality.',
    },
  ];

  const values = [
    {
      icon: <Award size={32} />,
      title: 'Stress Free',
      description: 'We handle everything from design to installation—so you don\'t have to worry. No stress, no surprises—just beautiful, organized spaces made for your life.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Affordable Elegance',
      description: 'Everyone deserves a dream closet—without the high price. That\'s what we call affordable elegance. Style, comfort, and quality—made to fit your budget.',
    },
    {
      icon: <Users size={32} />,
      title: 'Empathetic & Respectful',
      description: 'Your home is personal, and we treat it that way. We listen to your needs, respect your space, and handle every step with care and attention.',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Kick Your Feet Up',
      description: 'Relax—we\'ve got it fully covered. We take care of every detail so you can enjoy watching your space come to life.',
    },
    {
      icon: <Clock size={32} />,
      title: 'Dare To Dream',
      description: 'We can\'t wait to help you create your dream closet! Don\'t be surprised if you end up saving us in your phone as closet bestie.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Stunning Spaces',
      description: 'Our sliding spaces are as functional as they are beautiful, bringing style and sophistication to every room.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className={`relative z-10 text-center text-white px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            TRANSFORM YOUR SPACE<br />WITH CUSTOM CLOSETS
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Designed for beauty, built for function.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Book Consultation
            </button>
            <button
              onClick={() => navigate('/gallery')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-dark-text transition-all"
            >
              View Catalog
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-text">
                About UpClosets of NOVA
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a premier custom closet design company dedicated to transforming ordinary
                spaces into extraordinary organizational masterpieces. With years of expertise in
                precision craftsmanship and architectural design, we create bespoke storage
                solutions that perfectly blend beauty with functionality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every project is a collaboration, tailored to your lifestyle, preferences, and
                space. From initial consultation to final installation, we ensure a seamless
                experience that exceeds expectations.
              </p>
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center space-x-2 text-gold font-semibold hover:underline"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="relative h-96 md:h-[500px]">
              <img
                src="https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Designer working on closet design"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-bg" data-reveal data-reveal-dir="left">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4" data-reveal data-reveal-split="words" data-reveal-alt>
              Our Custom Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored designs for every room in your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                data-reveal
                data-reveal-dir={index % 2 === 0 ? 'left' : 'right'}
                onClick={() => navigate(service.path)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-text mb-3 group-hover:text-gold transition-colors" data-reveal data-reveal-split="letters" data-reveal-alt>
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" data-reveal data-reveal-dir="up">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
              OUR <span className="text-gold" data-reveal data-reveal-split="letters" data-reveal-alt>VALUES</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're committed to making your closet experience easy, affordable, and personalized. With respect for your home and a focus on beautiful, functional design, we help you create stunning spaces that simplify and elevate your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all flex gap-6 items-start"
                data-reveal
                data-reveal-dir={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-[#2C5F7C] text-white rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-text mb-3" data-reveal data-reveal-split="words" data-reveal-alt>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
              Our Work Speaks for Itself
            </h2>
            <p className="text-xl text-gray-600">
              Browse our portfolio of stunning custom closet designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold">View Project</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/gallery')}
              className="bg-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              View Full Catalog
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-bg" data-reveal data-reveal-dir="up">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
              How Organization <span className="text-gold" data-reveal data-reveal-split="letters" data-reveal-alt>Works</span>
            </h2>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-[600px] h-[600px] max-w-full">
              {/* Center Circle with Logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#F4C361] to-[#E8A93A] rounded-full shadow-2xl flex flex-col items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-white mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                    Up Closets
                  </div>
                  <div className="text-xs tracking-widest text-white/90 uppercase mb-8">
                    Upgrade Your Space
                  </div>
                  <div className="text-[#2C5F7C] font-bold text-xl">
                    Northern Virginia
                  </div>
                </div>
              </div>

              {/* Floating Step Cards */}
              <div 
                className="absolute top-[10%] left-[-10%] bg-white px-6 py-4 rounded-xl shadow-xl"
                data-reveal
                data-reveal-dir="left"
              >
                <span className="text-[#2C5F7C] font-bold text-lg">1. Consultation</span>
              </div>

              <div 
                className="absolute top-[25%] right-[-5%] bg-white px-6 py-4 rounded-xl shadow-xl"
                data-reveal
                data-reveal-dir="right"
              >
                <span className="text-[#2C5F7C] font-bold text-lg">2. Custom Design</span>
              </div>

              <div 
                className="absolute bottom-[35%] left-[-15%] bg-white px-6 py-4 rounded-xl shadow-xl"
                data-reveal
                data-reveal-dir="left"
              >
                <span className="text-[#2C5F7C] font-bold text-lg">3. Personalisation</span>
              </div>

              <div 
                className="absolute bottom-[15%] right-[0%] bg-white px-6 py-4 rounded-xl shadow-xl"
                data-reveal
                data-reveal-dir="right"
              >
                <span className="text-[#2C5F7C] font-bold text-lg">4. Installation</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/process')}
              className="inline-flex items-center space-x-2 text-gold font-semibold text-lg hover:underline"
            >
              <span>Learn More About Our Process</span>
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" data-reveal data-reveal-dir="left">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-1 bg-gold mb-4"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
                Why Choose <span className="text-gold" data-reveal data-reveal-split="words" data-reveal-alt>Up Closets</span>?
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4" data-reveal data-reveal-dir="left">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-text mb-2">Personalized Designs</h3>
                    <p className="text-gray-600">
                      Every project starts with understanding your unique needs, style, and budget.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4" data-reveal data-reveal-dir="left">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-text mb-2">High-Quality Materials</h3>
                    <p className="text-gray-600">
                      We use durable materials that look stunning and stand the test of time.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4" data-reveal data-reveal-dir="left">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-text mb-2">Expert Craftsmanship</h3>
                    <p className="text-gray-600">
                      Our team of skilled designers and installers delivers flawless results, every time.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4" data-reveal data-reveal-dir="left">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-text mb-2">Local Expertise</h3>
                    <p className="text-gray-600">
                      As a local, minority-owned business, we're proud to serve homeowners in Nova region counties with exceptional care and attention to detail.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div 
                className="relative h-80 overflow-hidden rounded-lg shadow-xl"
                data-reveal
                data-reveal-dir="right"
              >
                <img
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Custom closet design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="relative h-80 overflow-hidden rounded-lg shadow-xl mt-12"
                data-reveal
                data-reveal-dir="right"
              >
                <img
                  src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Organized closet space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-50 to-white" data-reveal data-reveal-dir="up">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
              Schedule Your <span className="text-gold" data-reveal data-reveal-split="words" data-reveal-alt>Free Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your space? Fill out the form below and our team will contact you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div data-reveal data-reveal-dir="left">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-dark-text mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Phone className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text mb-1">Phone</h4>
                      <a href="tel:+17037839581" className="text-gray-600 hover:text-gold">
                        +1-(703)783-9581
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Mail className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text mb-1">Email</h4>
                      <a href="mailto:lbotla@upclosets.com" className="text-gray-600 hover:text-gold">
                        Lbotla@upclosets.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text mb-1">Service Area</h4>
                      <p className="text-gray-600">Northern Virginia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Clock className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text mb-1">Business Hours</h4>
                      <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl">
                  <h4 className="font-bold text-dark-text mb-2">Why Book With Us?</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-gold flex-shrink-0" />
                      Free in-home or virtual consultation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-gold flex-shrink-0" />
                      3D design visualization included
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-gold flex-shrink-0" />
                      No obligation, transparent pricing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-gold flex-shrink-0" />
                      Same-day response guaranteed
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div data-reveal data-reveal-dir="right">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-dark-text font-semibold mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-dark-text font-semibold mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-dark-text font-semibold mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="(703) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-dark-text font-semibold mb-2">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="walk-in-closets">Walk-in Closets</option>
                      <option value="reach-in-closets">Reach-in Closets</option>
                      <option value="office-room">Office Room</option>
                      <option value="hobby-room">Hobby Room</option>
                      <option value="mud-room">Mud Room</option>
                      <option value="laundry-room">Laundry Room</option>
                      <option value="kitchen-pantry">Kitchen Pantry</option>
                      <option value="garages">Garages</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-dark-text font-semibold mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                      rows={4}
                      placeholder="Share details about your space, timeline, or any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <Calendar size={20} />
                    <span>Schedule My Consultation</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by our team regarding your consultation.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-text text-white text-center">
        <div className="container-custom mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Dream Closet?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's bring your vision to life with our expert design team
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-gold text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-gold/50"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
