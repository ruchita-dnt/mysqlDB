import { Entity, PrimaryGeneratedColumn, Column, Binary } from "typeorm";

@Entity("filetypes")
export class filetypes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  projectId: number;

  @Column("varchar",{ length: 45 })
  type: string;

  // @Column({ type: 'enum'})
  // status: unknown ;

  @Column("datetime")
  createdAt: Date;

  @Column("datetime")
  updatedAt: Date;

  @Column("datetime")
  deletedAt: Date;
}