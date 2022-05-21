import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGenreDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O número do gênero.',
    example: 1,
  })
  number: number;
}
