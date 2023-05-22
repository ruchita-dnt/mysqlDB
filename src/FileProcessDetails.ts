import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { FileStatusEnum } from "./Enum";

@Entity("file_process_details")
export class file_process_details {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  fileId: number;

  @Column({ type: 'enum', enum: FileStatusEnum }) 
  fileStatusId: FileStatusEnum ;

  @Column({ type: 'text' })
  description: string;

  @Column("datetime")
  time: Date;

  @Column("datetime")
  createdAt: Date;
}