import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
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

  @Column("datetime")
  createdAt!: Date;

  @Column("datetime")
  updatedAt!: Date;

  @Column("datetime", { nullable: true })
  deletedAt!: Date;
}

