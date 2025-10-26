import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatIaService } from './chat_ia.service';
import { CreateChatIaDto } from './dto/create-chat_ia.dto';
import { UpdateChatIaDto } from './dto/update-chat_ia.dto';

@Controller('chat-ia')
export class ChatIaController {
  constructor(private readonly chatIaService: ChatIaService) {}

  @Post()
  create(@Body() createChatIaDto: CreateChatIaDto) {
    return this.chatIaService.create(createChatIaDto);
  }

  @Get()
  findAll() {
    return this.chatIaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatIaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatIaDto: UpdateChatIaDto) {
    return this.chatIaService.update(+id, updateChatIaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatIaService.remove(+id);
  }
}
