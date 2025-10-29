import { Users, Sparkles, CheckCircle, Award, Shield, Clock, ThumbsUp, Star } from 'lucide-react';
import { useRouter } from '../utils/router';

export default function Process() {
  const { navigate } = useRouter();

  const steps = [
    {
      icon: <Users size={48} />,
      title: 'Consultation',
      description:
        'We begin with a thorough consultation to understand your vision, lifestyle, and storage needs. Our design experts visit your home to take precise measurements and discuss your preferences for materials, colors, and functionality.',
      details: [
        'In-home or virtual consultation available',
        'Detailed space measurements',
        'Discussion of design preferences',
        'Budget planning and timeline',
      ],
    },
    {
      icon: <Sparkles size={48} />,
      title: 'Design',
      description:
        'Our talented designers create stunning 3D visualizations of your custom closet, allowing you to see exactly how your space will transform. We work collaboratively, making adjustments until the design is perfect.',
      details: [
        '3D rendering and visualization',
        'Interactive design modifications',
        'Material and finish selection',
        'Detailed project specifications',
      ],
    },
    {
      icon: <CheckCircle size={48} />,
      title: 'Personalization',
      description:
        'Choose from our premium selection of finishes, hardware, lighting options, and accessories. Every detail is customizable to match your style and enhance functionality.',
      details: [
        'Wood finishes and colors',
        'Hardware and handle styles',
        'Lighting integration options',
        'Accessories and organizers',
      ],
    },
    {
      icon: <Award size={48} />,
      title: 'Installation',
      description:
        'Our expert installation team brings your design to life with precision and care. We ensure every component is perfectly installed, leaving you with a flawless custom closet that exceeds expectations.',
      details: [
        'Professional installation team',
        'Quality inspection throughout',
        'Minimal disruption to your home',
        'Final walkthrough and approval',
      ],
    },
  ];

  const qualityPoints = [
    {
      icon: <Star size={32} />,
      title: '100% Custom Design',
      description: 'Every project is uniquely tailored to your space and needs',
    },
    {
      icon: <Shield size={32} />,
      title: 'Premium Materials',
      description: 'We use only the highest quality materials and finishes',
    },
    {
      icon: <Award size={32} />,
      title: 'Professional Installation',
      description: 'Expert craftsmen ensure flawless execution',
    },
    {
      icon: <ThumbsUp size={32} />,
      title: 'Warranty & Support',
      description: 'Comprehensive warranty and ongoing customer service',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">OUR PROCESS</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Seamless, transparent, and crafted around you
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
              Four Steps to Your Dream Closet
            </h2>
            <p className="text-xl text-gray-600">
              From initial vision to final installation, we guide you every step of the way
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gold text-white rounded-full mb-6">
                    {step.icon}
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-6xl font-bold text-gray-200">0{index + 1}</span>
                    <h3 className="text-3xl font-bold text-dark-text">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-gold mt-1">✓</span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-96 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src={`https://images.pexels.com/photos/${
                      [1643383, 6585757, 2079246, 1090638][index]
                    }/pexels-photo-${
                      [1643383, 6585757, 2079246, 1090638][index]
                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={step.title}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-bg">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-text mb-4">
              Quality & Service Commitment
            </h2>
            <p className="text-xl text-gray-600">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold text-white rounded-full mb-6">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-text text-white text-center">
        <div className="container-custom mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Take the First Step — Schedule Your Free Consultation Today
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Let's discuss your vision and create a custom closet solution that transforms your space
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-gold text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
