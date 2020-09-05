import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Pedido } from "./pedido.entity";




@Entity()
export class Cliente {

   @PrimaryGeneratedColumn()
   id: number;

    @Column({ name: 'name', type: 'varchar', length: 100 })
    name: String;

    @Column({ name: 'cpf', type: 'varchar', length: 100 })
    cpf: String;

    @Column({ name: 'rg', type: 'varchar', length: 100 })
    rg: String;

    @Column({ name: 'email', type: 'varchar', length: 100 })
    email: String;

    @Column({ name: 'date', type: 'date', length: 100 })
    dataNascimento: Date;

    @OneToMany(type => Pedido, pedido => pedido.cliente, { cascade: true, eager: true })
    pedido: Pedido[];

}