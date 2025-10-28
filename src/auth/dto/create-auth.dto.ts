import { ApiResponseProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateAuthDto {
    @ApiResponseProperty()
    @IsNotEmpty()
    readonly email:string;
    @ApiResponseProperty()
    @IsNotEmpty()
    readonly password:string;
}
