import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ArrowRight, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

type ChatStep = 'initial' | 'industry-select' | 'confirmation' | 'completed' | 'contact';

const industries = [
  'Aerospace',
  'Oil & Gas',
  'Healthcare',
  'Infrastructure',
  'Space & Satellites',
  'Manufacturing',
  'Other'
];

export function MediaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>('initial');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const navigate = useNavigate();

  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
    setStep('confirmation');
  };

  const handleYes = () => {
    setStep('completed');
    setTimeout(() => {
      setIsOpen(false);
      navigate('/industries');
      // Reset after navigation
      setTimeout(() => {
        setStep('initial');
        setSelectedIndustry('');
      }, 500);
    }, 1000);
  };

  const handleNo = () => {
    setStep('completed');
    setTimeout(() => {
      setIsOpen(false);
      // Reset after closing
      setTimeout(() => {
        setStep('initial');
        setSelectedIndustry('');
      }, 500);
    }, 1000);
  };

  const handleContactUs = () => {
    setStep('contact');
    setTimeout(() => {
      setIsOpen(false);
      navigate('/contact');
      // Reset after navigation
      setTimeout(() => {
        setStep('initial');
        setSelectedIndustry('');
      }, 500);
    }, 1000);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setStep('industry-select');
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep('initial');
      setSelectedIndustry('');
    }, 300);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={handleOpen}
              size="lg"
              className="group h-16 rounded-full shadow-2xl shadow-primary/30 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 px-8"
            >
              <MessageCircle className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg">Media</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] z-50"
          >
            <div className="bg-background/95 backdrop-blur-xl border border-border/60 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-purple-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white">AFFEKTA Media</div>
                    <div className="text-white/70 text-xs">Always here to help</div>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Chat Content */}
              <div className="p-6 max-h-[500px] overflow-y-auto space-y-4">
                {/* Initial Greeting */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs">
                    A
                  </div>
                  <div className="bg-secondary/60 backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                    <p className="text-white text-sm leading-relaxed">
                      Welcome! We'd love to learn more about your industry.
                    </p>
                  </div>
                </motion.div>

                {/* Industry Selection Step */}
                {step === 'industry-select' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="bg-secondary/60 backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 mb-3">
                        <p className="text-white text-sm leading-relaxed">
                          Which industry are you interested in?
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {industries.map((industry) => (
                          <Button
                            key={industry}
                            onClick={() => handleIndustrySelect(industry)}
                            variant="outline"
                            size="sm"
                            className="justify-start hover:bg-primary/20 hover:border-primary/40 transition-all text-white border-border/40"
                          >
                            {industry}
                          </Button>
                        ))}
                      </div>
                      
                      {/* Contact Us Button */}
                      <div className="pt-3 border-t border-border/20">
                        <Button
                          onClick={handleContactUs}
                          variant="outline"
                          size="sm"
                          className="w-full justify-center hover:bg-primary/20 hover:border-primary/40 transition-all text-white border-border/40 border-dashed"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* User Selection (shown after they pick) */}
                {selectedIndustry && (step === 'confirmation' || step === 'completed') && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3 justify-end"
                  >
                    <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
                      <p className="text-white text-sm">{selectedIndustry}</p>
                    </div>
                  </motion.div>
                )}

                {/* Confirmation Step */}
                {step === 'confirmation' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="bg-secondary/60 backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 mb-3">
                        <p className="text-white text-sm leading-relaxed">
                          Great choice! Would you like to see how our technology applies to {selectedIndustry}?
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={handleYes}
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
                        >
                          Yes, show me
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          onClick={handleNo}
                          variant="outline"
                          size="sm"
                          className="flex-1 border-border/40 text-white hover:bg-secondary/40"
                        >
                          No, thanks
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Completed Step */}
                {step === 'completed' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs">
                      A
                    </div>
                    <div className="bg-secondary/60 backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-white text-sm leading-relaxed">
                        Thank you for your interest! Feel free to reach out anytime.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Contact Step */}
                {step === 'contact' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs">
                      A
                    </div>
                    <div className="bg-secondary/60 backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                      <p className="text-white text-sm leading-relaxed">
                        Perfect! I'll take you to our contact page where you can reach out to our team.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
