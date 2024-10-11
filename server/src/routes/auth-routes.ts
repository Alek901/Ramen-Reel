import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const secretKey = process.env.JWT_SECRET_KEY || '';

    const token = jwt.sign({ username: user.username, userId: user.id }, secretKey, { expiresIn: '1h' });
    return res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const router = Router();

router.post('/login', login);

export default router;
