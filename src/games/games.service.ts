import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateGamesDto } from './dto/create-games.dto';
import { Game } from './entities/games.entity';

@Injectable()
export class GamesService {
  games: Game[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.game.findMany();
  }
  create(createGamesDto: CreateGamesDto) {
    const game: Game = { id: 'random_id', ...createGamesDto };

    this.games.push(game);

    return game;
  }
}
