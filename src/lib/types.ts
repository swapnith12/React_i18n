type UserKeys = "firstName" | "lastName" | "role" 
type User = Partial<Record<UserKeys, string>>

type Applied=boolean

type Job = {
  id: number
  role: string
  payment: string
  verifiedCompany: boolean
  companyName: string
  applied: boolean
}

type Jobs = Job[]

export type {User,Applied,Jobs,Job}