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
  nickname?: string
  graduationYear?: number
  phone?: string
  skills?: string
  hobby?: string
  closeTeacher?: string
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
      nickname: true,
      graduationYear: true,
      phone: true,
      skills: true,
      hobby: true,
      closeTeacher: true,
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
      nickname: true,
      graduationYear: true,
      phone: true,
      skills: true,
      hobby: true,
      closeTeacher: true,
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
      nickname: true,
      graduationYear: true,
      profileImage: true,
      currentJob: true,
      company: true,
      industry: true,
      location: true,
      region: true,
      bio: true,
      skills: true,
      hobby: true,
      phone: true,
      closeTeacher: true,
      linkedIn: true,
      facebook: true,
      instagram: true,
      wechat: true,
      website: true,
      isActive: true,
      isMentor: true,
      isAdmin: true,
      createdAt: true,
    },
  })
}