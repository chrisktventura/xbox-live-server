import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'nome de usuário',
    example: 'chrisktventura',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'email de usuário para login',
    example: 'chrisventura@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'a senha para login',
    example: 'Abc@1234',
  })
  password: string;

  @IsNumber()
  @ApiProperty({
    description: 'o numero do cpf',
    example: '00000000000',
  })
  cpf: number;

  @ApiProperty({
    description: 'o usuario é um administrador',
    example: 'yes(true) or no(false)',
  })
  isAdmin: boolean;
}
