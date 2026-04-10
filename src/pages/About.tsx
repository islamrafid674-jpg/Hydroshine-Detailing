import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-light mb-6">About Hydroshine</h1>
            <p className="text-xl text-brand-metallic mb-8 font-light leading-relaxed">
              Hydroshine Detailing provides premium mobile detailing services focused on delivering high-quality results with convenience and care.
            </p>
            <div className="space-y-6 text-brand-metallic">
              <p>
                Founded on the principle that luxury car care shouldn't require sacrificing your entire day, we built a fully mobile operation that brings the detailing studio directly to your driveway or office parking lot.
              </p>
              <p>
                Our team consists of trained professionals who treat every vehicle as if it were their own. We use only the highest quality products, spot-free water, and proven techniques to ensure your vehicle not only looks stunning but is protected for the road ahead.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000" 
                alt="Detailing professional at work" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-brand-gray p-8 rounded-2xl border border-white/10 hidden md:block">
              <div className="text-4xl font-display font-light mb-2">5+</div>
              <div className="text-sm text-brand-metallic uppercase tracking-widest">Years of<br/>Excellence</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-gray py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">Our Core Values</h2>
            <p className="text-brand-metallic max-w-2xl mx-auto">The principles that guide every detail we perform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full border border-white/20 flex items-center justify-center mb-6 bg-brand-black">
                <MapPin className="w-6 h-6 text-brand-silver" />
              </div>
              <h3 className="text-xl font-display mb-4">Mobile Convenience</h3>
              <p className="text-brand-metallic text-sm leading-relaxed">
                We believe premium service means coming to you. We eliminate the hassle of drop-offs and waiting rooms.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full border border-white/20 flex items-center justify-center mb-6 bg-brand-black">
                <Shield className="w-6 h-6 text-brand-silver" />
              </div>
              <h3 className="text-xl font-display mb-4">Attention to Detail</h3>
              <p className="text-brand-metallic text-sm leading-relaxed">
                We don't cut corners. Every crevice, surface, and panel receives meticulous care and the right products.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full border border-white/20 flex items-center justify-center mb-6 bg-brand-black">
                <Clock className="w-6 h-6 text-brand-silver" />
              </div>
              <h3 className="text-xl font-display mb-4">Consistency</h3>
              <p className="text-brand-metallic text-sm leading-relaxed">
                Our standard operating procedures ensure that whether it's your first detail or your tenth, the results are always stellar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-light mb-8">Experience the Difference</h2>
        <p className="text-brand-metallic mb-10">Join hundreds of satisfied clients who trust us with their vehicles.</p>
        <Link 
          to="/contact" 
          className="inline-flex items-center space-x-2 px-10 py-4 bg-white text-black rounded-full font-medium uppercase tracking-widest text-sm hover:bg-brand-silver transition-colors"
        >
          <span>Book Your Appointment</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
