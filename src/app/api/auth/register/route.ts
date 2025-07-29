import { NextRequest, NextResponse } from 'next/server'
import { createUser, getUserByEmail } from '@/lib/auth'
import { z } from 'zod'

const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  chineseName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  graduationYear: z.number().int().min(1950).max(new Date().getFullYear()).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = registerSchema.parse(body)
    
    // Check if user already exists
    const existingUser = await getUserByEmail(validatedData.email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'A user with this email already exists' },
        { status: 400 }
      )
    }
    
    // Create new user
    const user = await createUser(validatedData)
    
    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        }
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}