import { Module } from '@nestjs/common';
import { FaqEntry } from './entities/faq.entity';
import { TypeOrmModule } from '@nestjs/typeorm'
import { FaqController } from './controllers/faq.controller';
import { FaqService } from './services/faq.service';

@Module({
  imports: [TypeOrmModule.forFeature([FaqEntry])],
  controllers: [FaqController],
  providers: [FaqService],
  exports: [],
})
export class FaqModule {}
