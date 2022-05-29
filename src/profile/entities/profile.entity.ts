import { Game, User } from '@prisma/client';

export class Profile {
  id?: string;
  name: string;
  image: string;
  updateAt?: Date;
  createAt?: Date;
  user?: User;
  games?: Game[];
}
