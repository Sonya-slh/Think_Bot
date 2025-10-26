import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ChatIaModule } from './chat_ia/chat_ia.module';
import { ConversationModule } from './conversation/conversation.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true, envFilePath:'.env'}),
    MongooseModule.forRoot('mongodb://localhost:27017/ai-assistant'),
    UserModule,
    ChatIaModule,
    ConversationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

