import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    service: preselectedService,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleType: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="w-full pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-light mb-6">Book Your Detail</h1>
          <p className="text-xl text-brand-metallic max-w-2xl mx-auto font-light">
            Ready for a showroom finish? Fill out the form below and we'll contact you to confirm your appointment.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-display mb-6">Contact Information</h3>
              <p className="text-brand-metallic mb-8">
                Have questions before booking? Reach out to us directly. We typically respond within 2 hours during business hours.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-silver" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-brand-silver mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-lg hover:text-brand-silver transition-colors">(555) 123-4567</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-silver" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-brand-silver mb-1">Email</h4>
                  <a href="mailto:hello@hydroshinedetailing.com" className="text-lg hover:text-brand-silver transition-colors">hello@hydroshinedetailing.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-silver" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-brand-silver mb-1">Service Area</h4>
                  <p className="text-lg">Los Angeles & Surrounding Areas</p>
                  <p className="text-sm text-brand-metallic mt-1">We come to your home or office.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-silver" />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-brand-silver mb-1">Hours</h4>
                  <p className="text-lg">Mon - Sat: 8am - 6pm</p>
                  <p className="text-sm text-brand-metallic mt-1">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 bg-brand-gray p-8 md:p-12 rounded-2xl border border-white/10"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-display mb-4">Request Received</h3>
                <p className="text-brand-metallic mb-8">
                  Thank you for choosing Hydroshine. We'll be in touch shortly to confirm your appointment details.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 border border-white/30 rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-brand-silver">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-brand-silver">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-brand-silver">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="vehicleType" className="text-xs uppercase tracking-widest text-brand-silver">Vehicle Make & Model</label>
                    <input 
                      type="text" 
                      id="vehicleType" 
                      name="vehicleType"
                      required
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="e.g. Tesla Model 3"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs uppercase tracking-widest text-brand-silver">Service Requested</label>
                    <select 
                      id="service" 
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors appearance-none"
                    >
                      <option value="" disabled>Select a package</option>
                      <option value="exterior">Exterior Detailing</option>
                      <option value="interior">Interior Detailing</option>
                      <option value="full">Full Detail Package</option>
                      <option value="custom">Custom / Not Sure</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-brand-silver">Additional Details (Optional)</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors resize-none"
                    placeholder="Any specific areas of concern or preferred dates?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-4 rounded-full font-medium uppercase tracking-widest text-sm hover:bg-brand-silver transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Request...' : 'Book Mobile Detail'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
