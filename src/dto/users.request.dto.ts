import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { User } from 'src/users/users.schema';

export class UserRequestDto {
  @ApiProperty({
    example: 'name',
    description: '이름',
    required: true,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'email',
    description: '이메일',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password',
    description: '비밀번호',
    required: true,
  })
  password: string;
}
