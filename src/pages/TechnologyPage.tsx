import { TechnologySection } from '../components/TechnologySection';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Code2, Cpu, Network } from 'lucide-react';

export function TechnologyPage() {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1640552421447-1808735878e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTAzNDAzMHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Technology"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-6 text-white">
              Our
              <span className="block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-2xl">
            Next-generation AI solutions for autonomous systems that master unforeseeable situations for NASA deep-space missions
            </p>
          </motion.div>

          {/* Floating Tech Icons */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8">
            {[
              { Icon: Code2, delay: 0 },
              { Icon: Cpu, delay: 0.2 },
              { Icon: Network, delay: 0.4 }
            ].map(({ Icon, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay }}
                className="glass-effect p-4 rounded-2xl border border-primary/20"
              >
                <Icon className="h-8 w-8 text-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TechnologySection />
    </div>
  );
}
