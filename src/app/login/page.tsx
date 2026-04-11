'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FormContainer from '@/components/FormContainer';
import InputField from '@/components/InputField';
import Button from '@/components/Button';

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ identifier?: string; password?: string; general?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!identifier.trim()) {
      newErrors.identifier = 'Email or Phone is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrors({});

    // Simulate API delay
    setTimeout(() => {
      try {
        const storedUser = localStorage.getItem('user');
        
        if (!storedUser) {
          // Fallback dummy check if no user registered, just for demo purposes (optional)
          if (identifier === 'demo' && password === 'demo') {
             localStorage.setItem('user', JSON.stringify({ name: 'Demo User', identifier: 'demo' }));
             router.push('/dashboard');
             return;
          }
          setErrors({ general: 'Invalid credentials or user not found. Try signing up.' });
          setLoading(false);
          return;
        }

        const user = JSON.parse(storedUser);
        
        // Check if identifier matches stored email or phone
        const identifierMatches = 
          user.email === identifier || 
          user.phone === identifier || 
          user.identifier === identifier || // if we used single identifier field before
          identifier === 'demo';

        if (identifierMatches && user.password === password) {
          router.push('/dashboard');
        } else {
          setErrors({ general: 'Invalid email/phone or password.' });
        }
      } catch (err) {
        setErrors({ general: 'An error occurred during login.' });
      } finally {
        setLoading(false);
      }
    }, 1200);
  };

  const isEmail = identifier.includes('@');
  const inputHint = identifier.length > 3 ? (isEmail ? "Detected: Email" : "Detected: Phone") : undefined;

  return (
    <FormContainer 
      title="Welcome Back" 
      subtitle="Login to continue your spiritual journey."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {errors.general && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium text-center">
            {errors.general}
          </div>
        )}

        <InputField
          label="Email or Phone"
          type={isEmail ? 'email' : 'text'}
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="Enter your email or phone number"
          error={errors.identifier}
          hint={inputHint}
        />
        
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          error={errors.password}
        />

        <div className="flex justify-end pt-1 pb-4">
           <Link href="#" className="text-sm font-medium text-[#D98C40] hover:text-[#C27A34] transition-colors">
              Forgot Password?
           </Link>
        </div>

        <Button type="submit" fullWidth isLoading={loading}>
          Login
        </Button>

        <div className="text-center mt-6 text-sm text-brand-brown-light">
          Don't have an account?{' '}
          <Link href="/signup" className="font-semibold text-[#D98C40] hover:text-[#C27A34] transition-colors">
            Create Account
          </Link>
        </div>
      </form>
    </FormContainer>
  );
}
