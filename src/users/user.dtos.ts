import { IsEmail, IsString, MinLength } from 'class-validator';
import { EmailNotRegistered } from './user.validation';

export class CreateUserDTO {
  @IsEmail()
  @EmailNotRegistered({ message: 'email already registered' })
  email: string;

  @MinLength(8)
  @IsString()
  password: string;
}

export class UpdateUserDTO {
  @IsEmail()
  @EmailNotRegistered({ message: 'email already registered' })
  email?: string;
}

export class UserDTO {
  @IsEmail()
  email: string;

  @MinLength(8)
  @IsString()
  password: string;
}
