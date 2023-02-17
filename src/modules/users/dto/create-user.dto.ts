import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

enum MessageError {
  OBRIGATORIO = 'O campo $property é obrigatório',
}

export class CreateUserDto {
  @ApiProperty({
    example: 'Leandro@gmail.com',
    description: ' Email do usuário',
  })
  @IsNotEmpty({ message: MessageError.OBRIGATORIO })
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @ApiProperty({
    example: 'Leandro ROcha',
    description: ' Nome do usuário',
  })
  @IsNotEmpty({ message: MessageError.OBRIGATORIO })
  name: string;

  @ApiProperty({
    example: '123456',
    description: ' Senha do usuário',
  })
  @IsNotEmpty({ message: MessageError.OBRIGATORIO })
  @MinLength(5, { message: 'A senha precisa conter no mínimo 5 caracteres' })
  password: string;
}
