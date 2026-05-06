
import { Shield, Brain, Lightbulb, Target, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TechnologySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const technologies = [
    {
      icon: Shield,
      title: 'Formal Methods',
      tagline: 'Verifiable Safety & NASA Compliance',
      description: 'Mathematical verification techniques that guarantee system behavior meets specifications. Our formal methods approach ensures mission-critical systems operate safely under all conditions, meeting NASA\'s stringent requirements for space missions.',
      features: [
        'Provably correct system behavior',
        'Automated verification of safety properties',
        'NASA compliance certification support',
        'Eliminates entire classes of software errors',
      ],
      color: 'text-blue-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      iconBg: 'bg-blue-500/10',
    },
    {
      icon: Brain,
      title: 'Bayesian Reasoning',
      description: 'Advanced probabilistic inference that enables systems to make optimal decisions under uncertainty. Our Bayesian framework continuously updates beliefs based on new evidence, allowing autonomous systems to adapt to unforeseen circumstances with quantified confidence.',
      tagline: 'Resilience Through Uncertainty',
      features: [
        'Real-time belief updating and learning',
        'Quantified confidence in decisions',
        'Optimal resource allocation',
        'Handles incomplete and noisy data',
      ],
      color: 'text-purple-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      iconBg: 'bg-purple-500/10',
    },
    {
      icon: Lightbulb,
      title: 'LLM Deep Reasoning',
      tagline: 'Intelligent Recovery & Root Cause Analysis',
      description: 'Large Language Models enhanced with domain-specific knowledge for sophisticated system diagnostics and recovery. Our LLM integration provides human-level reasoning capabilities for identifying root causes and generating recovery strategies in novel failure scenarios.',
      features: [
        'Natural language system diagnostics',
        'Automated root cause identification',
        'Novel failure recovery strategies',
        'Knowledge synthesis across domains',
      ],
      color: 'text-green-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      iconBg: 'bg-green-500/10',
    },
  ];

  return (
    <section id="technology" className="py-32 relative overflow-hidden bg-[#0d1117]" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 113, 227, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 113, 227, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 text-sm px-4 py-2">Core Technology</Badge>
          <h2 className="mb-6 text-3xl sm:text-4xl lg:text-6xl text-[rgb(166,163,220)] px-4">
            Three Pillars of
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Autonomous Intelligence
            </span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed px-4">
            Addressing the challenge of "Unknown Unknowns" in deep space missions through integrated formal verification, probabilistic reasoning, and AI-powered diagnostics.
          </p>
        </motion.div>

        {/* Problem Statement with Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1711733486686-6105b5932514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTA3OTEwOXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Space Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/90" />
          </div>
          
          <div className="relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-[500px] lg:h-auto overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565501280525-2e9a49ad4463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXRpb24lMjBiYXNlfGVufDF8fHx8MTc2MjIwOTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Space Station Base"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 lg:to-background/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Content Section */}
              <div className="relative p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-background/95 to-primary/5">
                <Badge className="mb-6 w-fit bg-primary/20 border-primary/40 text-primary">The Challenge</Badge>
                <h3 className="text-4xl lg:text-5xl mb-6 text-white leading-tight">
                  Mastering Unknown Unknowns FDIR (Fault Detection, Isolation and Recovery) for Deep Space Habitat Life Support Systems
                </h3>
                <div className="space-y-5 text-white/90 leading-relaxed text-lg">
                  <p>
                    Deep space habitats require reliable and performant human astronauts life support systems that must be able to handle unforseeable adverse events in a reliable manner over long periods of time. At times earth based ground control support will either be unavailable or only available with long communication delays. Furthermore long exposure to the elements on the moon or a deep space planet such as Mars, poses maintenance challenges. There are also limited resources such as not possible to call for help and a limited spare part inventory. This is the operational environment that we build and test our models for. Our AI is specially designed to handle "unknown unknowns" in the highest possible safety critical operations domain: NASA's deep space missions.
                  </p>
                  <p>
                    Our system FORTESS operates both fully autonomously and also with a human-in-the-loop, an astronaut or astronauts. With the support of our system FORTRESS, non-expert crew members can handle any space habitat failure, even those the designers never anticipated.
                  </p>
                  <p>
                    Equipment ages unpredictably (metal fatigue, radiation damage, thermal cycling). Multiple systems interact in complex ways. Adverse events can affect multiple space habitat systems simultaneously. Failures can cascade in unforeseen patterns. Traditional fault trees and pre-programmed responses are insufficient in the harsh real world on a foreign planet—our advanced AI FORTRESS system reasons about situations it has never encountered.
                  </p>
                  <div className="pt-4 border-t border-primary/30">
                    <p className="text-primary">
                      AFFEKTA's FORTRESS integrates formal methods for verifiable safety, Bayesian reasoning for handling uncertainty, and LLMs-powered diagnostics for root cause analysis—creating a system that can truly operate autonomously in the face of "Unknown Unknowns, carrying out identification, isolation and resolution (FDIR).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Cards with Enhanced Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              <Card className="card-hover-lift h-full border-border/60 overflow-hidden relative">
                {/* Card Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <tech.icon className="w-full h-full" />
                </div>

                <CardHeader>
                  <motion.div 
                    className={`${tech.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} opacity-50`} />
                    <tech.icon className={`h-8 w-8 ${tech.color} relative z-10`} />
                  </motion.div>
                  <CardTitle className="text-2xl">{tech.title}</CardTitle>
                  <CardDescription className="text-base">{tech.tagline}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-white mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  <div className="space-y-3">
                    {tech.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + idx * 0.08 + 0.4 }}
                      >
                        <CheckCircle2 className={`h-5 w-5 ${tech.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm leading-relaxed text-white">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Integration & Validation with Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="h-full relative overflow-hidden border-border/60">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Cyber-Physical Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-6 leading-relaxed">
                  Our technology stack integrates seamlessly with cyber-physical systems, enabling real-time 
                  monitoring, analysis, and autonomous decision-making across hardware and software boundaries.
                </p>
                <div className="space-y-3">
                  {[
                    'Physics grounded AI',
                    'Real-time sensor fusion and state estimation',
                    'Hardware-in-the-loop validation',
                    'Distributed system coordination'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="h-full relative overflow-hidden border-border/60">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/5 rounded-full blur-3xl" />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-500/10 rounded-xl">
                    <Shield className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle className="text-xl">TRL Status: 2</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-6 leading-relaxed">
                  Technology concept and application are being formulated.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white">Phase I progress</span>
                      <span className="text-primary">5%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '5%' } : {}}
                        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <div className="glass-effect p-4 rounded-2xl border border-border/40">
                    <p className="text-sm text-white">
                      Phase II applications planned for Q3 2026
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}