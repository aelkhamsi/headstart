import { Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { FaqService } from "../services/faq.service";
import { CreateFaqEntryDto } from "../dto/create-faq-entry.dto";
import { UpdateFaqEntryDto } from "../dto/update-faq-entry.dto";

@Controller('headstart-api/faq')
export class FaqController {
  constructor(
    private readonly faqService: FaqService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(createFaqEntryDto: CreateFaqEntryDto) {
    return this.faqService.create(createFaqEntryDto)
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this.faqService.findAll()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.faqService.findOneById(id)
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateById(@Param('id', ParseIntPipe) id: number, updateFaqEntryDto: UpdateFaqEntryDto) {
    return this.faqService.updateById(id, updateFaqEntryDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.faqService.deleteById(id)
  }
}