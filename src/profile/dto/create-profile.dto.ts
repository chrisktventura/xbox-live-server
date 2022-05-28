import { ApiProperty } from '@nestjs/swagger';
import { IsUrl } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty({
    description: 'O nome usado para o perfil',
    example: 'Christopher Ventura',
  })
  name: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do Perfil',
  })
  image: string;
}
