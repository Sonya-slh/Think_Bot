import { Test, TestingModule } from '@nestjs/testing';
import { ChatIaService } from './chat_ia.service';

describe('ChatIaService', () => {
  let service: ChatIaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatIaService],
    }).compile();

    service = module.get<ChatIaService>(ChatIaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
