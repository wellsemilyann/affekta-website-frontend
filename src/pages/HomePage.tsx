import { HeroSection } from '../components/HeroSection';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, Brain, Shield, Zap, Satellite, Ship, Building2, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import nasaLogo from 'figma:asset/48cd9513c05ba6d64a325decfb22d8f92405a48f.png';
import iCorpsLogo from 'figma:asset/05cde95de9a47c905de30ee81fdf453436cd4d66.png';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Core Value Proposition - Galaxy Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709408635158-8d735f0395c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc3BhY2UlMjBnYWxheHklMjBuZWJ1bGF8ZW58MXx8fHwxNzY0NjQ1ODEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Deep Space Galaxy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-10 text-white leading-tight">
                When the unexpected happens,
                <span className="block mt-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  our AI responds
                </span>
              </h2>
              <p className="text-2xl sm:text-3xl text-white/90 mb-16 leading-relaxed max-w-3xl">
                We develop advanced large language models that understand context and reason through novel situations.
              </p>
            </motion.div>

            {/* Technology Pillars - Horizontal Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                { 
                  icon: Brain, 
                  label: 'LLM Deep Reasoning',
                  description: 'Advanced language models that understand context and reason through novel situations'
                },
                { 
                  icon: Shield, 
                  label: 'Formal Methods',
                  description: 'Mathematically proven safety guarantees for mission-critical decisions'
                },
                { 
                  icon: Zap, 
                  label: 'Bayesian Inference',
                  description: 'Probabilistic reasoning under uncertainty with real-time adaptation'
                }
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.4, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-400/20">
                    <tech.icon className="h-14 w-14 text-cyan-400 mb-5" />
                    <h3 className="text-2xl mb-4 text-white">{tech.label}</h3>
                    <p className="text-base text-white/80 leading-relaxed">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* NASA Partnership - Spacecraft Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1602266624233-233f99b9de36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXNhJTIwc3BhY2VjcmFmdCUyMG1pc3Npb258ZW58MXx8fHwxNzY0NjQ1ODEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="NASA Spacecraft"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        {/* Animated overlay elements */}
        <div className="absolute inset-0">
          {/* Orbital rings */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <motion.circle
              cx="80%"
              cy="50%"
              r="300"
              stroke="#0ea5e9"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: 360 }}
              transition={{ pathLength: { duration: 2 }, rotate: { duration: 60, repeat: Infinity, ease: "linear" }}}
            />
            <motion.circle
              cx="80%"
              cy="50%"
              r="400"
              stroke="#06b6d4"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,3"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: -360 }}
              transition={{ pathLength: { duration: 2.5, delay: 0.3 }, rotate: { duration: 80, repeat: Infinity, ease: "linear" }}}
            />
          </svg>

          {/* Floating satellites */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${60 + i * 8}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                x: [0, 40, 0],
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Satellite className="w-8 h-8 text-cyan-400/40" />
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* NASA Logo */}
              <motion.img 
                src={nasaLogo} 
                alt="NASA" 
                className="h-20 sm:h-24 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))'
                }}
              />

              <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-8 text-white leading-tight">
                Developed for
                <span className="block mt-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  manned NASA Deep Space Missions
                </span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-6 leading-relaxed">
                AFFEKTA is building autonomous decision-making systems for NASA's deep space missions 
                under STTR Phase I grant <span className="text-cyan-400 font-[Newsreader]">T6.09-1000</span>.
              </p>
              <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
                Our technology enables life-critical habitats to operate independently when 
                Earth-based expert support is unavailable—a challenge that becomes reality 
                as humans venture deeper into space.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/about')}
                className="text-lg px-10 py-7 bg-cyan-500 hover:bg-cyan-400 text-black shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/50 transition-all"
              >
                Our NASA Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Right - I-Corps Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center lg:items-end gap-6"
            >
              {/* Trusted Partner Label */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-white text-sm uppercase tracking-wider">
                  Trusted Partner
                </span>
              </motion.div>

              {/* I-Corps Logo Card */}
              <motion.button
                onClick={() => navigate('/icorps')}
                className="group relative px-10 py-8 rounded-3xl border-2 border-purple-500/40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md hover:border-purple-400/60 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 shadow-2xl shadow-purple-500/30 hover:shadow-purple-400/40"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={iCorpsLogo} 
                  alt="NSF I-Corps - Selected 2025" 
                  className="h-20 w-auto"
                  style={{
                    mixBlendMode: 'screen',
                    filter: 'brightness(1.2) contrast(1.1)'
                  }}
                />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-400/20 group-hover:to-blue-400/20 transition-all duration-300" />
              </motion.button>

              <Button
                onClick={() => navigate('/icorps')}
                variant="outline"
                className="group px-6 py-3 border-purple-400/40 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400/60 text-white transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-purple-300">Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4 text-purple-300 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* Industries Overview - Earth from Space Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1693654999662-27eabff1737c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGZyb20lMjBzcGFjZSUyMGJsdWV8ZW58MXx8fHwxNzY0NjQ1ODExfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Earth from Space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        </div>

        {/* Animated data mesh overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute inset-0 w-full h-full">
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx={`${20 + i * 12}%`}
                cy="50%"
                r="4"
                fill="#0ea5e9"
                animate={{
                  opacity: [0.2, 1, 0.2],
                  r: [4, 6, 4],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 max-w-4xl"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-10 text-white leading-tight">
              Safety-critical systems
              <span className="block mt-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                across industries
              </span>
            </h2>
            <p className="text-2xl sm:text-3xl text-white/90">
              When unforeseen events pose system risk
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                label: 'Aerospace',
                image: 'https://images.unsplash.com/photo-1646073981029-960badede3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBhaXJjcmFmdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxODkxNjcxfDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              { 
                label: 'Oil & Gas',
                image: 'https://images.unsplash.com/photo-1600221574280-9bcd5d108100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjE4OTE2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              { 
                label: 'Healthcare',
                image: 'https://images.unsplash.com/photo-1758691463110-697a814b2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNzg3ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080'
              },
              { 
                label: 'Infrastructure',
                image: 'https://images.unsplash.com/photo-1725781535657-29d825bc7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjE4OTE2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
              }
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <ImageWithFallback
                  src={industry.image}
                  alt={industry.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 transition-opacity duration-300 group-hover:from-black/80 group-hover:via-black/40" />
                
                <div className="absolute inset-0 border-2 border-cyan-400/0 rounded-2xl transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-2xl group-hover:shadow-cyan-400/30" />
                
                <div className="relative h-full flex items-end p-6">
                  <h3 className="text-2xl sm:text-3xl text-white transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {industry.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-start">
            <Button
              size="lg"
              onClick={() => navigate('/industries')}
              variant="outline"
              className="text-lg px-10 py-7 border-cyan-400/40 text-white hover:border-cyan-400/80 hover:bg-cyan-400/10 transition-all"
            >
              Explore All Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* Final CTA - Rocket Launch Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBzcGFjZXxlbnwxfHx8fDE3NjQ2Mjc0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Rocket Launch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        </div>

        {/* Quantum particles effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-10 text-white leading-tight">
                Ready to master the
                <span className="block mt-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  unpredictable?
                </span>
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-14 max-w-3xl mx-auto leading-relaxed">
                Join NASA and forward-thinking organizations deploying AI systems 
                that turn uncertainty into opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="text-lg px-12 py-8 bg-cyan-500 hover:bg-cyan-400 text-black shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/60 transition-all"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/technology')}
                  className="text-lg px-12 py-8 border-cyan-400/40 text-white hover:border-cyan-400/80 hover:bg-cyan-400/10 transition-all"
                >
                  Explore Technology
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
