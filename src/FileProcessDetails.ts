import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("fileprocessdetails")
export class fileprocessdetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  fileId: number;

  // @Column("int")
  // fileStatusId: number;

  @Column({ type: 'text' })
  description: string;

  @Column("datetime")
  time: Date;

  @Column("datetime")
  createdAt: Date;
}