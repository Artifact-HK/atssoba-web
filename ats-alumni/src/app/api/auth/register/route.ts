// This API route is disabled for static export
// Uncomment for full-stack deployment (Vercel, Netlify, etc.)

/*
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createUser, getUserByEmail } from '@/lib/auth'

const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  chineseName: z.string().optional(),
  nickname: z.string().optional(),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  graduationYear: z.number().min(1950).max(new Date().getFullYear()).optional(),
  phone: z.string().optional(),
  skills: z.string().optional(),
  hobby: z.string().optional(),
  closeTeacher: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = registerSchema.parse(body)
    
    // Check if user already exists
    const existingUser = await getUserByEmail(validatedData.email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }
    
    // Create the user
    const user = await createUser({
      name: validatedData.name,
      chineseName: validatedData.chineseName,
      nickname: validatedData.nickname,
      email: validatedData.email,
      password: validatedData.password,
      graduationYear: validatedData.graduationYear,
      phone: validatedData.phone,
      skills: validatedData.skills,
      hobby: validatedData.hobby,
      closeTeacher: validatedData.closeTeacher,
    })
    
    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: {
          id: user.id,
          name: user.name,
          chineseName: user.chineseName,
          nickname: user.nickname,
          email: user.email,
          graduationYear: user.graduationYear,
          phone: user.phone,
          skills: user.skills,
          hobby: user.hobby,
          closeTeacher: user.closeTeacher,
        }
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
*/

// Static export fallback
export async function GET() {
  return new Response('API routes not available in static export', { status: 501 })
}