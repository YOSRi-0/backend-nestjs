import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { UserController } from './user.controller';
import { IsEmailNotRegistered } from './user.validation';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, IsEmailNotRegistered],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
