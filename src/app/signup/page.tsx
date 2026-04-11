'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FormContainer from '@/components/FormContainer';
import InputField from '@/components/InputField';
import Button from '@/components/Button';

export default function SignupPage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof formData> & { general?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear cross-field errors
    if (e.target.name === 'email' || e.target.name === 'phone') {
       setErrors((prev) => ({ ...prev, email: undefined, phone: undefined, general: undefined }));
    } else {
       setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
      isValid = false;
    }

    // At least one of Email or Phone
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.email = 'Email or Phone is required';
      newErrors.phone = 'Email or Phone is required';
      isValid = false;
    } else {
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email format';
        isValid = false;
      }
      // Simple phone validation check if it has some digits at least
      if (formData.phone && !/^[0-9+\s\-()]{7,15}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
        isValid = false;
      }
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      // Dummy logic: Save user in localStorage
      localStorage.setItem('user', JSON.stringify({
        id: 'u_' + Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password, // Storing purely for dummy login validation
      }));
      
      setLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <FormContainer 
      title="Create Account" 
      subtitle="Begin your learning path with Paratattva."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {errors.general && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium text-center">
            {errors.general}
          </div>
        )}

        <InputField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Hrishikesh Das"
          error={errors.name}
        />

        <div className="bg-brand-brown/5 p-4 rounded-xl border border-brand-brown/10 mb-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-brown-light mb-3 text-center">
            Provide Email OR Phone
          </p>
          <div className="flex flex-col gap-4">
            <InputField
              label="Email Address (Optional)"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              error={errors.email}
            />
            
            <div className="relative flex items-center py-1">
              <div className="flex-grow border-t border-brand-brown/10"></div>
              <span className="flex-shrink-0 mx-4 text-brand-brown-light/50 text-xs font-medium uppercase">OR</span>
              <div className="flex-grow border-t border-brand-brown/10"></div>
            </div>

            <InputField
              label="Phone Number (Optional)"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              error={errors.phone}
            />
          </div>
        </div>
        
        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create a strong password"
          error={errors.password}
        />

        <div className="pt-4">
          <Button type="submit" fullWidth isLoading={loading}>
            Create Account
          </Button>
        </div>

        <div className="text-center mt-4 text-sm text-brand-brown-light">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-[#D98C40] hover:text-[#C27A34] transition-colors">
            Login
          </Link>
        </div>
      </form>
    </FormContainer>
  );
}
