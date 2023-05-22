import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ResourceStatusEnum } from "./Enum";

@Entity('Projects')
export class Projects {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { length: 45 })
  name!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'enum', enum: ResourceStatusEnum })
  status!: ResourceStatusEnum;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })   
  updatedAt!: Date;

  @Column("datetime", { nullable: true })
  deletedAt!: Date;
}

