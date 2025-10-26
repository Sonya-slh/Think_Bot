import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
type JwtPayload = {
    sub:string
    email:string
    role:string
}
@Injectable()
export class AcessToeknStrategy extends PassportStrategy(Strategy,"jwt"){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:process.env.JWT_ACCESSTOKEN as string
        })
    }
    validate(payload:JwtPayload) {
        return payload


        
    }
}
