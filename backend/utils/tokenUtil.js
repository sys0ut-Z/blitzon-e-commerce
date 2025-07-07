import jwt from 'jsonwebtoken'

export const generateToken = (blitzId) => {
  return jwt.sign(
    {blitzId},
    process.env.JWT_SECRET
  )
}
