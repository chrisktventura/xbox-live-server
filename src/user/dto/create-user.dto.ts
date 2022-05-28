import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'nome de usuário',
    example: 'chrisktventura',
  })
  name: string;

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

  @ApiProperty({
    description: 'o numero do cpf',
    example: '00000000000',
  })
  cpf: number;

  @ApiProperty({
    description: 'o usuario é um administrador',
    example: 'true or false',
  })
  isAdmin: boolean;
}
