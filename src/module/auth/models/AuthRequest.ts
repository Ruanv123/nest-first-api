import { Request } from 'express';
import { User } from 'src/module/user/entities/user.entity';

export interface AuthRequest extends Request {
  user: User;
}
