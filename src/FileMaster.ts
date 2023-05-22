import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { FileStatusEnum } from "./Enum";

@Entity("file_master")
export class file_master {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  operationId: number;

  @Column("int")
  projectId: number;

  @Column("int")
  fileTypeId: number;

  @Column("varchar" ,{length: 45})
  tailNo: string;

  @Column("varchar",{ length: 45 })
  flightNo: string;

  @Column("varchar",{ length: 60 })
  fileName: string;

  @Column("varchar",{ length: 100 })
  sourcePath: string;

  @Column("varchar",{ length: 255 })
  stagingAreaPath: string;

  @Column("datetime")
  startTime: Date;

  @Column("datetime")
  endTime: Date;

  @Column({ type: 'enum', enum: FileStatusEnum }) 
  fileStatusId: FileStatusEnum ;
  
  @Column("datetime")
  createdAt: Date;

  @Column("datetime")
  updatedAt: Date;

}