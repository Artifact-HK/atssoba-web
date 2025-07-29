import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Users, BookOpen, Heart, ArrowRight, MapPin, Clock } from 'lucide-react'

export default function HomePage() {
  // Mock data - replace with actual data from database
  const featuredStories = [
    {
      id: 1,
      title: "From ATS to Tech Leadership",
      excerpt: "How my technical foundation at Aberdeen Technical School led me to Silicon Valley...",
      author: "張明華 (Class of 1995)",
      image: "/api/placeholder/400/200",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Building Bridges: Engineering Success",
      excerpt: "My journey from student to civil engineer, contributing to Hong Kong's infrastructure...",
      author: "李偉強 (Class of 1988)",
      image: "/api/placeholder/400/200",
      date: "2024-01-10"
    },
    {
      id: 3,
      title: "Innovation in Manufacturing",
      excerpt: "Revolutionizing production processes with the skills learned at ATS...",
      author: "陳美玲 (Class of 2001)",
      image: "/api/placeholder/400/200",
      date: "2024-01-05"
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Reunion 2024",
      date: "2024-03-15",
      time: "18:00",
      location: "Aberdeen Technical School",
      attendees: 150,
      description: "Join us for our biggest gathering of the year!"
    },
    {
      id: 2,
      title: "Career Networking Night",
      date: "2024-02-20",
      time: "19:00",
      location: "Central, Hong Kong",
      attendees: 80,
      description: "Connect with fellow alumni across industries"
    },
    {
      id: 3,
      title: "Technical Workshop: AI & Future",
      date: "2024-02-28",
      time: "14:00",
      location: "Virtual Event",
      attendees: 200,
      description: "Exploring artificial intelligence and its impact on our industries"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to ATS Alumni
            </h1>
            <h2 className="text-xl md:text-2xl mb-4 text-blue-100">
              香港仔工業學校同學會
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Connecting generations of Aberdeen Technical School graduates worldwide. 
              Building lasting relationships, fostering professional growth, and supporting our alma mater.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/members">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Browse Members
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1,200+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Annual Events</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">30+</h3>
              <p className="text-gray-600">Industries Represented</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">HK$2M+</h3>
              <p className="text-gray-600">Donated to School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To strengthen the bonds among Aberdeen Technical School alumni, provide mutual support for 
              professional and personal growth, and contribute to the continued excellence of our alma mater.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect & Network</h3>
              <p className="text-gray-600">
                Build meaningful relationships with fellow alumni across different graduation years and industries.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learn & Grow</h3>
              <p className="text-gray-600">
                Access mentorship opportunities, career resources, and continuous learning through our community.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Give Back</h3>
              <p className="text-gray-600">
                Support current students and contribute to the school's development through various initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Alumni Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Alumni Stories</h2>
              <p className="text-xl text-gray-600">Inspiring journeys from our community members</p>
            </div>
            <Link href="/stories">
              <Button variant="outline">
                View All Stories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-lg">{story.title}</CardTitle>
                  <CardDescription>{story.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{story.excerpt}</p>
                  <Link href={`/stories/${story.id}`}>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-600">Don't miss out on these exciting opportunities</p>
            </div>
            <Link href="/events">
              <Button variant="outline">
                View All Events
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href={`/events/${event.id}`}>
                      <Button size="sm" className="w-full">
                        Register Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Connect with fellow ATS alumni, access exclusive resources, and be part of our growing network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Become a Member
              </Button>
            </Link>
            <Link href="/donations">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Support ATS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}