import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useState } from 'react';
import { motion } from 'motion/react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert(`Message sent!\n\nThank you for contacting AFFEKTA. We'll get back to you within 1-2 business days.\n\nName: ${formData.name}\nEmail: ${formData.email}`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(`Failed to send message: ${data.error || 'Please try again.'}`);
      }
    } catch (error) {
      alert('Network error. Please check if the server is running and try again.');
      console.error('Error submitting contact form:', error);
    }
  };

  const faqs = [
    {
      question: 'What makes AFFEKTA different from other autonomous systems companies?',
      answer: 'We uniquely combine three critical technologies: formal methods for verifiable safety, Bayesian reasoning for uncertainty handling, and LLM-powered diagnostics. This integrated approach allows our systems to handle truly unprecedented situations—the "Unknown Unknowns" in life-critical systems where human expert assistance is impossible and full autonomy is required.',
    },
    {
      question: 'What is your business model?',
      answer: 'Our primary revenue model is B2G (government contracts), particularly NASA SBIR/STTR and defense contracts. We also pursue B2B partnerships where we adapt our core technology to private sector applications through custom solutions and technology licensing. We intend to patent our technology and generate revenue through patent licensing fees.',
    },
    {
      question: 'Do you offer consulting services or off-the-shelf products?',
      answer: 'No. We do not offer consulting services. We provide custom-engineered solutions where we adapt our core technology (developed under government grants) to solve specific customer problems. Each implementation is tailored to the unique requirements of the application, whether it\'s deep space habitats, offshore platforms, or other critical infrastructure.',
    },
    {
      question: 'What is your Technology Readiness Level (TRL)?',
      answer: 'We are currently advancing from TRL 2 to TRL 3 under NASA STTR Phase I funding. This means we have established proof-of-concept and are conducting experimental demonstrations. We plan to advance to TRL 5-6 in Phase II with full system integration and validation in relevant environments.',
    },
    {
      question: 'What is the NSF I-Corps program and how is AFFEKTA involved?',
      answer: 'AFFEKTA has been selected for the NSF I-Corps program, where we will interview 100+ private sector executives to identify our beachhead market for commercial applications. This market validation, along with letters of support and potential contracts, will strengthen our NASA STTR Phase II application. If you\'re a decision-maker in industries with critical autonomous systems, we may reach out for a brief interview.',
    },
    {
      question: 'How does aging equipment and "Unknown Unknowns" relate to your technology?',
      answer: 'Our technology addresses systems where equipment degrades unpredictably (metal fatigue, radiation damage, thermal cycling) and failures cascade in unforeseen ways. Traditional fault trees can\'t anticipate all failure modes. Our systems reason about novel situations—like when a worn bearing creates vibrations that affect sensors in unexpected ways, or when multiple minor degradations combine to create system-level failures no designer anticipated.',
    },
    {
      question: 'What industries can benefit from your technology?',
      answer: 'Any critical infrastructure operating autonomously or with limited expert support: offshore oil platforms, submarines, autonomous drones, smart buildings, satellites, water treatment facilities, and more. The common thread is the need to handle unforeseen events, aging equipment, and situations where immediate expert assistance is impossible.',
    },
    {
      question: 'Are you seeking investors?',
      answer: 'We are not actively seeking investment at this time. We plan to pursue equity funding toward the end of Phase I (Q3-Q4 2025) after demonstrating key technical milestones and commercial validation. We welcome early introductions from strategic investors to allow monitoring of our progress.',
    },
    {
      question: 'Are you hiring?',
      answer: 'Yes! We\'re actively looking for exceptional engineers and researchers in formal methods, machine learning, and autonomous systems. Check our Careers section for open positions.',
    },
  ];

  return (
    <section id="contact" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl mb-8 text-white px-4 text-center">
            Let's solve
            <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              unprecedented challenges
            </span>
            together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-4xl mb-8 text-white">Contact Information</h3>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  link: 'info@affekta.com',
                  href: 'mailto:info@affekta.com',
                  description: 'General inquiries'
                },
                {
                  icon: MessageCircle,
                  title: 'Business Development',
                  link: 'partnerships@affekta.com',
                  href: 'mailto:partnerships@affekta.com',
                  description: 'Partnership opportunities'
                },
                {
                  icon: Send,
                  title: 'Careers',
                  link: 'careers@affekta.com',
                  href: 'mailto:careers@affekta.com',
                  description: 'Job applications'
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  link: 'United States',
                  description: 'Remote-first organization'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="relative p-6 rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="h-6 w-6" />
                        </motion.div>
                        <div>
                          <p className="text-white mb-2 text-lg">{item.title}</p>
                          {item.href ? (
                            <a href={item.href} className="text-primary hover:underline text-base">
                              {item.link}
                            </a>
                          ) : (
                            <p className="text-white text-base">{item.link}</p>
                          )}
                          <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-4xl mb-8 text-white">Send Us a Message</h3>
            <div className="relative p-8 rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
              {/*
TEMPORARILY DISABLED: Backend contact form

Reason:
- Backend API is not yet deployed
- Prevents broken form submissions on live site

TODO:
- Re-enable form after backend is deployed
- Set VITE_API_URL in Netlify environment variables

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@company.com"
                      className="text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="text-white"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="text-white"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full text-lg py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
                */}
<div className="text-white space-y-4">
  <p className="text-lg">
    To get in touch, please email us directly:
  </p>
  <ul className="space-y-2">
    <li>
      General: <a href="mailto:hedinn@affekta.com" className="text-primary underline">hedinn@affekta.com</a>
    </li>
    <li>
      Partnerships: <a href="mailto:sales@affekta.com" className="text-primary underline">sales@affekta.com</a>
    </li>
    <li>
      Careers: <a href="mailto:jobs@affekta.com" className="text-primary underline">jobs@affekta.com</a>
    </li>
  </ul>
</div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-5xl sm:text-6xl mb-6 text-white">
              Frequently Asked
              <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                Questions
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about AFFEKTA, our technology, and how we work with partners
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="relative border border-border/40 rounded-2xl px-8 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <AccordionTrigger className="hover:no-underline text-white text-lg py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
