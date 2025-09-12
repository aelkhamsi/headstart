
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { FaqEntry } from "../entities/faq.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateFaqEntryDto } from "../dto/create-faq-entry.dto";
import { UpdateFaqEntryDto } from "../dto/update-faq-entry.dto";

@Injectable()
export class FaqService {
  constructor(
    @InjectRepository(FaqEntry) private faqRepository: Repository<FaqEntry>,
  ) {}

  create(createFaqEntryDto: CreateFaqEntryDto) {
    const faqEntry = this.faqRepository.create(createFaqEntryDto)
    return this.faqRepository.save(faqEntry)
  }

  findAll() {
    return this.faqRepository.find()
  }

  findOneById(id: number) {
    return this.faqRepository.findOneBy({ id })
  }

  updateById(id: number, updateFaqEntryDto: UpdateFaqEntryDto) {
    return this.faqRepository.update({ id }, updateFaqEntryDto)
  }

  deleteById(id: number) {
    return this.faqRepository.delete({ id })
  }
} 

