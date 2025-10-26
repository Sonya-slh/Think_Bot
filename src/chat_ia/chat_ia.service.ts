import { Injectable } from '@nestjs/common';
import { CreateChatIaDto } from './dto/create-chat_ia.dto';
import { UpdateChatIaDto } from './dto/update-chat_ia.dto';

@Injectable()
export class ChatIaService {
  create(createChatIaDto: CreateChatIaDto) {
    return 'This action adds a new chatIa';
  }

  findAll() {
    return `This action returns all chatIa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatIa`;
  }

  update(id: number, updateChatIaDto: UpdateChatIaDto) {
    return `This action updates a #${id} chatIa`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatIa`;
  }
}
