import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('Register')
  singUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

 
}
