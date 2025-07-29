'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Filter, MapPin, Briefcase, Calendar, Mail, Linkedin, Facebook } from 'lucide-react'

interface Member {
  id: string
  name: string
  chineseName?: string
  graduationYear?: number
  currentJob?: string
  company?: string
  industry?: string
  location?: string
  region?: string
  profileImage?: string
  linkedIn?: string
  facebook?: string
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    graduationYear: '',
    industry: '',
    region: '',
  })
  const [isLoading, setIsLoading] = useState(true)

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockMembers: Member[] = [
      {
        id: '1',
        name: 'John Chan',
        chineseName: '陳志明',
        graduationYear: 1995,
        currentJob: 'Software Engineer',
        company: 'Tech Corp HK',
        industry: 'Technology',
        location: 'Hong Kong',
        region: 'Hong Kong Island',
        profileImage: '/api/placeholder/150/150',
        linkedIn: 'https://linkedin.com/in/johnchan',
      },
      {
        id: '2',
        name: 'Mary Wong',
        chineseName: '黃美玲',
        graduationYear: 1988,
        currentJob: 'Civil Engineer',
        company: 'Infrastructure Ltd',
        industry: 'Engineering',
        location: 'Hong Kong',
        region: 'Kowloon',
        profileImage: '/api/placeholder/150/150',
      },
      {
        id: '3',
        name: 'David Lee',
        chineseName: '李偉強',
        graduationYear: 2001,
        currentJob: 'Manufacturing Manager',
        company: 'Production Systems',
        industry: 'Manufacturing',
        location: 'Shenzhen',
        region: 'Mainland China',
        profileImage: '/api/placeholder/150/150',
        facebook: 'https://facebook.com/davidlee',
      },
      {
        id: '4',
        name: 'Sarah Lam',
        chineseName: '林淑儀',
        graduationYear: 2005,
        currentJob: 'Project Manager',
        company: 'Global Solutions',
        industry: 'Consulting',
        location: 'Singapore',
        region: 'Southeast Asia',
        profileImage: '/api/placeholder/150/150',
        linkedIn: 'https://linkedin.com/in/sarahlam',
      },
      {
        id: '5',
        name: 'Michael Cheng',
        chineseName: '鄭志華',
        graduationYear: 1992,
        currentJob: 'Electrical Engineer',
        company: 'Power Systems HK',
        industry: 'Engineering',
        location: 'Hong Kong',
        region: 'New Territories',
        profileImage: '/api/placeholder/150/150',
      },
      {
        id: '6',
        name: 'Lisa Tang',
        chineseName: '鄧麗莎',
        graduationYear: 1999,
        currentJob: 'Quality Assurance Manager',
        company: 'Manufacturing Excellence',
        industry: 'Manufacturing',
        location: 'Hong Kong',
        region: 'Hong Kong Island',
        profileImage: '/api/placeholder/150/150',
        linkedIn: 'https://linkedin.com/in/lisatang',
      },
    ]

    // Simulate API loading
    setTimeout(() => {
      setMembers(mockMembers)
      setFilteredMembers(mockMembers)
      setIsLoading(false)
    }, 1000)
  }, [])

  // Filter and search logic
  useEffect(() => {
    let filtered = members

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.chineseName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.currentJob?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.industry?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply graduation year filter
    if (filters.graduationYear) {
      filtered = filtered.filter(member =>
        member.graduationYear?.toString() === filters.graduationYear
      )
    }

    // Apply industry filter
    if (filters.industry) {
      filtered = filtered.filter(member =>
        member.industry === filters.industry
      )
    }

    // Apply region filter
    if (filters.region) {
      filtered = filtered.filter(member =>
        member.region === filters.region
      )
    }

    setFilteredMembers(filtered)
  }, [members, searchTerm, filters])

  const clearFilters = () => {
    setSearchTerm('')
    setFilters({
      graduationYear: '',
      industry: '',
      region: '',
    })
  }

  const industries = Array.from(new Set(members.map(m => m.industry).filter(Boolean)))
  const regions = Array.from(new Set(members.map(m => m.region).filter(Boolean)))
  const graduationYears = Array.from(new Set(members.map(m => m.graduationYear).filter(Boolean))).sort((a, b) => b - a)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-64 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-96 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow">
                  <div className="h-20 w-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-32 mx-auto mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-24 mx-auto mb-4"></div>
                  <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Member Directory</h1>
          <p className="text-lg text-gray-600">
            Connect with {members.length} fellow ATS alumni worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by name, company, job title, or industry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-end space-x-4 text-sm text-gray-600">
              <span>Showing {filteredMembers.length} of {members.length} members</span>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Graduation Year
              </label>
              <select
                value={filters.graduationYear}
                onChange={(e) => setFilters(prev => ({ ...prev, graduationYear: e.target.value }))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="">All Years</option>
                {graduationYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Industry
              </label>
              <select
                value={filters.industry}
                onChange={(e) => setFilters(prev => ({ ...prev, industry: e.target.value }))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="">All Industries</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Region
              </label>
              <select
                value={filters.region}
                onChange={(e) => setFilters(prev => ({ ...prev, region: e.target.value }))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Members Grid */}
        {filteredMembers.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No members found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-gray-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  {member.chineseName && (
                    <CardDescription className="text-sm">{member.chineseName}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {member.graduationYear && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Class of {member.graduationYear}</span>
                      </div>
                    )}
                    
                    {member.currentJob && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{member.currentJob}</span>
                      </div>
                    )}
                    
                    {member.company && (
                      <div className="text-sm text-gray-600 ml-6">
                        at {member.company}
                      </div>
                    )}
                    
                    {member.location && (
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{member.location}</span>
                      </div>
                    )}
                    
                    {member.industry && (
                      <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {member.industry}
                      </div>
                    )}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 mt-4 pt-4 border-t">
                    <Button size="sm" variant="outline">
                      <Mail className="w-4 h-4 mr-1" />
                      Contact
                    </Button>
                    {member.linkedIn && (
                      <Button size="sm" variant="outline">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.facebook && (
                      <Button size="sm" variant="outline">
                        <Facebook className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Load More Button (for pagination) */}
        {filteredMembers.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Members
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}