import { Rocket, Code, Brain, Users, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function CareerSection() {
  const positions = [
    {
      title: 'Formal Methods Engineer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Lead the development of formal verification frameworks for autonomous spacecraft systems.',
      requirements: [
        'PhD or MS in Computer Science, Mathematics, or related field',
        'Experience with formal verification tools (Coq, Isabelle, TLA+)',
        'Background in aerospace or safety-critical systems',
      ],
    },
    {
      title: 'Machine Learning Research Scientist',
      department: 'Research',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Research and develop Bayesian inference algorithms and LLM-based reasoning systems.',
      requirements: [
        'PhD in Machine Learning, Statistics, or related field',
        'Expertise in Bayesian methods and probabilistic programming',
        'Experience with LLMs and deep learning frameworks',
      ],
    },
    {
      title: 'Autonomous Systems Software Engineer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Build and integrate cyber-physical systems for real-time autonomous decision-making.',
      requirements: [
        'BS/MS in Computer Engineering, Robotics, or related field',
        'Strong C++ and Python programming skills',
        'Experience with ROS, embedded systems, or real-time software',
      ],
    },
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Mission-Driven Work',
      description: 'Contribute to technology that will enable humanity\'s expansion into deep space',
    },
    {
      icon: Brain,
      title: 'Cutting-Edge Research',
      description: 'Work at the intersection of formal methods, AI, and autonomous systems',
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Partner with world-class researchers from NASA and ISU',
    },
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Use state-of-the-art tools and methodologies in a rigorous engineering culture',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000510] via-[#000a1f] to-background" />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(0, 113, 227, 0.5) 0%, rgba(100, 149, 237, 0.2) 50%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 80, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)',
            }}
            animate={{
              scale: [1.2, 0.9, 1.2],
              x: [0, -70, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Particle animation */}
          <div className="absolute inset-0">
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(0, 113, 227, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 113, 227, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
            }}
          />

          {/* Scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 113, 227, 0.8), transparent)',
              boxShadow: '0 0 20px rgba(0, 113, 227, 0.5)',
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

          {/* Light rays */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 w-px h-full origin-top"
                style={{
                  left: `${10 + i * 12}%`,
                  background: 'linear-gradient(to bottom, rgba(0, 113, 227, 0.6), rgba(100, 149, 237, 0.3), transparent)',
                }}
                animate={{
                  scaleY: [0.3, 1, 0.3],
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <Badge className="text-base px-4 py-2">Join Our Team</Badge>
            </motion.div>

            {/* Main Title */}
            <h1 className="mb-8 px-4 text-center">
              <motion.span
                className="block text-4xl sm:text-5xl lg:text-8xl mb-4 tracking-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Build the Future
              </motion.span>
              <motion.div
                className="block text-4xl sm:text-5xl lg:text-8xl tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent"
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
                  With Us
                </motion.span>
              </motion.div>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              className="text-xl sm:text-2xl text-white max-w-3xl mx-auto mb-12"
            >
              Join exceptional engineers and researchers pushing the boundaries of autonomous systems for space exploration and beyond
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { icon: Rocket, label: 'NASA Partnership', value: 'STTR Phase I' },
                { icon: Brain, label: 'Cutting-Edge', value: 'AI Research' },
                { icon: Users, label: 'Collaborative', value: 'Team Culture' },
                { icon: Code, label: 'Remote', value: 'Flexibility' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-white/60 mb-1">{stat.label}</p>
                  <p className="text-white">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <span className="text-xs uppercase tracking-widest text-white">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div className="w-1 h-2 bg-white rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why AFFEKTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#000a1f] to-[#000510]">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(0, 113, 227, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 113, 227, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -60, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          {/* Gradient orb */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge className="px-6 py-2 text-base">Why AFFEKTA</Badge>
            </motion.div>
            <h2 className="mb-6 text-white">What Makes Us Different</h2>
            <p className="text-xl max-w-3xl mx-auto text-white/80">
              Join a team where your work directly contributes to the future of space exploration
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(0, 113, 227, 0.3), transparent)',
                      backgroundSize: '200% 100%',
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-white">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="relative py-32 overflow-hidden bg-[#000510]">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Scanning line effect */}
          <motion.div
            className="absolute left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 113, 227, 0.6), transparent)',
              boxShadow: '0 0 20px rgba(0, 113, 227, 0.4)',
            }}
            animate={{
              top: ['0%', '100%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Light rays */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 w-px h-full origin-top"
                style={{
                  left: `${15 + i * 15}%`,
                  background: 'linear-gradient(to bottom, rgba(0, 113, 227, 0.8), transparent)',
                }}
                animate={{
                  scaleY: [0.5, 1, 0.5],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Gradient orb */}
          <motion.div
            className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(0, 113, 227, 0.5) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge className="px-6 py-2 text-base">Open Positions</Badge>
            </motion.div>
            <h2 className="mb-6 text-white">Join Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto text-white/80">
              Explore opportunities to work on cutting-edge autonomous systems technology
            </p>
          </motion.div>

          {/* Positions List */}
          <div className="space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                  {/* Animated side accent */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(0, 113, 227, 1), rgba(147, 51, 234, 1), rgba(34, 211, 238, 1))',
                    }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />

                  {/* Glow effect on hover */}
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Card Content */}
                  <div className="relative p-8 lg:p-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h3 className="mb-3 text-white">{position.title}</h3>
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="outline" className="text-white/80 border-white/20">
                            <MapPin className="h-3 w-3 mr-1.5" />
                            {position.location}
                          </Badge>
                          <Badge variant="outline" className="text-white/80 border-white/20">
                            <Clock className="h-3 w-3 mr-1.5" />
                            {position.type}
                          </Badge>
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {position.department}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          window.location.href = '/contact';
                        }}
                        className="lg:min-w-[140px] shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-shadow"
                      >
                        Apply Now
                      </Button>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 mb-6 text-lg leading-relaxed">
                      {position.description}
                    </p>

                    {/* Requirements */}
                    <div>
                      <h4 className="text-white mb-4">Key Requirements</h4>
                      <ul className="space-y-3">
                        {position.requirements.map((req, reqIndex) => (
                          <motion.li
                            key={reqIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + reqIndex * 0.1 }}
                            className="flex items-start gap-3 text-white/70"
                          >
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{req}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#000510] via-[#000a1f] to-[#000510]">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Grid */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(0, 113, 227, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 113, 227, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Particles */}
          <div className="absolute inset-0">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 6,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Gradient orbs */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 80, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Badge className="px-6 py-2 text-base">How We Hire</Badge>
            </motion.div>
            <h2 className="mb-6 text-white">Simple & Transparent</h2>
            <p className="text-xl max-w-3xl mx-auto text-white/80">
              Three straightforward steps to joining our mission-driven team
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative mb-24">
            {/* Connection line (desktop) */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 mx-auto max-w-5xl px-24">
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {[
                {
                  number: '01',
                  title: 'Submit Application',
                  description: 'Share your resume and tell us why you\'re excited to join AFFEKTA through our contact form.',
                  icon: Code,
                },
                {
                  number: '02',
                  title: 'Technical Interview',
                  description: 'Showcase your skills and discuss technical challenges with our engineering team.',
                  icon: Brain,
                },
                {
                  number: '03',
                  title: 'Culture Fit',
                  description: 'Meet the team, explore our mission, and see if we\'re the right match for each other.',
                  icon: Users,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="relative h-full">
                    {/* Number badge */}
                    <motion.div 
                      className="relative z-20 w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl text-white">{step.number}</span>
                    </motion.div>

                    {/* Card */}
                    <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-all duration-500 text-center">
                      {/* Icon */}
                      <div className="mb-6 w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                        <step.icon className="h-7 w-7 text-primary" />
                      </div>

                      {/* Content */}
                      <h3 className="mb-4 text-white">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Decorative glow */}
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Arrow connector */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-20 -right-8 z-30">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                        className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center backdrop-blur-sm"
                      >
                        <span className="text-primary">→</span>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-white/5" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border border-white/20" />

              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }} className="w-full h-full" />
              </div>

              {/* Content */}
              <div className="relative p-12 lg:p-16 text-center">
                <h2 className="mb-6 text-white">Ready to Join Our Mission?</h2>
                <p className="text-xl mb-10 max-w-2xl mx-auto text-white/80">
                  Join us in building autonomous systems that will enable humanity's next giant leap into space
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
                  >
                    Start Your Application
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-8 border-white/20 text-white hover:bg-white/10"
                  >
                    View Open Roles
                  </Button>
                </div>
              </div>

              {/* Floating orbs */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}