import { Test, TestingModule } from '@nestjs/testing';
import { ChatIaController } from './chat_ia.controller';
import { ChatIaService } from './chat_ia.service';

describe('ChatIaController', () => {
  let controller: ChatIaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatIaController],
      providers: [ChatIaService],
    }).compile();

    controller = module.get<ChatIaController>(ChatIaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
