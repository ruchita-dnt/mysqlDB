import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class filemaster {
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

  // @Column("int")
  // fileStatusId: number;

  @Column("datetime")
  createdAt: Date;

  @Column("datetime")
  updatedAt: Date;

}