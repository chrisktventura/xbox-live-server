// import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsUrl } from 'class-validator';

export class CreateGamesDto {
  @ApiProperty({
    description: 'O nome de um jogo',
    example: 'The Sims',
  })
  title: string;

  @ApiProperty({
    description: 'Url da imagem do jogo',
  })
  coverImageUrl: string;

  @ApiProperty({
    description: 'Descrição do jogo',
  })
  description: string;

  @ApiProperty({
    description: 'Ano de lançamento do jogo',
  })
  year: number;
  @IsNumber()
  @ApiProperty({
    description: 'Classificação no IMDB (0 a 5)',
  })
  imdbScore: number;

  @IsUrl()
  @ApiProperty({
    description: 'Url do trailer do jogo',
  })
  urlTrailerYT: string;

  @IsUrl()
  @ApiProperty({
    description: 'Url da gameplay do jogo',
  })
  urlGameplayYT: string;
}
