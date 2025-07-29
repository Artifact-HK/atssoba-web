'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Filter, MapPin, Briefcase, Calendar, Mail, Linkedin, Facebook, Phone, User, Heart, MessageCircle, GraduationCap, Award, Gamepad2 } from 'lucide-react'

interface Member {
  id: string
  name: string
  chineseName?: string
  nickname?: string
  graduationYear?: number
  currentJob?: string
  company?: string
  industry?: string
  location?: string
  region?: string
  profileImage?: string
  bio?: string
  skills?: string
  hobby?: string
  phone?: string
  email?: string
  closeTeacher?: string
  linkedIn?: string
  facebook?: string
  instagram?: string
  wechat?: string
  website?: string
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

  // Enhanced mock data with all new fields
  useEffect(() => {
    const mockMembers: Member[] = [
      {
        id: '1',
        name: 'John Chan',
        chineseName: '陳志明',
        nickname: 'Johnny',
        graduationYear: 1995,
        currentJob: 'Software Engineer',
        company: 'Tech Corp HK',
        industry: 'Technology',
        location: 'Hong Kong',
        region: 'Hong Kong Island',
        profileImage: '/api/placeholder/150/150',
        bio: 'Passionate software engineer with 25+ years of experience in web development and system architecture. Love mentoring junior developers.',
        skills: 'JavaScript, Python, React, Node.js, AWS, Docker',
        hobby: 'Photography, Hiking, Reading tech blogs',
        phone: '+852 9123 4567',
        email: 'john.chan@techcorp.hk',
        closeTeacher: 'Mr. Wong Siu Ming (Computer Science)',
        linkedIn: 'https://linkedin.com/in/johnchan',
        facebook: 'https://facebook.com/johnchan95',
        wechat: 'johnchan_hk',
      },
      {
        id: '2',
        name: 'Mary Wong',
        chineseName: '黃美玲',
        nickname: 'Mary',
        graduationYear: 1988,
        currentJob: 'Civil Engineer',
        company: 'Infrastructure Ltd',
        industry: 'Engineering',
        location: 'Hong Kong',
        region: 'Kowloon',
        profileImage: '/api/placeholder/150/150',
        bio: 'Senior civil engineer specializing in bridge and tunnel construction. Proud to contribute to Hong Kong\'s infrastructure development.',
        skills: 'AutoCAD, Structural Design, Project Management, BIM',
        hobby: 'Badminton, Cooking, Volunteering',
        phone: '+852 9234 5678',
        email: 'mary.wong@infrastructure.hk',
        closeTeacher: 'Ms. Lee Wai Ling (Mathematics)',
        facebook: 'https://facebook.com/marywong88',
        wechat: 'mary_wong_hk',
      },
      {
        id: '3',
        name: 'David Lee',
        chineseName: '李偉強',
        nickname: 'Dave',
        graduationYear: 2001,
        currentJob: 'Manufacturing Manager',
        company: 'Production Systems',
        industry: 'Manufacturing',
        location: 'Shenzhen',
        region: 'Mainland China',
        profileImage: '/api/placeholder/150/150',
        bio: 'Manufacturing expert with focus on lean production and quality control. Always looking for ways to optimize processes.',
        skills: 'Lean Manufacturing, Six Sigma, Quality Control, SAP',
        hobby: 'Golf, Chess, Model building',
        phone: '+86 138 0013 8888',
        email: 'david.lee@production.cn',
        closeTeacher: 'Mr. Chan Tai Man (Industrial Arts)',
        facebook: 'https://facebook.com/davidlee2001',
        wechat: 'davidlee_sz',
      },
      {
        id: '4',
        name: 'Sarah Lam',
        chineseName: '林淑儀',
        nickname: 'Sarah',
        graduationYear: 2005,
        currentJob: 'Project Manager',
        company: 'Global Solutions',
        industry: 'Consulting',
        location: 'Singapore',
        region: 'Southeast Asia',
        profileImage: '/api/placeholder/150/150',
        bio: 'International project manager with expertise in digital transformation and change management across Asia-Pacific.',
        skills: 'Project Management, Agile, Scrum, Digital Strategy',
        hobby: 'Yoga, Travel, Food blogging',
        phone: '+65 9876 5432',
        email: 'sarah.lam@globalsolutions.sg',
        closeTeacher: 'Ms. Cheung Mei Fong (English)',
        linkedIn: 'https://linkedin.com/in/sarahlam',
        instagram: 'https://instagram.com/sarahlam_sg',
        wechat: 'sarah_lam_sg',
      },
      {
        id: '5',
        name: 'Michael Cheng',
        chineseName: '鄭志華',
        nickname: 'Mike',
        graduationYear: 1992,
        currentJob: 'Electrical Engineer',
        company: 'Power Systems HK',
        industry: 'Engineering',
        location: 'Hong Kong',
        region: 'New Territories',
        profileImage: '/api/placeholder/150/150',
        bio: 'Electrical engineer specializing in power distribution systems and renewable energy solutions for Hong Kong.',
        skills: 'Electrical Design, Power Systems, AutoCAD Electrical, PLC',
        hobby: 'Electronics DIY, Cycling, Classical music',
        phone: '+852 9345 6789',
        email: 'michael.cheng@powersystems.hk',
        closeTeacher: 'Mr. Lau Kam Wah (Physics)',
        linkedIn: 'https://linkedin.com/in/michaelcheng',
        wechat: 'mike_cheng_hk',
      },
      {
        id: '6',
        name: 'Lisa Tang',
        chineseName: '鄧麗莎',
        nickname: 'Lisa',
        graduationYear: 1999,
        currentJob: 'Quality Assurance Manager',
        company: 'Manufacturing Excellence',
        industry: 'Manufacturing',
        location: 'Hong Kong',
        region: 'Hong Kong Island',
        profileImage: '/api/placeholder/150/150',
        bio: 'Quality assurance professional dedicated to maintaining the highest standards in manufacturing processes.',
        skills: 'ISO Standards, Quality Management, Statistical Analysis, Auditing',
        hobby: 'Painting, Gardening, Meditation',
        phone: '+852 9456 7890',
        email: 'lisa.tang@manufacturing.hk',
        closeTeacher: 'Mr. Ho Chun Kit (Chemistry)',
        linkedIn: 'https://linkedin.com/in/lisatang',
        facebook: 'https://facebook.com/lisatang99',
        instagram: 'https://instagram.com/lisa_tang_art',
        wechat: 'lisa_tang_hk',
      },
    ]

    // Simulate API loading
    setTimeout(() => {
      setMembers(mockMembers)
      setFilteredMembers(mockMembers)
      setIsLoading(false)
    }, 1000)
  }, [])

