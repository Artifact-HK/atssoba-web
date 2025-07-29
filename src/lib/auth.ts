import bcrypt from 'bcryptjs'
import { prisma } from './prisma'

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}

export async function createUser(data: {
  email: string
  password: string
  name: string
  chineseName?: string
  graduationYear?: number
}) {
  const hashedPassword = await hashPassword(data.password)
  
  return await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true,
      name: true,
      chineseName: true,
      graduationYear: true,
      createdAt: true,
    },
  })
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      password: true,
      name: true,
      chineseName: true,
      graduationYear: true,
      isAdmin: true,
      isActive: true,
    },
  })
}

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      chineseName: true,
      graduationYear: true,
      profileImage: true,
      currentJob: true,
      company: true,
      industry: true,
      location: true,
      region: true,
      bio: true,
      linkedIn: true,
      facebook: true,
      instagram: true,
      website: true,
      isActive: true,
      isMentor: true,
      isAdmin: true,
      createdAt: true,
    },
  })
}