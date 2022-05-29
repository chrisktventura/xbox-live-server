import { Genre } from './../../genre/entities/genre.entity';
export class Game {
  id?: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;
  urlTrailerYT: string;
  urlGameplayYT: string;
  updateAt?: Date;
  createdAt?: Date;

  genres?: Genre[];
}
