import bcrypt from 'bcrypt'

export const encryptedPass = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPass = bcrypt.hashSync(password, salt);
  return hashedPass;
}