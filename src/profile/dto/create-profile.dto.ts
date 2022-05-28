import { ApiProperty } from '@nestjs/swagger';
import { IsUrl, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'O nome usado para o perfil',
    example: 'Christopher Ventura',
  })
  name: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do Perfil',
    example: 'https://avatars.githubusercontent.com/u/96752298',
  })
  image: string;
}
