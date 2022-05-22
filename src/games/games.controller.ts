import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGamesDto } from './dto/create-games.dto';
import { GamesService } from './games.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Post()
  create(@Body() createGamesDto: CreateGamesDto) {
    return this.gameService.create(createGamesDto);
  }
}
