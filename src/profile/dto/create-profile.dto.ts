import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty({
    description: 'O nome usado para o perfil',
    example: 'Christopher Ventura',
  })
  name: string;

  @ApiProperty({
    description: 'Imagem do Perfil',
  })
  image: string;
}
