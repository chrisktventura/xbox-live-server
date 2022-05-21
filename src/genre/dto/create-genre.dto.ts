import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGenreDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O nome do gênero.',
    example: 'Ação',
  })
  name: string;
}
