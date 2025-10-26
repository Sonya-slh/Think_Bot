import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class User {
    @Prop({required:true, unique:true})
    emmail:string;
    @Prop({required:true})
    password: string;
    @Prop({default:''})
    name:string;

}
export const UserSchema = SchemaFactory.createForClass(User)
