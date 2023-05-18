import { Entity, PrimaryGeneratedColumn, Column, Binary } from "typeorm";

@Entity('projects')
export class projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar",{ length: 45 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  // @Column({ type: 'enum'})
  // status: unknown ;

  @Column("datetime")
  createdAt: Date;

  @Column("datetime")
  updatedAt: Date;

  @Column("datetime", { nullable: true })
  deletedAt: Date;
}