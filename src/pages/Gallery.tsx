import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000",
      title: "Gloss Finish",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=1000",
      title: "Leather Restoration",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
      title: "Paint Correction",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=1000",
      title: "Ceramic Coating",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000",
      title: "Wheel Deep Clean",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=1000",
      title: "Dashboard Detailing",
      category: "Interior"
    }
  ];

  return (
    <div className="w-full pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-light mb-6">Our Work</h1>
          <p className="text-xl text-brand-metallic max-w-2xl mx-auto font-light">
            A showcase of our premium detailing results. We let the shine speak for itself.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-brand-gray"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-silver text-xs uppercase tracking-widest mb-1">{img.category}</span>
                <h3 className="text-xl font-display text-white">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-brand-metallic mb-8">Ready to see your vehicle shine like this?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center space-x-2 px-10 py-4 bg-white text-black rounded-full font-medium uppercase tracking-widest text-sm hover:bg-brand-silver transition-colors"
          >
            Book Your Detail
          </a>
        </div>
      </section>
    </div>
  );
}
