import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "exterior",
      title: "Exterior Detailing",
      price: "From $150",
      description: "Restore your vehicle's paint to a glossy, showroom finish.",
      features: [
        "Two-bucket hand wash",
        "Wheel and tire deep clean & dress",
        "Clay bar paint decontamination",
        "Premium wax or paint sealant application",
        "Exterior glass cleaning",
        "Trim restoration and protection"
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "interior",
      title: "Interior Detailing",
      price: "From $150",
      description: "Deep cleaning and restoration of all interior surfaces.",
      features: [
        "Thorough vacuuming of seats, carpets, and mats",
        "Deep clean of dashboard, console, and door panels",
        "Leather cleaning and conditioning",
        "Upholstery stain spot treatment",
        "Interior glass cleaning",
        "UV protection dressing on plastics"
      ],
      image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "full",
      title: "Full Detail Package",
      price: "From $250",
      description: "The complete reset. Combines our Exterior and Interior packages for ultimate value.",
      features: [
        "Complete Exterior Detailing package",
        "Complete Interior Detailing package",
        "Engine bay light wipe down",
        "Complimentary air freshener",
        "Final inspection for perfection"
      ],
      image: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=1000",
      featured: true
    }
  ];

  const addons = [
    { name: "Engine Bay Cleaning", price: "$50" },
    { name: "Headlight Restoration", price: "$75" },
    { name: "Ceramic Spray Coating", price: "$100" },
    { name: "Pet Hair Removal", price: "$40+" },
    { name: "Odor Removal / Ozone", price: "$60" }
  ];

  return (
    <div className="w-full pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-light mb-6">Premium Services</h1>
          <p className="text-xl text-brand-metallic max-w-2xl mx-auto font-light">
            Comprehensive detailing packages designed to restore, protect, and maintain your vehicle's value.
          </p>
        </motion.div>
      </section>

      {/* Main Packages */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {service.featured && (
                    <div className="absolute top-6 left-6 bg-white text-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                      Most Popular
                    </div>
                  )}
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-brand-silver text-sm uppercase tracking-widest">{service.price}</span>
                  <h2 className="text-3xl md:text-4xl font-display mt-2 mb-4">{service.title}</h2>
                  <p className="text-brand-metallic text-lg">{service.description}</p>
                </div>
                
                <div className="h-px w-full bg-white/10 my-8"></div>
                
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-brand-silver shrink-0 mt-0.5" />
                      <span className="text-brand-metallic">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/contact?service=${service.id}`}
                  className={`inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-medium uppercase tracking-widest text-sm transition-colors w-full sm:w-auto ${
                    service.featured 
                      ? 'bg-white text-black hover:bg-brand-silver' 
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-brand-gray py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">Add-On Services</h2>
            <p className="text-brand-metallic">Customize your detail with these specialized treatments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {addons.map((addon, index) => (
              <div key={index} className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-lg">{addon.name}</span>
                <span className="text-brand-silver font-medium">{addon.price}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-brand-metallic mb-8">
              * Prices may vary based on vehicle size and condition. Final quote provided upon inspection.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-2 px-10 py-4 bg-white text-black rounded-full font-medium uppercase tracking-widest text-sm hover:bg-brand-silver transition-colors"
            >
              <span>Get a Custom Quote</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
