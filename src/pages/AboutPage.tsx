import { AboutSection } from '../components/AboutSection';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Award, Users, Rocket, Star } from 'lucide-react';
import nasaLogo from 'figma:asset/48cd9513c05ba6d64a325decfb22d8f92405a48f.png';

export function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background with Dual Images */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1711733486686-6105b5932514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTA3OTEwOXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Space Station"
              className="w-full h-full object-cover"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1614729375290-b2a429db839b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXNhJTIwc3BhY2VjcmFmdHxlbnwxfHx8fDE3NjEwNzkxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Spacecraft"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/95" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 grid-overlay opacity-20" />

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-8 text-white">
                <span className="block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                  AFFEKTA
                </span>
              </h1>
              <p className="text-2xl text-white mb-8 leading-relaxed">
                Pioneering autonomous systems for deep space exploration and mission-critical infrastructure
              </p>

              {/* NASA Partnership Badge - Clickable Link */}
              <motion.a
                href="https://www.nasa.gov/sbir_sttr/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-4 glass-effect px-6 py-4 rounded-2xl border border-primary/20 shadow-lg cursor-pointer hover:border-primary/40 transition-all"
              >
                <img 
                  src={nasaLogo} 
                  alt="NASA" 
                  className="h-12"
                  style={{
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.1)'
                  }}
                />
                <div>
                  <p className="text-sm text-[rgb(0,0,0)]">Backed by</p>
                  <p className="text-lg">NASA STTR Phase I</p>
                </div>
              </motion.a>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { Icon: Award, value: 'Phase I', label: 'NASA STTR', color: 'from-blue-500/20 to-cyan-500/20' },
                { Icon: Users, value: '3+', label: 'Research Partners', color: 'from-purple-500/20 to-pink-500/20' },
                { Icon: Rocket, value: 'TRL 2→3', label: 'Technology Level', color: 'from-green-500/20 to-emerald-500/20' },
                { Icon: Star, value: '2025', label: 'Phase II Target', color: 'from-orange-500/20 to-red-500/20' }
              ].map(({ Icon, value, label, color }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative glass-effect p-6 rounded-3xl border border-border/40 card-hover-lift text-center">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl mb-1 text-[rgb(0,0,0)] font-[Newsreader]">{value}</div>
                    <div className="text-sm text-[rgb(0,0,0)] font-[Newsreader]">{label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <AboutSection />
    </div>
  );
}