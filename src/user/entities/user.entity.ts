import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class User {
    @Prop()
    Name: String;
    @Prop()
    fullname: String;
    @Prop({required:true, unique:true})
    email:string;
    @Prop({required:true})
    password: string;
    @Prop()
    phone: Number;

}
export const UserSchema = SchemaFactory.createForClass(User)
