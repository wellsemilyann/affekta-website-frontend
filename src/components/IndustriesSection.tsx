import { Building2, Factory, Plane, Satellite, Waves, MapPin, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function IndustriesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const industries = [
    {
      icon: Satellite,
      title: 'Space & Satellites',
      description: 'Autonomous operations for satellites, space stations, and deep space habitats where communication delays make remote control impractical.',
      features: ['Orbital asset management', 'Deep space autonomy', 'Predictive maintenance'],
      image: 'https://images.unsplash.com/photo-1597674758836-c1aca6a8a175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBvcmJpdCUyMGVhcnRofGVufDF8fHx8MTc2MTA3OTExMHww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: Waves,
      title: 'Offshore Oil & Gas',
      description: 'Managing complex equipment networks in remote offshore platforms where safety is paramount and equipment aging creates unique challenges.',
      features: ['Platform monitoring', 'Equipment diagnostics', 'Safety systems'],
      image: 'https://images.unsplash.com/photo-1651776651282-fef8477df33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwbGF0Zm9ybSUyMG9jZWFufGVufDF8fHx8MTc2MTA3OTExMXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: Factory,
      title: 'Infrastructure-Manufacturing',
      description: 'Complex industrial systems requiring autonomous monitoring and control to ensure continuous operation and worker safety in large-scale facilities.',
      features: ['Process optimization', 'Quality assurance', 'Safety monitoring'],
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzYxODkxNjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-blue-600/20 to-cyan-500/20',
    },
    {
      icon: Plane,
      title: 'Autonomous Drones',
      description: 'Intelligent systems for unmanned aerial vehicles requiring real-time decision-making in dynamic and unpredictable environments.',
      features: ['Flight autonomy', 'Obstacle avoidance', 'Mission adaptation'],
      image: 'https://images.unsplash.com/photo-1668883738061-e46019b0b9fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzYxMDMxMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Building2,
      title: 'Smart Buildings',
      description: 'Advanced building management systems that adapt to changing conditions and optimize for safety, efficiency, and occupant comfort.',
      features: ['HVAC optimization', 'Energy management', 'Predictive maintenance'],
      image: 'https://images.unsplash.com/photo-1625201212921-1c5e5557d451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjEwMDk2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: Heart,
      title: 'Healthcare Systems',
      description: 'Life-critical medical equipment and patient monitoring systems requiring reliable autonomous operation and safety verification.',
      features: ['Patient monitoring', 'Equipment diagnostics', 'Safety-critical AI'],
      image: 'https://images.unsplash.com/photo-1758204054576-63e64b574f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBlcXVpcG1lbnQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTI0NDY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-red-500/20 to-pink-500/20',
    },
    {
      icon: MapPin,
      title: 'Remote Infrastructure',
      description: 'Managing critical systems in isolated locations where traditional maintenance and monitoring are costly or impossible.',
      features: ['Remote monitoring', 'Fault prediction', 'Autonomous recovery'],
      image: 'https://images.unsplash.com/photo-1758876377882-6ae5b186b6e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMG5ldHdvcmt8ZW58MXx8fHwxNzYxMDA4Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
  ];

  return (
    <section ref={sectionRef} id="industries" className="py-32 relative overflow-hidden bg-[#0a0f1a]">
      {/* Background Pattern with hexagon grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#121825] to-[#0a0f1a]" />
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="rgba(0, 113, 227, 0.3)" strokeWidth="0.5"/>
              <polygon points="0,0 12.5,7.2 12.5,21.7 0,28.9 -12.5,21.7 -12.5,7.2" fill="none" stroke="rgba(0, 113, 227, 0.3)" strokeWidth="0.5"/>
              <polygon points="49.6,0.5 62.1,7.7 62.1,22.2 49.6,29.4 37.1,22.2 37.1,7.7" fill="none" stroke="rgba(0, 113, 227, 0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-6 text-white px-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto px-4">
            From deep space to the ocean depths, we bring autonomous intelligence to the world's most challenging environments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden h-full card-hover-lift border-border/60">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${industry.gradient} to-transparent`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="p-3 glass-effect rounded-2xl border border-border/40 shadow-lg">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2">
                    {industry.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${industry.gradient} blur-3xl -z-10`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-effect inline-block px-8 py-4 rounded-2xl border border-border/40">
            <p className="text-[rgb(0,0,0)] mb-2 font-[Newsreader]">Don't see your industry?</p>
            <p className="text-sm text-[rgb(0,0,0)] font-[Newsreader]">
              Our platform adapts to any mission-critical environment requiring autonomous decision-making
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}