import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGamesDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O número do jogo',
    example: 1,
  })
  number: number;
}
