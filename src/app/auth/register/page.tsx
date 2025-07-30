'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    chineseName: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    graduationYear: '',
    phone: '',
    skills: '',
    hobby: '',
    closeTeacher: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (formData.graduationYear && (
      parseInt(formData.graduationYear) < 1950 || 
      parseInt(formData.graduationYear) > new Date().getFullYear()
    )) {
      newErrors.graduationYear = 'Please enter a valid graduation year'
    }

    if (formData.phone && !/^[\+]?[0-9\s\-\(\)]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          chineseName: formData.chineseName || undefined,
          nickname: formData.nickname || undefined,
          email: formData.email,
          password: formData.password,
          graduationYear: formData.graduationYear ? parseInt(formData.graduationYear) : undefined,
          phone: formData.phone || undefined,
          skills: formData.skills || undefined,
          hobby: formData.hobby || undefined,
          closeTeacher: formData.closeTeacher || undefined,
        }),
      })

      if (response.ok) {
        router.push('/auth/login?message=Registration successful! Please log in.')
      } else {
        const data = await response.json()
        setErrors({ general: data.error || 'Registration failed' })
      }
    } catch (error) {
      setErrors({ general: 'An error occurred. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Join ATS Alumni</h2>
          <p className="mt-2 text-gray-600">
            Connect with fellow Aberdeen Technical School graduates
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Your Account</CardTitle>
            <CardDescription>
              Fill in your details to join our alumni community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.general && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                  {errors.general}
                </div>
              )}

              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Basic Information</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'border-red-300' : ''}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="chineseName" className="block text-sm font-medium text-gray-700 mb-1">
                    Chinese Name (中文姓名)
                  </label>
                  <Input
                    id="chineseName"
                    name="chineseName"
                    type="text"
                    value={formData.chineseName}
                    onChange={handleChange}
                    placeholder="Enter your Chinese name (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-1">
                    Nickname
                  </label>
                  <Input
                    id="nickname"
                    name="nickname"
                    type="text"
                    value={formData.nickname}
                    onChange={handleChange}
                    placeholder="What do friends call you? (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'border-red-300' : ''}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'border-red-300' : ''}
                    placeholder="+852 9123 4567 (optional)"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* School Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2">School Information</h3>
                
                <div>
                  <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-1">
                    Graduation Year
                  </label>
                  <Input
                    id="graduationYear"
                    name="graduationYear"
                    type="number"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className={errors.graduationYear ? 'border-red-300' : ''}
                    placeholder="e.g., 1995"
                    min="1950"
                    max={new Date().getFullYear()}
                  />
                  {errors.graduationYear && (
                    <p className="mt-1 text-sm text-red-600">{errors.graduationYear}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="closeTeacher" className="block text-sm font-medium text-gray-700 mb-1">
                    Close Teacher
                  </label>
                  <Input
                    id="closeTeacher"
                    name="closeTeacher"
                    type="text"
                    value={formData.closeTeacher}
                    onChange={handleChange}
                    placeholder="e.g., Mr. Wong Siu Ming (Computer Science)"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Which teacher had the most impact on you?
                  </p>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Personal Information</h3>
                
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                    Skills & Expertise
                  </label>
                  <Input
                    id="skills"
                    name="skills"
                    type="text"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g., JavaScript, Project Management, AutoCAD"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Separate multiple skills with commas
                  </p>
                </div>

                <div>
                  <label htmlFor="hobby" className="block text-sm font-medium text-gray-700 mb-1">
                    Hobbies & Interests
                  </label>
                  <textarea
                    id="hobby"
                    name="hobby"
                    value={formData.hobby}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    rows={3}
                    placeholder="e.g., Photography, Hiking, Reading, Cooking..."
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    What do you enjoy doing in your free time?
                  </p>
                </div>
              </div>

              {/* Security */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Security</h3>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password *
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      className={errors.password ? 'border-red-300 pr-10' : 'pr-10'}
                      placeholder="Create a password (min. 8 characters)"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password *
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'border-red-300' : ''}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="text-blue-600 hover:text-blue-800 font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-gray-500">
          By creating an account, you agree to our{' '}
          <Link href="/terms" className="text-blue-600 hover:text-blue-800">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}