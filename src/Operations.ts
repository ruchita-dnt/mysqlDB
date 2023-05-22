import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ResourceStatusEnum } from "./Enum";

@Entity("Operations")
export class Operations {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { length: 45 })
  operationName!: string;

  @Column("varchar", { length: 45 })
  operationCode!: string;

  @Column({ type: 'enum', enum: ResourceStatusEnum })
  status!: ResourceStatusEnum;

  @Column("datetime")
  createdAt!: Date;

  @Column("datetime")
  updatedAt!: Date;

  @Column("datetime", { nullable: true })
  deletedAt!: Date;
}