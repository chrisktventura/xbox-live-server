import { ApiProperty } from '@nestjs/swagger';

export class CreateGenreDto {
  @ApiProperty({
    description: 'O nome de um gênero de game.',
    example: 'Ação',
  })
  name: string;
}
