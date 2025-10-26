import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

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
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
