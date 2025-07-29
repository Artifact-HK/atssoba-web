# ATS Alumni Association Website

A comprehensive full-stack alumni association website for **Hong Kong Aberdeen Technical School Alumni Association** (香港仔工業學校同學會).

## 🌟 Features

### Core Functionality
- **🏠 Home/Landing Page**: Hero banner, mission statement, featured alumni stories, upcoming events
- **👥 Member Directory**: Searchable and filterable by graduation year, region, industry
- **📅 Events System**: Calendar of upcoming events, RSVP functionality, virtual event support
- **💼 Mentor & Careers**: Job board, mentor-mentee matching, career resources
- **📖 Stories & News**: Alumni testimonials, success stories, content submission system
- **💝 Donations**: Secure donation system with multiple purposes (scholarships, facilities, etc.)
- **👤 Member Dashboard**: Profile management, update personal information
- **💬 Messaging System**: Private messaging between members
- **⚙️ Admin Backend**: Content management, user administration, analytics

### Technical Features
- **🔐 Authentication**: Secure registration and login system
- **📱 Responsive Design**: Mobile-first design with Tailwind CSS
- **🎨 Modern UI**: Clean, professional interface with accessibility features
- **🗄️ Database**: SQLite with Prisma ORM for development
- **🔒 Security**: Password hashing, input validation, secure API endpoints

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Backend**: Next.js API routes
- **Database**: SQLite (development), Prisma ORM
- **Authentication**: Custom implementation with bcrypt
- **Payment**: Stripe integration (configured for donations)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ats-alumni
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_key"
   STRIPE_SECRET_KEY="sk_test_your_stripe_key"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ats-alumni/
├── src/
│   ├── app/                    # Next.js 14 app router
│   │   ├── api/               # API routes
│   │   ├── auth/              # Authentication pages
│   │   ├── members/           # Member directory
│   │   ├── donations/         # Donation system
│   │   └── ...
│   ├── components/            # Reusable components
│   │   ├── ui/               # Base UI components
│   │   └── layout/           # Layout components
│   └── lib/                  # Utilities and configurations
│       ├── auth.ts           # Authentication utilities
│       ├── prisma.ts         # Database client
│       └── utils.ts          # Helper functions
├── prisma/
│   └── schema.prisma         # Database schema
└── public/                   # Static assets
```

## 🗄️ Database Schema

The application uses a comprehensive database schema with the following main models:

- **User**: Alumni member information and authentication
- **Story**: Alumni success stories and testimonials
- **Event**: Alumni events and gatherings
- **EventRegistration**: Event attendance tracking
- **JobPost**: Career opportunities board
- **MentorshipRequest**: Mentor-mentee matching
- **Message**: Private messaging system
- **Donation**: Donation tracking and management
- **Comment**: Story comments and engagement
- **Newsletter**: Email subscription management

## 🎨 Design System

The website features a modern, professional design with:

- **Primary Colors**: Blue (#2563eb) for trust and professionalism
- **Typography**: Inter font family for readability
- **Components**: Consistent UI components with hover states and animations
- **Responsive**: Mobile-first design that works on all devices
- **Accessibility**: Focus states, proper contrast ratios, semantic HTML

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Database connection string | Yes |
| `NEXTAUTH_SECRET` | Authentication secret key | Yes |
| `STRIPE_PUBLISHABLE_KEY` | Stripe public key for donations | Optional |
| `STRIPE_SECRET_KEY` | Stripe secret key | Optional |
| `SMTP_*` | Email configuration | Optional |

### Deployment

The application can be deployed to various platforms:

1. **Vercel** (Recommended)
   ```bash
   npm run build
   vercel --prod
   ```

2. **Docker**
   ```bash
   docker build -t ats-alumni .
   docker run -p 3000:3000 ats-alumni
   ```

## 📱 Pages Overview

### Public Pages
- **/** - Home page with hero section and featured content
- **/members** - Alumni directory with search and filters
- **/events** - Upcoming events and registration
- **/stories** - Alumni success stories
- **/donations** - Donation system with multiple purposes
- **/auth/register** - New member registration
- **/auth/login** - Member login

### Protected Pages
- **/dashboard** - Member profile management
- **/careers** - Job board and mentorship
- **/messages** - Private messaging system
- **/admin** - Administrative functions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Aberdeen Technical School** for the inspiration and community
- **Alumni Community** for their support and feedback
- **Open Source Contributors** for the amazing tools and libraries

## 📞 Support

For support and questions:
- Email: info@atsalumni.org
- Website: [www.atsalumni.org](https://www.atsalumni.org)

---

**Hong Kong Aberdeen Technical School Alumni Association** - Connecting generations, fostering growth, supporting excellence.

香港仔工業學校同學會 - 連接世代，促進成長，支持卓越。
