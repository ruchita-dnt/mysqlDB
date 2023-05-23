import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ResourceStatusEnum } from "./Enum";

@Entity("DocumentTypes")
export class DocumentTypes {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("int")
  projectId!: number;

  @Column("varchar", { length: 45 })
  documentType!: string;

  @Column({ type: "enum", enum: ResourceStatusEnum })
  status!: ResourceStatusEnum;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt!: Date;

  @Column("datetime", { nullable: true })
  deletedAt!: Date;
}
