import { Calendar, FileText, Users, TrendingUp, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';
import { CalendarBooking } from './CalendarBooking';
import { DemoRequestForm } from './DemoRequestForm';

export function EngagementSection() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);

  const stakeholders = [
    {
      icon: Briefcase,
      title: 'I-Corps Interviews',
      description: 'NSF I-Corps program participants',
      badge: 'Active Program',
      content: (
        <div className="space-y-4">
          <p className="text-gray-200">
            AFFEKTA has been selected for the NSF I-Corps program. We're conducting 100+ interviews with private 
            sector business executives and stakeholders to identify our beachhead market for commercial applications 
            of our NASA-developed technology.
          </p>
          <div className="bg-card rounded-lg p-6 border border-border">
            <h4 className="mb-3">For Invited Industry Executives</h4>
            <p className="mb-4">
              If you've been contacted for an I-Corps interview, we'd value your insights on how autonomous systems 
              for handling "Unknown Unknowns" could apply to your industry. Interviews are brief (20-30 minutes) and 
              focused on understanding your operational challenges.
            </p>
            <Button onClick={() => setShowCalendar(!showCalendar)} className="w-full sm:w-auto">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule I-Corps Interview
            </Button>
            {showCalendar && (
              <div className="mt-6">
                <CalendarBooking />
              </div>
            )}
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-white">
              <span className="font-medium">Program Goal:</span> The I-Corps interviews will inform our Phase II 
              STTR application, helping us demonstrate commercial viability and potential industry partnerships.
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: TrendingUp,
      title: 'Private Sector Partners',
      description: 'Purchase our technology',
      badge: 'Buy Solutions',
      content: (
        <div className="space-y-4">
          <div className="bg-primary/5 rounded-lg p-6 border-2 border-primary/20 mb-4">
            <h4 className="text-xl mb-3 text-white">For Company Representatives Looking to Buy Our Technology</h4>
            <p className="text-gray-200">
              If you're a business decision-maker interested in acquiring or licensing AFFEKTA's autonomous systems 
              technology for your organization, this section is for you. We offer three engagement models:
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 border border-border">
            <h4 className="mb-3 text-white">How to Acquire Our Technology</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="font-medium mb-1">Custom Solutions</p>
                <p className="text-sm text-gray-200">
                  Tailored autonomous systems adapted from our core NASA technology to your specific application
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">Technology Licensing</p>
                <p className="text-sm text-gray-200">
                  Patent licensing for integration of our core technologies into your products
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">B2B Partnerships</p>
                <p className="text-sm text-gray-200">
                  Project-based collaborations for industry-specific implementations
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-200">
            We do not offer off-the-shelf products or consulting services. Each engagement involves adapting our 
            core technology (developed under NASA grants) to solve your specific business challenges in handling 
            unknown unknowns, aging equipment, and autonomous operations.
          </p>

          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm mb-3">
              <span className="font-medium">Ideal for organizations with:</span>
            </p>
            <ul className="text-sm text-gray-200 space-y-1">
              <li>• Critical infrastructure operating autonomously or with limited expert support</li>
              <li>• Systems that must handle aging equipment and unexpected failures</li>
              <li>• Operations in isolated environments (offshore, underwater, remote)</li>
              <li>• Need for verifiable safety and reliability in autonomous decision-making</li>
            </ul>
          </div>

          <Button onClick={() => setShowDemoForm(!showDemoForm)} variant="outline" className="w-full sm:w-auto">
            <FileText className="mr-2 h-4 w-4" />
            Request Qualification Assessment
          </Button>
          {showDemoForm && (
            <div className="mt-6">
              <DemoRequestForm />
            </div>
          )}
        </div>
      ),
    },
    {
      icon: Award,
      title: 'Government Grants',
      description: 'B2G contracts & funding',
      badge: 'Primary Revenue',
      content: (
        <div className="space-y-4">
          <p className="text-gray-200">
            Our primary business model is governmental contracts (B2G), particularly through SBIR/STTR programs 
            and defense/aerospace procurement. We develop advanced autonomous systems for mission-critical 
            government applications.
          </p>
          
          <div className="bg-card rounded-lg p-6 border border-border">
            <h4 className="mb-3 text-white">Current Government Engagement</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">NASA STTR Phase I (Active)</p>
                  <p className="text-sm text-gray-200">
                    Developing autonomous decision-making systems for deep space habitats and life support systems
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phase II Preparation (Q3 2025)</p>
                  <p className="text-sm text-gray-200">
                    Advancing to full system integration with industry partnerships and commercial validation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">DOD-Funded AI Research</p>
                  <p className="text-sm text-gray-200">
                    Ongoing research in AI architecture improvements for logical reasoning and safety
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-white">
              <span className="font-medium">For Grant Reviewers & Program Managers:</span> This website serves as 
              supporting documentation for our grant applications, demonstrating our team's capabilities, research 
              partnerships, and technology development progress.
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: Award,
      title: 'Investors',
      description: 'Strategic equity partnerships',
      badge: 'Future Phase',
      content: (
        <div className="space-y-4">
          <div className="bg-accent/50 rounded-lg p-6 border border-border">
            <h4 className="mb-3 text-white">Investment Timeline</h4>
            <p className="text-gray-200 mb-4">
              We are not actively seeking investment at this time. We plan to pursue equity funding toward the end 
              of NASA STTR Phase I (approximately Q3-Q4 2025), after demonstrating significant technical milestones 
              and commercial validation through I-Corps.
            </p>
            <p className="text-gray-200">
              However, we welcome early introductions from strategic investors interested in deep-tech, aerospace, 
              and autonomous systems. This allows potential investors to monitor our progress and make informed 
              decisions when we begin fundraising.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium mb-2">Current Focus</p>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>• Completing Phase I technical milestones</li>
                <li>• I-Corps market validation (100+ interviews)</li>
                <li>• Building industry partnerships</li>
                <li>• Patent filing and IP protection</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <p className="font-medium mb-2">Future Investment Use</p>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>• Scale commercial deployments</li>
                <li>• Expand team (AI/ML, formal methods)</li>
                <li>• Accelerate product development</li>
                <li>• Market expansion beyond aerospace</li>
              </ul>
            </div>
          </div>

          <Button 
            variant="outline" 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto"
          >
            Contact for Investor Relations
          </Button>
        </div>
      ),
    },
    {
      icon: GraduationCap,
      title: 'NASA & Research Community',
      description: 'Academic & technical collaboration',
      badge: 'Collaboration',
      content: (
        <div className="space-y-4">
          <p className="text-gray-200">
            We maintain active collaborations with NASA researchers and academic institutions. Our work directly 
            supports NASA's deep space exploration goals and contributes to the broader aerospace research community.
          </p>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h4 className="mb-3 text-white">Research Partnerships</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium mb-1">Iowa State University</p>
                <p className="text-sm text-gray-200">
                  Prof. Kristin Rozier - Formal methods and runtime verification for spacecraft autonomy
                </p>
              </div>
              {/*
              <div>
                <p className="font-medium mb-1">Purdue University RETHi</p>
                <p className="text-sm text-gray-200">
                  Prof. Shirley Dyke - Resilient extra-terrestrial habitats and cyber-physical systems integration
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">Purdue University</p>
                <p className="text-sm text-gray-200">
                  Prof. Ilias Bilionis - Bayesian methods and predictive science for complex systems
                </p>
              </div>
              */}
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-white">
              <span className="font-medium">For NASA Researchers:</span> We welcome collaboration opportunities, 
              technical discussions, and knowledge sharing. Our team regularly participates in NASA conferences 
              and working groups focused on autonomous systems and deep space missions.
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: Users,
      title: 'Join Our Team',
      description: 'Career opportunities',
      badge: 'Hiring',
      content: (
        <div className="space-y-4">
          <p className="text-gray-200">
            We're building a world-class team of engineers and researchers passionate about advancing autonomous 
            systems for humanity's most challenging environments.
          </p>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h4 className="mb-3 text-white">Open Positions</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Senior Formal Methods Engineer</p>
                  <p className="text-sm text-gray-200">
                    Lead development of verification frameworks for autonomous spacecraft systems
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Machine Learning Research Scientist</p>
                  <p className="text-sm text-gray-200">
                    Research Bayesian inference and LLM-based reasoning for autonomous decision-making
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Autonomous Systems Software Engineer</p>
                  <p className="text-sm text-gray-200">
                    Build cyber-physical systems for real-time autonomous operations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => {
              window.location.href = '/careers';
            }}
            className="w-full sm:w-auto"
          >
            View All Positions
          </Button>
        </div>
      ),
    },
  ];

  return (
    <section id="engagement" className="py-20 bg-[#0c1117] relative overflow-hidden">
      {/* Wave pattern background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1117] via-[#14181f] to-[#0c1117]" />
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(5)].map((_, i) => (
            <path
              key={`wave-${i}`}
              d={`M0 ${i * 25 + 20} Q 25 ${i * 25 + 10}, 50 ${i * 25 + 20} T 100 ${i * 25 + 20}`}
              fill="none"
              stroke="#0071e3"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">Engagement</Badge>
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl text-white px-4">Connect With AFFEKTA</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Whether you're a potential partner, researcher, investor, or team member—find the right way to engage with our mission.
          </p>
        </div>

        {/* Stakeholder Tabs */}
        <Tabs defaultValue="icorps" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto">
            {stakeholders.map((stakeholder, index) => (
              <TabsTrigger 
                key={index} 
                value={stakeholder.title.toLowerCase().replace(/\s+/g, '-')}
                className="flex flex-col items-center gap-1 py-3"
              >
                <stakeholder.icon className="h-4 w-4" />
                <span className="text-xs text-white">{stakeholder.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {stakeholders.map((stakeholder, index) => (
            <TabsContent 
              key={index} 
              value={stakeholder.title.toLowerCase().replace(/\s+/g, '-')}
              className="mt-8"
            >
              <Card className="border-2 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <stakeholder.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>{stakeholder.title}</CardTitle>
                        <CardDescription>{stakeholder.description}</CardDescription>
                      </div>
                    </div>
                    <Badge>{stakeholder.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {stakeholder.content}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Extended Business Card Notice */}
        <div className="mt-12 bg-card rounded-lg p-6 border border-border text-center">
          <h4 className="mb-2 text-white">Professional Introduction</h4>
          <p className="text-gray-200">
            This website serves as an extended business card for presentations, conferences (including AI in Space at 
            the Ion, Houston), and professional networking. We use it to provide comprehensive information to stakeholders 
            we meet in various professional contexts.
          </p>
        </div>
      </div>
    </section>
  );
}