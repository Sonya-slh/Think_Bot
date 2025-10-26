import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { Iuser } from './interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel("user")private userModel:Model<Iuser>){}
   async create(createUserDto: CreateUserDto) {
   const CreateUser = new this.userModel(createUserDto)
   return CreateUser.save()
  };

  async findAll():Promise<Iuser[]> {
   const AllUser = await this.userModel.find()
   if(!AllUser){
    throw new NotFoundException("Categorie data not found")
   }else{
    return AllUser
   }
  }

  async findOne(id: string):Promise<Iuser> {
    const UserById = await this.userModel.findById(id)
    if(!UserById){
      throw new NotFoundException("User data not found")
    }else{
      return UserById
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto):Promise<Iuser> {
    const user = await this.userModel.findByIdAndUpdate(id)
    if(!user){
      throw new NotFoundException("User not found")
    }else{
      return user
    }
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id)
    if(!user){
      throw new NotFoundException("User not found")
    }else{
      return("User deleted")
    }
  }
}
