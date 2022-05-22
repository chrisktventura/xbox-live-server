import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  genres: Genre[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.genre.findMany();
  }
  create(createGenreDto: CreateGenreDto) {
    const genre: Genre = { id: 'random_id', ...createGenreDto };

    this.genres.push(genre);

    return genre;
  }
}
