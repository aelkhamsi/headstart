
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { FaqEntry } from "../entities/faq.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateFaqEntryDto } from "../dto/create-faq-entry.dto";

@Injectable()
export class FaqService {
  constructor(
    @InjectRepository(FaqEntry) private faqRepository: Repository<FaqEntry>,
  ) {}

  create(createFaqEntryDto: CreateFaqEntryDto) {
    const faqEntry = this.faqRepository.create(createFaqEntryDto)
    this.faqRepository.save(faqEntry)
    return faqEntry
  }

  findAll() {
    return this.faqRepository
      .createQueryBuilder('faq_entry')
      .getMany()
  }

  findOneById(id: number) {
    return this.faqRepository
      .createQueryBuilder('faq_entry')
      .where('faq_entry.id = :id', { id })
      .getOne()
  }
} 

