import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { FileStatusEnum } from "./Enum";

@Entity("Documents")
export class Documents {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("int")
  operationId!: number;

  @Column("int")
  projectId!: number;

  @Column("int")
  documentTypeId!: number;

  @Column("varchar", { length: 45 })
  tailNo!: string;

  @Column("varchar", { length: 45 })
  flightNo!: string;

  @Column("varchar", { length: 60 })
  documentName!: string;

  @Column("varchar", { length: 100 })
  sourcePath!: string;

  @Column("varchar", { length: 255 })
  stagingAreaPath!: string;

  @Column({ type: 'enum', enum: FileStatusEnum })
  status!: FileStatusEnum;

  @Column("datetime")
  processStartTime!: Date;

  @Column("datetime")
  processEndTime!: Date;

  
  
  @Column("datetime")
  createdAt!: Date;

  @Column("datetime")
  updatedAt!: Date;

}