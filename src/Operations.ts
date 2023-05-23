import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ResourceStatusEnum } from "./Enum";

@Entity("Operations")
export class Operations {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { length: 45 })
  operationName!: string;

  @Column("varchar", { length: 45 })
  operationCode!: string;

  @Column({ type: "enum", enum: ResourceStatusEnum })
  status!: ResourceStatusEnum;

  // @Column("datetime")
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
