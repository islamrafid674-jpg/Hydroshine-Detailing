import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury car detailing" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center space-x-2 border border-white/20 rounded-full px-4 py-1.5 bg-black/30 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-silver animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-brand-silver">Mobile Luxury Convenience Service</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight mb-6 leading-tight"
          >
            Premium Mobile <br/><span className="font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-silver to-brand-metallic">Auto Detailing</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-brand-metallic max-w-2xl mb-10 font-light"
          >
            Showroom results delivered directly to your doorstep. We bring professional-grade equipment and meticulous care to you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-black rounded-full font-medium uppercase tracking-widest text-sm hover:bg-brand-silver transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Book Your Detail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border border-white/30 text-white rounded-full font-medium uppercase tracking-widest text-sm hover:bg-white/10 transition-colors w-full sm:w-auto justify-center flex"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">The Mobile Advantage</h2>
            <p className="text-brand-metallic max-w-2xl mx-auto">Experience the ultimate convenience without compromising on quality.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "We Come To You", desc: "Home or office, we bring our fully-equipped mobile detailing unit to your location." },
              { icon: Clock, title: "Save Your Time", desc: "No waiting in lines or dropping off your vehicle. Continue your day while we work." },
              { icon: Shield, title: "Premium Quality", desc: "We use only professional-grade products and techniques for a flawless finish." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 border border-white/10 rounded-2xl bg-brand-gray/50 hover:bg-brand-gray transition-colors"
              >
                <feature.icon className="w-10 h-10 text-brand-silver mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-display mb-3">{feature.title}</h3>
                <p className="text-brand-metallic text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-light mb-4">Our Services</h2>
              <p className="text-brand-metallic max-w-xl">Comprehensive detailing packages tailored to restore and protect your vehicle.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center space-x-2 text-sm uppercase tracking-widest text-brand-silver hover:text-white transition-colors border-b border-brand-silver/30 pb-1 hover:border-white">
              <span>All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                alt="Exterior Detailing" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="text-3xl font-display mb-2">Exterior Detailing</h3>
                <p className="text-brand-metallic mb-6 max-w-md">Meticulous hand wash, paint decontamination, and premium shine enhancement.</p>
                <ul className="space-y-2 mb-8">
                  {['Two-bucket hand wash', 'Clay bar treatment', 'Premium wax/sealant'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-brand-silver">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest text-white">
                  <span>Explore Exterior</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=1000" 
                alt="Interior Detailing" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="text-3xl font-display mb-2">Interior Detailing</h3>
                <p className="text-brand-metallic mb-6 max-w-md">Deep cleaning, vacuuming, and restoration of all interior surfaces.</p>
                <ul className="space-y-2 mb-8">
                  {['Deep vacuum & extraction', 'Leather clean & condition', 'UV protection dressing'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-brand-silver">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest text-white">
                  <span>Explore Interior</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:hidden flex justify-center">
            <Link to="/services" className="px-8 py-4 border border-white/30 text-white rounded-full font-medium uppercase tracking-widest text-sm hover:bg-white/10 transition-colors w-full text-center">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Highlights */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">Transformations</h2>
            <p className="text-brand-metallic max-w-2xl mx-auto">See the difference our premium detailing can make.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full relative border-r-2 border-white">
                  <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" alt="Before" className="absolute inset-0 w-[200%] max-w-none h-full object-cover grayscale opacity-60" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs uppercase tracking-widest">Before</div>
                </div>
                <div className="w-1/2 h-full relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" alt="After" className="absolute inset-0 w-[200%] max-w-none h-full object-cover -translate-x-1/2" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-brand-silver/90 text-black px-3 py-1 rounded text-xs uppercase tracking-widest font-medium">After</div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full relative border-r-2 border-white">
                  <img src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=800" alt="Before" className="absolute inset-0 w-[200%] max-w-none h-full object-cover grayscale opacity-60" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs uppercase tracking-widest">Before</div>
                </div>
                <div className="w-1/2 h-full relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=800" alt="After" className="absolute inset-0 w-[200%] max-w-none h-full object-cover -translate-x-1/2" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-brand-silver/90 text-black px-3 py-1 rounded text-xs uppercase tracking-widest font-medium">After</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/gallery" className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest text-brand-silver hover:text-white transition-colors border-b border-brand-silver/30 pb-1 hover:border-white">
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-24 bg-brand-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-light mb-6">Why Choose Hydroshine?</h2>
              <div className="space-y-8">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-brand-silver" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Reliable Scheduling</h4>
                    <p className="text-brand-metallic text-sm leading-relaxed">We respect your time. Our booking process is simple, and we arrive punctually at your scheduled time.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-brand-silver" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Professional Equipment</h4>
                    <p className="text-brand-metallic text-sm leading-relaxed">Our mobile units are fully equipped with spot-free water systems, generators, and top-tier detailing products.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-brand-silver" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Consistent Results</h4>
                    <p className="text-brand-metallic text-sm leading-relaxed">We follow a strict standard operating procedure for every vehicle to ensure a showroom-level finish every time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional detailing" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-gray p-8 rounded-2xl border border-white/10 hidden md:block">
                <div className="text-4xl font-display font-light mb-2">100%</div>
                <div className="text-sm text-brand-metallic uppercase tracking-widest">Satisfaction<br/>Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=2000" 
            alt="Dark car texture" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-light mb-6">Ready for a Showroom Finish?</h2>
          <p className="text-xl text-brand-metallic mb-10 font-light">Book your premium mobile detail today and experience the Hydroshine difference.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-black rounded-full font-medium uppercase tracking-widest text-sm hover:bg-brand-silver transition-colors"
          >
            <span>Book Your Detail Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
