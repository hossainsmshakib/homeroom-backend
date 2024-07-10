import User from './userTable';
import bcrypt from 'bcrypt';

export async function findUserByEmail(email: string) {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw new Error('Error finding user.');
  }
}

export async function verifyPassword(user: any, password: string) {
  try {
    if (!user) {
      return false; // User not found
    }
    const match = await bcrypt.compare(password, user.password);
    return match;
  } catch (error) {
    throw new Error('Error verifying password.');
  }
}
