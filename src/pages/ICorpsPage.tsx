import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, CheckCircle2, Target, Users, Lightbulb, Building2, MessageSquare, Clock } from 'lucide-react';
import { useState } from 'react';
import { CalendarBooking } from '../components/CalendarBooking';
import iCorpsLogo from 'figma:asset/05cde95de9a47c905de30ee81fdf453436cd4d66.png';

export function ICorpsPage() {
  const [showCalendar, setShowCalendar] = useState(false);

  const targetIndustries = [
    {
      icon: Building2,
      title: 'Offshore Oil & Gas',
      description: 'Remote platforms with aging equipment and limited expert support'
    },
    {
      icon: Building2,
      title: 'Maritime & Submarines',
      description: 'Autonomous operations in isolated underwater environments'
    },
    {
      icon: Building2,
      title: 'Unmanned Systems',
      description: 'Drones, UAVs, and autonomous vehicles in unpredictable conditions'
    },
    {
      icon: Building2,
      title: 'Building Management',
      description: 'Smart buildings with complex HVAC and critical infrastructure'
    },
    {
      icon: Building2,
      title: 'Healthcare Systems',
      description: 'Life-critical medical equipment and patient monitoring'
    },
    {
      icon: Building2,
      title: 'Satellites & Space',
      description: 'Orbital assets requiring autonomous fault detection and recovery'
    },
  ];

  const interviewTopics = [
    'Your current challenges with equipment failures and unexpected events',
    'How decisions are made when expert support is unavailable',
    'The cost and impact of unplanned downtime in your operations',
    'Existing automation or autonomous systems you currently use',
    'Safety requirements and regulatory constraints in your industry',
    'Your vision for autonomous decision-making in your domain'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MTIyODY2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="I-Corps Collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-8 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="space-y-8">
              {/* I-Corps Logo and Badge */}
              <div className="flex items-center gap-6 mt-6 sm:mt-8 lg:mt-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                  <img 
                    src={iCorpsLogo} 
                    alt="NSF I-Corps" 
                    className="relative h-16 sm:h-20 lg:h-24"
                    style={{
                      filter: 'drop-shadow(0 8px 24px rgba(0,113,227,0.4)) brightness(1.15) contrast(1.05)'
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Badge className="text-base px-5 py-2 bg-primary/10 border-primary/30 text-primary w-fit">
                    Selected 2025
                  </Badge>
                  <p className="text-sm text-gray-400">Innovation Corps Program</p>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] text-[36px] w-full">
                  Help Shape the Future of
                  <span className="block mt-3 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                    Autonomous Systems
                  </span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
              </div>
            </div>
            <p className="text-xl text-white mb-8 max-w-5xl">
              AFFEKTA is conducting 100+ interviews with industry leaders to validate commercial 
              applications of our NASA-developed technology for handling unpredictability
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => setShowCalendar(!showCalendar)}
                className="text-lg px-8 py-6 shadow-2xl shadow-primary/30"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Interview
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#about-icorps');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-lg px-8 py-6 glass-effect text-[rgb(10,132,255)]"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
      {showCalendar && (
        <section className="py-12 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <CalendarBooking />
          </div>
        </section>
      )}

      {/* What is I-Corps */}
      <section id="about-icorps" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-6 text-white">What is NSF I-Corps?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              The National Science Foundation Innovation Corps (I-Corps) program helps research teams 
              translate their discoveries into commercial impact through customer discovery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Goal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Identify the beachhead market—the first non-governmental or private sector market 
                    where our autonomous systems technology can create the most value
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>100+ Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're speaking with executives, engineers, and decision-makers across multiple 
                    safety-critical industries to understand real-world challenges with unpredictability
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Your Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your insights help us transition NASA-funded research into commercial solutions 
                    that solve real problems in your industry
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-6 text-white">Industries We're Exploring</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We're particularly interested in speaking with leaders from these safety-critical domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-hover-lift border-2 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <industry.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{industry.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{industry.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Don't see your industry listed? We're open to exploring any domain with safety-critical operations 
              that face unpredictability and limited expert support.
            </p>
            <Button 
              size="lg"
              onClick={() => setShowCalendar(true)}
            >
              Still Interested? Schedule a Call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl mb-6 text-white">What to Expect</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white">20-30 Minute Conversation</h3>
                    <p className="text-muted-foreground">
                      Brief, focused discussion that respects your time. Can be conducted via video call or phone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white">Listen, Not Pitch</h3>
                    <p className="text-muted-foreground">
                      We're here to learn from you, not sell to you. This is about understanding your challenges, 
                      not presenting a product.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-white">Confidential & Valuable</h3>
                    <p className="text-muted-foreground">
                      Your insights remain confidential. Many interviewees find the conversation valuable for 
                      clarifying their own operational challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-2xl border border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Note:</span> Participation in I-Corps interviews 
                  does not create any obligation. This is purely educational research to inform our technology 
                  development and commercialization strategy.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Discussion Topics</CardTitle>
                  <CardDescription>
                    Sample questions we might explore together
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {interviewTopics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-primary">{index + 1}</span>
                        </div>
                        <p className="text-muted-foreground">{topic}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwd29ya3Nob3AlMjB0ZWFtfGVufDF8fHx8MTc2MTE0Nzg5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Innovation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl mb-6 text-white">
              Ready to Share Your Insights?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Help us understand how autonomous systems can solve real-world challenges in your industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setShowCalendar(true)}
                className="text-lg px-8 py-6 shadow-2xl shadow-primary/30"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Your Interview
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/contact'}
                className="text-lg px-8 py-6 glass-effect text-[rgb(10,132,255)]"
              >
                Contact Us with Questions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
