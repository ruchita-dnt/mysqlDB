import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ResourceStatusEnum } from "./Enum";

@Entity("DocumentTypes")
export class DocumentTypes {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("int")
  projectId!: number;

  @Column("varchar", { length: 45 })
  documentType!: string;

  @Column({ type: 'enum', enum: ResourceStatusEnum })
  status!: ResourceStatusEnum;

  @Column("datetime")
  createdAt!: Date;

  @Column("datetime")
  updatedAt!: Date;

  @Column("datetime", { nullable: true })
  deletedAt!: Date;
}