import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('faq_entries')
export class FaqEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', default: ''})
  question: string;

  @Column({type: 'varchar', default: ''})
  answer: string;
}