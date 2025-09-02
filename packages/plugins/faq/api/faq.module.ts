import { Module } from '@nestjs/common';
import { FaqEntry } from './entities/faq.entity';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([FaqEntry])],
  controllers: [],
  providers: [],
  exports: [],
})
export class FaqModule {}
