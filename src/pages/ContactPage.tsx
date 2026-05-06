import { ContactSection } from '../components/ContactSection';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useRef } from 'react';

export function ContactPage() {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Dynamic Background - Similar to HomePage */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NjEyNDQ2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Digital Network"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
          
          {/* Animated radial gradient */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 204, 0.2) 0%, transparent 60%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Subtle floating particles */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/70 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1.5, 0.8],
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Scanning line effect */}
          <motion.div
            className="absolute left-0 right-0 h-px opacity-20"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 102, 204, 0.8), transparent)',
            }}
            animate={{
              top: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <motion.h1 
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
              >
                <span className="block text-6xl sm:text-7xl lg:text-8xl mb-4 tracking-tight text-white">
                  Get In
                </span>
                <motion.span
                  className="block text-6xl sm:text-7xl lg:text-8xl tracking-tight bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% auto',
                  }}
                  animate={{
                    backgroundPosition: ['0% center', '200% center'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Touch
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-white max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
              >
                Let's discuss how AFFEKTA can support your mission-critical systems
              </motion.p>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex flex-col gap-4"
            >
              {[
                { Icon: Mail, label: 'Email Us', value: 'info@affekta.com' },
                { Icon: MapPin, label: 'Location', value: 'United States' },
                { Icon: Send, label: 'Response Time', value: 'Within 24 hours' }
              ].map(({ Icon, label, value }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="glass-effect p-4 rounded-2xl border border-border/40 flex items-center gap-4 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <motion.div 
                    className="p-3 bg-primary/10 rounded-xl"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-black font-bold">{label}</p>
                    <p className="text-[rgb(0,0,0)] font-[Newsreader]">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section with background */}
      <div className="relative py-40 bg-background overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <ContactSection />
        </motion.div>
      </div>
    </div>
  );
}
