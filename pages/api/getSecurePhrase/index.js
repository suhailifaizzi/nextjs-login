import conn from "../../../lib/db";
import { comments } from '../../../data/comments';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main () {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect
  })

// // export default async (req, res) => {
// export default function handler (req, res) {
  // console.log('inside getSecurePhrase api')
  // // try {
  // //   console.log('req', req)
  // //   const query = 'SELECT securephrase FROM USER WHERE VALUES($1)'
  // //   const result = await conn.query(
  // //     query,
  // //     req.body.username
  // //   )
  // //   console.log('result', result)
  // //   // return result
  // //   res.end(JSON.stringify(result))
  // //   res.status(200)
  // // } catch (error) {
  // //   console.log(error)
  // //   res.json(error)
  // // }
  // res.status(200).json(comments)

// } 