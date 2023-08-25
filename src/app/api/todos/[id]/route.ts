import { prisma } from "@/app/(data)/global";
import { NextRequest, NextResponse } from "next/server"
// interface TodosParams2 { id: string }
type TodosParams = { params: { id: string } }

const getNumeric = (value: string) => {
  if (/^-?\d+$/.test(value.trim())) return Number(value)
  else return false
}
const getNumericResponse = () => NextResponse.json({ error: "Id is not numeric"}, {status: 400 })

export async function DELETE(req: NextRequest, { params }: TodosParams) {
    const id = getNumeric(params.id)
    if (!id) return getNumericResponse()
    
    const user = await prisma.user.delete({  where: { id: id } })
    return NextResponse.json(user, {status: 200})
}
export async function PUT(req: NextRequest, { params }: TodosParams) {
  const id = getNumeric(params.id)
  if (!id) return getNumericResponse()
  const { name, email } = await req.json()
  
  const user = await prisma.user.update({ data: {
    name: name,
    email: email
  }, where: { id: id } })
  return NextResponse.json(user, {status: 200})
}


export async function GET(req: NextRequest, { params }: TodosParams) {
  const id = getNumeric(params.id)
  if (!id) return getNumericResponse()
  const user = await prisma.user.findFirst({where: { id: id } })
  return NextResponse.json(user, {status: 200})
}
 