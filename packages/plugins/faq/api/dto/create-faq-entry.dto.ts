import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFaqEntryDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsNotEmpty()
  answer: string;
}
