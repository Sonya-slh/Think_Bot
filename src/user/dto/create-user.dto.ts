import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";
export class CreateUserDto {
    @ApiProperty({type: String, description: "The name of user"})
    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    readonly Name: string
    @ApiProperty({type:String, description: "The fullname of user"})
    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    readonly fullname:string
    @ApiProperty({type:String, description:"The email of user "})
    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    readonly email:string
    @ApiProperty({type:String, description:"The password of user"})
    @IsNotEmpty()
    @MaxLength(20)
    @IsString()
    readonly password:string
    @ApiProperty({type:Number , description:"The phone number of user"})
    @IsNotEmpty()
    @MaxLength(20)
    readonly phone: number
}
