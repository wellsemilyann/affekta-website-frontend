import { GraduationCap, Users, Award, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import nasaLogo from 'figma:asset/48cd9513c05ba6d64a325decfb22d8f92405a48f.png';
import iCorpsLogo from 'figma:asset/05cde95de9a47c905de30ee81fdf453436cd4d66.png';
import affektaLogo from 'figma:asset/45b56ef32b3f6d6cb679f636aa90e882849b0ffe.png';
import heddinAvatar from 'figma:asset/d79c2ae2f1131d114d4d9fb26d80cfb558075b4b.png';
import kristinAvatar from 'figma:asset/cc66a73ea7a498e708aa1f88aa11e4e9e43924ab.png';
import shirleyAvatar from 'figma:asset/bb3e2175ad7a1cbfa3f27a8d40b0ec13d674a22c.png';
import iliasAvatar from 'figma:asset/63d04c561fcc7b748f60aab5710b9b3ab35f7d44.png';
import isuLogo from 'figma:asset/252ecdf65d063c1f8fc23c3b14552e23d6a35f4b.png';
//import rethiLogo from 'figma:asset/165e5a4e0f1221b8d629056b315f9144cf95036d.png';
//import purdueLogo from 'figma:asset/8f4530241d37875f777acd6972e6d0f1843e0583.png';

export function AboutSection() {
  const researchPartners = [
    {
      name: 'Professor Kristin Yvonne Rozier',
      role: 'Co-Principal Investigator',
      affiliation: 'Iowa State University',
      expertise: 'Formal Methods & Aerospace Engineering',
      bio: 'Heads the Laboratory for Temporal Logic in Aerospace Engineering at Iowa State University. Previously spent 14 years as a Research Scientist at NASA and three semesters as Assistant Professor at University of Cincinnati. Earned Ph.D. from Rice University and B.S. and M.S. from The College of William and Mary.',
      focus: 'Research focuses on automated techniques for formal specification, validation, and verification of safety critical systems, including design-time checking of system logic, runtime system health management, and safety and security analysis.',
      awards: 'NSF CAREER Award, NASA Early Career Faculty Award, American Helicopter Society\'s Howard Hughes Award, Women in Aerospace Inaugural Initiative-Inspiration-Impact Award, two NASA Group Achievement Awards, two NASA Superior Accomplishment Awards, Lockheed Martin Space Operations Lightning Award, AIAA\'s Intelligent Systems Distinguished Service Award.',
      positions: 'Dennis and Rebecca Muilenburg Endowed Professor, Associate Fellow of AIAA, Senior Member of IEEE, ACM, and SWE. Served on NASA Formal Methods Symposium Steering Committee since founding the conference in 2008.',
      avatar: kristinAvatar,
    },
    /*
    {
      name: 'Professor Shirley Dyke',
      role: 'Co-Principal Investigator',
      affiliation: 'Purdue University - RETHi',
      expertise: 'Cyber-Physical Systems & Resilient Infrastructure',
      bio: 'Executive Director of the Resilient ExtraTerrestrial Habitats institute (RETHi), a $15M NASA-funded institute focused on deep space habitation. RETHi combines expertise in civil infrastructure resilience, autonomous robotics, hybrid simulation, machine learning, smart buildings, and diagnostics/prognostics.',
      focus: 'Team has developed three key testbeds: (i) HabSim, a system-of-systems habitat simulation model; (ii) CDCM, a rapid prototyping tool for design support and digital twins; and (iii) the Cyberphysical Testbed (HARSH), integrating physical and virtual models for validating resilience and autonomy.',
      leadership: 'Member of AIAA Lunar Surface Economic Development Task Force and co-organized 2024 Workshop on Physical-AI-in-Space. Research innovatively integrates technologies for resilient and sustainable systems on Earth and in space. Leadership of RETHi and expertise in habitat systems, resilience, and testbeds are vital to FORTRESS.',
      avatar: shirleyAvatar,
    },
    {
      name: 'Professor Ilias Bilionis',
      role: 'Co-Principal Investigator',
      affiliation: 'Purdue University',
      expertise: 'Bayesian Methods & Predictive Science',
      bio: 'Professor of Mechanical Engineering at Purdue University. Obtained Ph.D. in Applied Mathematics from Cornell University (2013) and was postdoctoral researcher at Argonne National Laboratory. Established the Predictive Science Laboratory (PSL) at Purdue, which aims to create AI technologies that accelerate engineering innovations.',
      focus: 'Research spans technical systems (electric machines, high-performance materials) and sociotechnical systems (smart buildings, extra-terrestrial habitats). Expertise in AI, Bayesian methods, Information Field Theory (IFT), and predictive science for complex systems is foundational for FORTRESS\'s FDIR capabilities.',
      avatar: iliasAvatar,
    },
    */
  ];

  return (
    <section id="about" className="py-20 bg-[#0e1419] relative overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e1419] via-[#131b24] to-[#0e1419]" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path 
                  d="M 60 0 L 0 0 0 60" 
                  fill="none" 
                  stroke="rgba(0, 113, 227, 0.3)" 
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <motion.rect 
              width="100%" 
              height="100%" 
              fill="url(#grid)"
              animate={{
                x: [0, 60, 0],
                y: [0, 60, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-blue-500 rounded-full"
              style={{
                left: `${(i * 11 + 5) % 100}%`,
                top: `${(i * 17 + 10) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Neural network connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(8)].map((_, i) => {
            const points = [
              { x: 20 + i * 12, y: 20 },
              { x: 30 + i * 12, y: 50 },
              { x: 25 + i * 12, y: 80 },
            ];
            return (
              <g key={`network-${i}`}>
                {points.map((point, idx) => (
                  <motion.circle
                    key={`node-${i}-${idx}`}
                    cx={`${point.x}%`}
                    cy={`${point.y}%`}
                    r="3"
                    fill="#0071e3"
                    animate={{
                      r: [3, 5, 3],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3 + idx * 0.1,
                    }}
                  />
                ))}
                {points.slice(0, -1).map((point, idx) => (
                  <motion.line
                    key={`line-${i}-${idx}`}
                    x1={`${point.x}%`}
                    y1={`${point.y}%`}
                    x2={`${points[idx + 1].x}%`}
                    y2={`${points[idx + 1].y}%`}
                    stroke="#0071e3"
                    strokeWidth="1"
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </g>
            );
          })}
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">About Us</Badge>
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl text-white px-4">Building the Future of Autonomous Systems</h2>
          
          {/* Partner Logos */}
          <div className="flex justify-center items-center gap-8 my-8">
            <motion.img 
              src={affektaLogo} 
              alt="AFFEKTA" 
              className="h-12 sm:h-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                mixBlendMode: 'screen',
                filter: 'invert(1) brightness(1.2)'
              }}
            />
            <motion.img 
              src={nasaLogo} 
              alt="NASA" 
              className="h-12 sm:h-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                mixBlendMode: 'multiply',
                filter: 'contrast(1.1)'
              }}
            />
            <motion.img 
              src={iCorpsLogo} 
              alt="NSF I-Corps" 
              className="h-12 sm:h-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          
          <p className="text-xl text-white max-w-3xl mx-auto">
            AFFEKTA was founded to bridge the gap between cutting-edge research and real-world autonomous systems 
            for the most challenging environments humanity will encounter.
          </p>
        </div>

        {/* Mission & Origin */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-2 card-hover-lift bg-gradient-to-br from-card to-card/50">
            <CardHeader>
              <Award className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="font-bold font-[Newsreader]">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white font-[Newsreader]">
                To enable human exploration and infrastructure resilience in extreme environments by developing 
                verifiable, autonomous decision-making systems that can handle unprecedented situations.
              </p>
              <p className="text-white font-[Newsreader]">
                We combine rigorous mathematical foundations with cutting-edge AI to create systems that don't 
                just react to known problems—they reason about and adapt to situations no one anticipated.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 card-hover-lift bg-gradient-to-br from-card to-card/50">
            <CardHeader>
              <Building className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="font-[Newsreader] font-bold">NASA STTR Partnership</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white font-[Newsreader]">
                Selected for NASA STTR Phase I funding under topic T6.09 (Autonomous Systems), AFFEKTA is 
                developing technology that will enable the next generation of deep space missions.
              </p>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm mb-2 font-[Newsreader]">
                  <span className="font-medium font-[Newsreader]">Project Number:</span> T6.09-1000
                </p>
                <p className="text-sm mb-2 font-[Newsreader]">
                  <span className="font-medium">Topic:</span> Autonomous Decision-Making for Deep Space
                </p>
                <p className="text-sm font-[Newsreader]">
                  <span className="font-medium">Status:</span> Phase I Active (TRL 2→3)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 card-hover-lift bg-gradient-to-br from-card to-card/50">
            <CardHeader>
              <GraduationCap className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="font-bold font-[Newsreader]">NSF I-Corps Program</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white font-[Newsreader]">
                Accepted into the National Science Foundation Innovation Corps program to validate commercial 
                applications of our technology through customer discovery.
              </p>
              <div className="bg-background/80 rounded-lg p-4">
                <p className="text-sm mb-2 font-[Newsreader]">
                  <span className="font-medium">Goal:</span> Identify beachhead market
                </p>
                <p className="text-sm mb-2 font-[Newsreader]">
                  <span className="font-medium">Interviews:</span> 100+ industry stakeholders
                </p>
                <p className="text-sm font-[Newsreader]">
                  <span className="font-medium">Status:</span> Active customer discovery
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-white font-bold text-[24px]">Principal Investigator</h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="max-w-5xl mx-auto border-2 card-hover-lift">
            <CardHeader>
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img src={heddinAvatar} alt="Hedinn Steingrimsson" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <CardTitle className="mb-1 font-bold font-[Newsreader]">Hedinn Steingrimsson</CardTitle>
                  <p className="text-sm mb-4 font-[Newsreader]">Founder, CEO & Principal Investigator | US Citizen (Green Card for Extraordinary Ability)</p>
                  
                  <div className="space-y-4 text-sm">
                    <p>
                      Hedinn leads the FORTRESS project with a strong background in leading international R&D projects, 
                      including serving as PI and project manager for an EU-funded AI-focused project involving universities 
                      and small business collaboration. His expertise is well-suited for interdisciplinary R&D combining 
                      theoretical advancement with tangible, practical improvements.
                    </p>
                    
                    <div>
                      <p className="font-medium mb-2">Education & Research Philosophy</p>
                      <p className="mb-1">
                        Hedinn holds BSc and MSc degrees in Computer Science (University of Iceland) and is completing a PhD 
                        in Electrical and Computer Engineering at Rice University (NDSEG scholarship), focusing on "Safe System 2 
                        AI – Challenges and Architectural Improvements."
                      </p>
                      <p className="italic">Research motto: "Correlation is not causation!"</p>
                      <p className="mt-2">
                        Additional degrees: MSc in Finance, MBA, and pending MSc in Neuroscience.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">Industry Experience</p>
                      <p>
                        Spent many years as senior computer engineer and system architect at Tern, contributing to the 
                        Icelandic Air Traffic Control system—a safety-critical system managing one of the world's largest 
                        airspaces. Designed parts of the Unified Situation Display, integrating information from diverse 
                        sources to maximize controllers' situational awareness. Part of committee whose work led to ISO-9000 
                        certification. Regularly engaged in requirement analysis with air traffic controllers and represented 
                        Tern at international aviation conferences.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-2">Current DOD-Funded AI Research</p>
                      <p className="mb-2">
                        Conducts DOD-funded AI research focusing on architectural improvements to SOTA neural architectures 
                        (including AlphaZero-like deep learning and Transformers/LLMs) for enhanced logical reasoning, reliability, 
                        and safety. Addresses challenges like reward hacking and spurious correlations in LLMs.
                      </p>
                      <p>
                        Made notable contributions to adapting Transformers to complex decision-making tasks, using chess as a 
                        domain for fundamental, human-understandable architectural improvements. Published one of the first 
                        adaptations of Vision Transformers to chess, featuring novel human-understandable feature representation 
                        with significant performance gains. This research is pivotal for developing intrinsically reliable and 
                        robust AI for real-world applications like FORTRESS.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">Safety-Critical Systems</Badge>
                      <Badge variant="outline">Formal Methods</Badge>
                      <Badge variant="outline">Deep Learning Architecture</Badge>
                      <Badge variant="outline">AlphaZero/Transformers</Badge>
                      <Badge variant="outline">System 2 AI</Badge>
                      <Badge variant="outline">Air Traffic Control</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            </Card>
          </motion.div>
        </div>

        {/* Research Partners */}
        <div>
          <div className="text-center mb-12">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="mb-4 text-[24px] font-bold text-white">Research Partners</h3>
            <p className="max-w-2xl mx-auto text-center text-[16px] font-[Newsreader] text-white">
              Our technology is built on world-class research in collaboration with leading academic institutions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-12">
            {researchPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 card-hover-lift bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 bg-muted">
                        {partner.avatar ? (
                          <img src={partner.avatar} alt={partner.name} className="w-full h-full object-cover" />
                        ) : (
                          <GraduationCap className="h-8 w-8 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1 font-[Newsreader] text-white">{partner.name}</CardTitle>
                        <p className="text-sm mb-3 font-[Newsreader] text-white">{partner.role}</p>
                        <div className="flex items-center gap-3 flex-wrap">
                          {partner.affiliation.includes('Iowa State') ? (
                            <span className="text-sm font-[Newsreader] text-white">{partner.affiliation}</span>
                          ) : (
                            <Badge variant="outline">{partner.affiliation}</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    {partner.affiliation.includes('Iowa State') && (
                      <div className="flex-shrink-0">
                        <img 
                          src={isuLogo} 
                          alt="Iowa State University" 
                          className="h-20 w-auto object-contain"
                        />
                      </div>
                    )}
                    {/*partner.affiliation.includes('Purdue') && (
                      <div className="flex-shrink-0 flex flex-col gap-3 items-end">
                        <img 
                          src={purdueLogo} 
                          alt="Purdue University" 
                          className="h-16 w-auto object-contain bg-white p-3 rounded-lg"
                        />
                        {partner.affiliation.includes('RETHi') && (
                          <img 
                            src={rethiLogo} 
                            alt="RETHi Project" 
                            className="h-12 w-auto object-contain"
                          />
                        )}
                      </div>
                    )}
                    */}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Expertise: {partner.expertise}</p>
                    <p>{partner.bio}</p>
                  </div>
                  {partner.focus && (
                    <p>{partner.focus}</p>
                  )}
                  {partner.awards && (
                    <div>
                      <p className="font-medium mb-1">Awards & Recognition:</p>
                      <p>{partner.awards}</p>
                    </div>
                  )}
                  {partner.positions && (
                    <p>{partner.positions}</p>
                  )}
                  {partner.leadership && (
                    <p>{partner.leadership}</p>
                  )}
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>

          {/* Institution Logos */}
          <div className="text-center">
            <p className="text-sm mb-6 text-white">Partner Institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="px-6 py-4 bg-background rounded-lg border border-border flex items-center gap-4">
                <img 
                  src={isuLogo} 
                  alt="Iowa State University" 
                  className="h-16 w-auto object-contain rounded-[12px]"
                />
                <p className="text-white font-[Newsreader]">Iowa State University</p>
              </div>
              {/*
              <div className="px-6 py-4 bg-background rounded-lg border border-border flex items-center gap-4">
                <img 
                  src={purdueLogo} 
                  alt="Purdue University" 
                  className="h-16 w-auto object-contain bg-white p-3 rounded-lg"
                />
                <p className="font-[Newsreader] text-white">Purdue University</p>
              </div>
              <div className="px-6 py-4 bg-background rounded-lg border border-border flex items-center gap-4">
                <img 
                  src={rethiLogo} 
                  alt="RETHi Project" 
                  className="h-12 w-auto object-contain"
                />
                <p className="font-[Newsreader] text-white">RETHi Project</p>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}