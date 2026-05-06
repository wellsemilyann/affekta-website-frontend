import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1695697684705-a861c92df897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjB2aXNvciUyMHJlZmxlY3Rpb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ2NDg5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Astronaut in Space"
          className="w-full h-full object-cover object-right"
        />
        {/* Gradient Overlays - Clean left side for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      {/* Subtle animated particles overlay */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content - Left Aligned like SpaceX */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Main Headline */}
            <h1 className="mb-8">
              <motion.span
                className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-4 tracking-tight text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Autonomous Intelligence
              </motion.span>
              <motion.div
                className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
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
                  Made Safe
                </motion.span>
              </motion.div>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-xl sm:text-2xl lg:text-3xl text-white/95 mb-12 leading-relaxed max-w-2xl"
            >
              We provide Advanced AI solutions mastering unforeseeable situations in safety critical operations domains
            </motion.p>

            {/* NASA STTR Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-white text-sm uppercase tracking-wider">
                NASA STTR Phase I Active
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white hover:text-cyan-400 transition-colors cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}