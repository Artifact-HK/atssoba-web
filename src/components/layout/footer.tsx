import Link from 'next/link'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ATS</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">ATS Alumni Association</h2>
                <p className="text-sm text-gray-300">香港仔工業學校同學會</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting Aberdeen Technical School alumni worldwide. Building bridges between generations, 
              fostering professional growth, and supporting our alma mater's continued excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:info@atsalumni.org" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-gray-300 hover:text-white transition-colors">
                  Member Directory
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-gray-300 hover:text-white transition-colors">
                  Alumni Stories
                </Link>
              </li>
              <li>
                <Link href="/donations" className="text-gray-300 hover:text-white transition-colors">
                  Support Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-300 mt-0.5" />
                <div>
                  <p className="text-white">Aberdeen Technical School</p>
                  <p className="text-gray-300 text-sm">
                    香港仔工業學校<br />
                    Aberdeen, Hong Kong
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-300" />
                <p className="text-gray-300">+852 1234 5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-300" />
                <p className="text-gray-300">info@atsalumni.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Hong Kong Aberdeen Technical School Alumni Association. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}