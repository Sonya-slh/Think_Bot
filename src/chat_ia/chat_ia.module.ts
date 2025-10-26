import { Module } from '@nestjs/common';
import { ChatIaService } from './chat_ia.service';
import { ChatIaController } from './chat_ia.controller';

@Module({
  controllers: [ChatIaController],
  providers: [ChatIaService],
})
export class ChatIaModule {}
