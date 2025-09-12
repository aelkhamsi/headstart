import { CreateFaqEntryDto } from "./create-faq-entry.dto";
import { PartialType } from "@nestjs/mapped-types"


export class UpdateFaqEntryDto extends PartialType(CreateFaqEntryDto) {}