import { Entity, PrimaryGeneratedColumn, Column, Binary } from "typeorm";

@Entity("operation")
export class operations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar",{ length: 45 })
  operationName: string;

  @Column("varchar",{ length: 45 })
  operationCode: string;

  // @Column({ type: 'enum'})
  // status: unknown ;

  @Column("datetime")
  createdAt: Date;

  @Column("datetime")
  updatedAt: Date;

  @Column("datetime")
  deletedAt: Date;
}