  // Enhanced filter and search logic
  useEffect(() => {
    let filtered = members

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.chineseName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.nickname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.currentJob?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.industry?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.skills?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.hobby?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.closeTeacher?.toLowerCase().includes(searchTerm.toLowerCase())
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

  const formatSkills = (skills?: string) => {
    if (!skills) return []
    return skills.split(',').map(skill => skill.trim()).slice(0, 4) // Show max 4 skills
  }

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
                placeholder="Search by name, company, skills, hobbies, or teacher..."
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
                  <CardTitle className="text-lg">
                    {member.name}
                    {member.nickname && (
                      <span className="text-sm font-normal text-gray-500 ml-2">({member.nickname})</span>
                    )}
                  </CardTitle>
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

                    {member.phone && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{member.phone}</span>
                      </div>
                    )}

                    {member.closeTeacher && (
                      <div className="flex items-start text-sm text-gray-600">
                        <GraduationCap className="w-4 h-4 mr-2 mt-0.5" />
                        <span>Close Teacher: {member.closeTeacher}</span>
                      </div>
                    )}

                    {/* Skills */}
                    {member.skills && (
                      <div className="space-y-2">
                        <div className="flex items-center text-sm font-medium text-gray-700">
                          <Award className="w-4 h-4 mr-2" />
                          <span>Skills</span>
                        </div>
                        <div className="flex flex-wrap gap-1 ml-6">
                          {formatSkills(member.skills).map((skill, index) => (
                            <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                          {member.skills.split(',').length > 4 && (
                            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                              +{member.skills.split(',').length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Hobbies */}
                    {member.hobby && (
                      <div className="space-y-2">
                        <div className="flex items-center text-sm font-medium text-gray-700">
                          <Gamepad2 className="w-4 h-4 mr-2" />
                          <span>Hobbies</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-6">{member.hobby}</p>
                      </div>
                    )}

                    {/* Bio */}
                    {member.bio && (
                      <div className="space-y-2">
                        <div className="flex items-center text-sm font-medium text-gray-700">
                          <User className="w-4 h-4 mr-2" />
                          <span>About</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-6 line-clamp-3">{member.bio}</p>
                      </div>
                    )}
                    
                    {member.industry && (
                      <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {member.industry}
                      </div>
                    )}
                  </div>
                  
                  {/* Contact & Social Links */}
                  <div className="flex justify-center space-x-2 mt-6 pt-4 border-t">
                    {member.email && (
                      <Button size="sm" variant="outline" title="Email">
                        <Mail className="w-4 h-4" />
                      </Button>
                    )}
                    {member.linkedIn && (
                      <Button size="sm" variant="outline" title="LinkedIn">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.facebook && (
                      <Button size="sm" variant="outline" title="Facebook">
                        <Facebook className="w-4 h-4" />
                      </Button>
                    )}
                    {member.instagram && (
                      <Button size="sm" variant="outline" title="Instagram">
                        <Heart className="w-4 h-4" />
                      </Button>
                    )}
                    {member.wechat && (
                      <Button size="sm" variant="outline" title="WeChat">
                        <MessageCircle className="w-4 h-4" />
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