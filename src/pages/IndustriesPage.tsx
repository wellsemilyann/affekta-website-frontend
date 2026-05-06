import { IndustriesSection } from '../components/IndustriesSection';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function IndustriesPage() {
  return (
    <div className="pt-16">
      {/* Hero Banner with Multiple Images */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image Mosaic */}
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1597674758836-c1aca6a8a175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBvcmJpdCUyMGVhcnRofGVufDF8fHx8MTc2MTA3OTExMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Satellite"
            className="w-full h-full object-cover"
          />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1651776651282-fef8477df33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwbGF0Zm9ybSUyMG9jZWFufGVufDF8fHx8MTc2MTA3OTExMXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Oil Platform"
            className="w-full h-full object-cover"
          />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625201212921-1c5e5557d451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjEwMDk2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Building"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-6 text-white">
              Industries We
              <span className="block bg-gradient-to-r from-primary via-cyan-500 to-primary bg-clip-text text-transparent">
                Transform
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Bringing autonomous intelligence to the most challenging environments across safety-critical domains
            </p>

            {/* Key Sectors */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  label: 'Aerospace',
                  image: 'https://images.unsplash.com/photo-1646073981029-960badede3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBhaXJjcmFmdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxODkxNjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                },
                { 
                  label: 'Oil & Gas',
                  image: 'https://images.unsplash.com/photo-1600221574280-9bcd5d108100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjE4OTE2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                },
                { 
                  label: 'Healthcare',
                  image: 'https://images.unsplash.com/photo-1758691463110-697a814b2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNzg3ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                },
                { 
                  label: 'Infrastructure',
                  image: 'https://images.unsplash.com/photo-1725781535657-29d825bc7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjE4OTE2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                }
              ].map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                >
                  {/* Background Image */}
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 transition-opacity duration-300 group-hover:from-black/80 group-hover:via-black/40" />
                  
                  {/* Border & Glow Effect */}
                  <div className="absolute inset-0 border border-primary/30 rounded-2xl transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-xl group-hover:shadow-primary/20" />
                  
                  {/* Content */}
                  <div className="relative h-full flex items-end p-6">
                    <h3 className="text-2xl text-white transition-transform duration-300 group-hover:translate-y-[-4px]">
                      {industry.label}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <IndustriesSection />
    </div>
  );
}
