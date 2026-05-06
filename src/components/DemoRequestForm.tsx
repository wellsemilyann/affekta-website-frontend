import { useState } from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';

interface DemoFormData {
  name: string;
  email: string;
  company: string;
  title: string;
  phone: string;
  industry: string;
  companySize: string;
  useCase: string;
  timeline: string;
  budget: string;
  challenges: string;
}

export function DemoRequestForm() {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<DemoFormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: DemoFormData) => {
    console.log('Demo Request:', data);
    alert(`Demo request submitted!\n\nWe'll review your information and get back to you within 2 business days.\n\nCompany: ${data.company}\nIndustry: ${data.industry}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border rounded-lg p-6 bg-background text-center">
        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="mb-2">Request Submitted</h4>
        <p>
          Thank you for your interest. Our team will review your submission and contact you within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-6 bg-background">
      <h4 className="mb-4">Demo Request Qualification Form</h4>
      <p className="text-sm mb-6">
        Please provide detailed information to help us understand your needs and qualify your request.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="demo-name">Full Name *</Label>
            <Input
              id="demo-name"
              {...register('name', { required: 'Name is required' })}
              placeholder="John Doe"
            />
            {errors.name && <span className="text-xs text-destructive">{errors.name.message}</span>}
          </div>

          <div>
            <Label htmlFor="demo-email">Email *</Label>
            <Input
              id="demo-email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="john@company.com"
            />
            {errors.email && <span className="text-xs text-destructive">{errors.email.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="demo-company">Company/Organization *</Label>
            <Input
              id="demo-company"
              {...register('company', { required: 'Company is required' })}
              placeholder="ACME Corporation"
            />
            {errors.company && <span className="text-xs text-destructive">{errors.company.message}</span>}
          </div>

          <div>
            <Label htmlFor="demo-title">Job Title *</Label>
            <Input
              id="demo-title"
              {...register('title', { required: 'Title is required' })}
              placeholder="CTO"
            />
            {errors.title && <span className="text-xs text-destructive">{errors.title.message}</span>}
          </div>
        </div>

        <div>
          <Label htmlFor="demo-phone">Phone Number</Label>
          <Input
            id="demo-phone"
            type="tel"
            {...register('phone')}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="demo-industry">Industry *</Label>
            <select
              id="demo-industry"
              {...register('industry', { required: 'Industry is required' })}
              className="w-full h-10 px-3 rounded-md border border-input bg-input-background"
            >
              <option value="">Select industry</option>
              <option value="aerospace">Aerospace & Defense</option>
              <option value="maritime">Maritime & Offshore</option>
              <option value="energy">Energy & Utilities</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="other">Other</option>
            </select>
            {errors.industry && <span className="text-xs text-destructive">{errors.industry.message}</span>}
          </div>

          <div>
            <Label htmlFor="demo-company-size">Company Size *</Label>
            <select
              id="demo-company-size"
              {...register('companySize', { required: 'Company size is required' })}
              className="w-full h-10 px-3 rounded-md border border-input bg-input-background"
            >
              <option value="">Select size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-1000">201-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
            {errors.companySize && <span className="text-xs text-destructive">{errors.companySize.message}</span>}
          </div>
        </div>

        <div>
          <Label htmlFor="demo-use-case">Describe Your Use Case *</Label>
          <Textarea
            id="demo-use-case"
            {...register('useCase', { required: 'Use case is required' })}
            placeholder="Describe the specific problem or application you're looking to address..."
            rows={4}
          />
          {errors.useCase && <span className="text-xs text-destructive">{errors.useCase.message}</span>}
        </div>

        <div>
          <Label htmlFor="demo-challenges">Key Technical Challenges</Label>
          <Textarea
            id="demo-challenges"
            {...register('challenges')}
            placeholder="What are the main technical challenges you're facing?"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="demo-timeline">Implementation Timeline *</Label>
            <select
              id="demo-timeline"
              {...register('timeline', { required: 'Timeline is required' })}
              className="w-full h-10 px-3 rounded-md border border-input bg-input-background"
            >
              <option value="">Select timeline</option>
              <option value="immediate">Immediate (0-3 months)</option>
              <option value="short">Short-term (3-6 months)</option>
              <option value="medium">Medium-term (6-12 months)</option>
              <option value="long">Long-term (12+ months)</option>
            </select>
            {errors.timeline && <span className="text-xs text-destructive">{errors.timeline.message}</span>}
          </div>

          <div>
            <Label htmlFor="demo-budget">Budget Range</Label>
            <select
              id="demo-budget"
              {...register('budget')}
              className="w-full h-10 px-3 rounded-md border border-input bg-input-background"
            >
              <option value="">Select range</option>
              <option value="<100k">Less than $100K</option>
              <option value="100k-500k">$100K - $500K</option>
              <option value="500k-1m">$500K - $1M</option>
              <option value="1m+">$1M+</option>
              <option value="tbd">To be determined</option>
            </select>
          </div>
        </div>

        <div className="flex items-start gap-2 pt-2">
          <Checkbox id="demo-terms" required />
          <Label htmlFor="demo-terms" className="text-sm">
            I confirm that I have the authority to discuss potential partnerships on behalf of my organization
          </Label>
        </div>

        <Button type="submit" className="w-full">
          Submit Demo Request
        </Button>
      </form>
    </div>
  );
}
