import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGamesDto } from './dto/create-games.dto';
import { GamesService } from './games.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Game } from './entities/games.entity';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar OS Jogos',
  })
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um Jogo',
  })
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gameService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar uma mesa',
  })
  create(@Body() dto: CreateGamesDto): Promise<Game> {
    return this.gameService.create(dto);
  }
}
