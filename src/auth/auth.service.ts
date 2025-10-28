import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private userservice: UserService,
    private JwtService: JwtService,
    private ConfigService: ConfigService
  ){}
  async generateTokens(userId: string, email:string, role:string){
    const [accessToken, refreshToken]= await Promise.all(
      [this.JwtService.signAsync({
        sub:userId, email, role
      },{
        secret: this.ConfigService.get<string>("JWT_ACCESSTOKEN"),
        expiresIn:"1 d"
      }),
      this.JwtService.signAsync({
        sub:userId, email, role
      },{
        secret: this.ConfigService.get<string>("JWT_REFRESHTOKEN"),
        expiresIn:"15 d"
      },
    )
    ])
    return{accessToken, refreshToken}
  }
  async register (creatUserDto: CreateUserDto):Promise<any>{
    const UserExist = await this.userservice.findByEmail(creatUserDto.email)
    if(UserExist){
      throw new BadRequestException("User already exist")
    }
    const hashPass = await argon2.hash(creatUserDto.password)
    const newUser = await this.userservice.create({ ...creatUserDto, password:hashPass})
    return {message:"User created succssfuly", user:newUser}
  }
  async login(createAuthDto: CreateAuthDto):Promise<any>{
    const UserExist = await this.userservice.findByEmail(createAuthDto.email)
    if(!UserExist){
      throw new BadRequestException("User not found")

    }else{
      const passwordMatch = await argon2.verify(UserExist.password, createAuthDto.password)
      if(!passwordMatch){
        throw new BadRequestException("Failed to connect")
      }else{
        const token = await this.generateTokens(UserExist._id, UserExist.email ,UserExist.role)
        return {UserExist, token}
      }
    }
  }
  async logout(userId: string){
    await this.userservice.update(userId,{refreshToken:null})
  }
  
}