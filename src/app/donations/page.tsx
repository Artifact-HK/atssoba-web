'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, GraduationCap, Building, Users, CreditCard, Banknote, Check } from 'lucide-react'

export default function DonationsPage() {
  const [selectedPurpose, setSelectedPurpose] = useState<string>('')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    isAnonymous: false,
    message: '',
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const donationPurposes = [
    {
      id: 'scholarship',
      title: 'Student Scholarships',
      description: 'Support deserving students with financial assistance for their education',
      icon: GraduationCap,
      color: 'bg-blue-500',
      raised: 450000,
      goal: 1000000,
    },
    {
      id: 'facilities',
      title: 'School Facilities',
      description: 'Upgrade laboratories, workshops, and learning environments',
      icon: Building,
      color: 'bg-green-500',
      raised: 750000,
      goal: 2000000,
    },
    {
      id: 'programs',
      title: 'Alumni Programs',
      description: 'Fund networking events, career workshops, and community initiatives',
      icon: Users,
      color: 'bg-purple-500',
      raised: 120000,
      goal: 500000,
    },
    {
      id: 'general',
      title: 'General Fund',
      description: 'Support various school needs and emergency requirements',
      icon: Heart,
      color: 'bg-red-500',
      raised: 300000,
      goal: 800000,
    },
  ]

  const suggestedAmounts = [100, 500, 1000, 2000, 5000]

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const getCurrentAmount = () => {
    return selectedAmount || (customAmount ? parseInt(customAmount) : 0)
  }

  const handleDonate = async () => {
    const amount = getCurrentAmount()
    if (!amount || amount < 10) {
      alert('Please select an amount of at least HK$10')
      return
    }

    if (!selectedPurpose) {
      alert('Please select a donation purpose')
      return
    }

    if (!donorInfo.name || !donorInfo.email) {
      alert('Please fill in your contact information')
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      alert(`Thank you for your donation of HK$${amount}! A confirmation email will be sent to ${donorInfo.email}`)
      setIsProcessing(false)
      // Reset form
      setSelectedAmount(null)
      setCustomAmount('')
      setSelectedPurpose('')
      setDonorInfo({
        name: '',
        email: '',
        isAnonymous: false,
        message: '',
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support ATS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous donations help us continue our mission of excellence in technical education 
            and support our alumni community worldwide.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">HK$2.1M+</div>
            <div className="text-gray-600">Total Raised This Year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
            <div className="text-gray-600">Students Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Active Donors</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Purposes */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {donationPurposes.map((purpose) => {
                const Icon = purpose.icon
                const progressPercentage = (purpose.raised / purpose.goal) * 100

                return (
                  <Card
                    key={purpose.id}
                    className={`cursor-pointer transition-all ${
                      selectedPurpose === purpose.id
                        ? 'ring-2 ring-blue-500 shadow-lg'
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedPurpose(purpose.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${purpose.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{purpose.title}</CardTitle>
                          {selectedPurpose === purpose.id && (
                            <div className="flex items-center text-blue-600 text-sm">
                              <Check className="w-4 h-4 mr-1" />
                              Selected
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {purpose.description}
                      </CardDescription>
                      
                      {/* Progress Bar */}
                      <div className="mb-2">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Raised: HK${purpose.raised.toLocaleString()}</span>
                          <span>Goal: HK${purpose.goal.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${purpose.color}`}
                            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {progressPercentage.toFixed(1)}% of goal reached
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Amount Selection */}
            {selectedPurpose && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Select Donation Amount</CardTitle>
                  <CardDescription>Choose a suggested amount or enter your own</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                    {suggestedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? 'default' : 'outline'}
                        onClick={() => handleAmountSelect(amount)}
                        className="h-12"
                      >
                        HK${amount}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Custom amount:</span>
                    <div className="relative flex-1 max-w-xs">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        HK$
                      </span>
                      <Input
                        type="number"
                        placeholder="0"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="pl-12"
                        min="10"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm text-blue-800">
                      <strong>Your donation: HK${getCurrentAmount().toLocaleString()}</strong>
                      {getCurrentAmount() > 0 && (
                        <div className="mt-1 text-xs">
                          Tax-deductible receipt will be provided for donations over HK$100
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Donation Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Complete Your Donation</CardTitle>
                <CardDescription>
                  Your support makes a real difference
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={donorInfo.isAnonymous}
                      onChange={(e) => setDonorInfo(prev => ({ ...prev, isAnonymous: e.target.checked }))}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">Make this donation anonymous</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    placeholder="Share why you're supporting ATS..."
                    value={donorInfo.message}
                    onChange={(e) => setDonorInfo(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    rows={3}
                  />
                </div>

                {/* Payment Methods */}
                <div className="pt-4 border-t">
                  <h4 className="font-medium text-gray-900 mb-3">Payment Method</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="payment" defaultChecked className="text-blue-600" />
                      <CreditCard className="w-5 h-5 text-gray-400" />
                      <span className="text-sm">Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="payment" className="text-blue-600" />
                      <Banknote className="w-5 h-5 text-gray-400" />
                      <span className="text-sm">Bank Transfer</span>
                    </label>
                  </div>
                </div>

                <Button
                  onClick={handleDonate}
                  disabled={!selectedPurpose || getCurrentAmount() < 10 || isProcessing}
                  className="w-full"
                  size="lg"
                >
                  {isProcessing ? (
                    'Processing...'
                  ) : (
                    <>
                      <Heart className="w-4 h-4 mr-2" />
                      Donate HK${getCurrentAmount().toLocaleString()}
                    </>
                  )}
                </Button>

                <div className="text-xs text-gray-500 text-center">
                  Secure payment processing. Your information is protected.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Donors */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Supporters</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Anonymous', amount: 5000, purpose: 'Student Scholarships', time: '2 hours ago' },
                { name: 'John Chan (Class of 1995)', amount: 2000, purpose: 'School Facilities', time: '5 hours ago' },
                { name: 'Mary Wong', amount: 1000, purpose: 'Alumni Programs', time: '1 day ago' },
                { name: 'Anonymous', amount: 500, purpose: 'General Fund', time: '2 days ago' },
                { name: 'David Lee (Class of 2001)', amount: 3000, purpose: 'Student Scholarships', time: '3 days ago' },
                { name: 'Lisa Tang', amount: 1500, purpose: 'School Facilities', time: '4 days ago' },
              ].map((donor, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">
                      {donor.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      HK${donor.amount.toLocaleString()} • {donor.purpose}
                    </div>
                    <div className="text-xs text-gray-400">{donor.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-sm divide-y">
            {[
              {
                question: 'Is my donation tax-deductible?',
                answer: 'Yes, donations over HK$100 are tax-deductible. You will receive a receipt for tax purposes.',
              },
              {
                question: 'How will my donation be used?',
                answer: 'Your donation will be used according to the purpose you select. We provide regular updates on how funds are utilized.',
              },
              {
                question: 'Can I make recurring donations?',
                answer: 'Yes, you can set up monthly or annual recurring donations. Contact us for more information.',
              },
              {
                question: 'Is my payment information secure?',
                answer: 'Absolutely. We use industry-standard encryption and secure payment processing to protect your information.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6">
                <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}