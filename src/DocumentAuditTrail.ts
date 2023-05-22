import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { FileStatusEnum } from "./Enum";

@Entity("DocumentAuditTrail")
export class DocumentAuditTrail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("int")
  documentId!: number;

  @Column({ type: 'enum', enum: FileStatusEnum })
  status!: FileStatusEnum;

  @Column({ type: 'text' })
  description!: string;

  @Column("datetime")
  time!: Date;

  @Column("datetime")
  createdAt!: Date;
}