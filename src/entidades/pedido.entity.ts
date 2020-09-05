import { Cliente } from "./cliente.entity";
import { Double, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";




export class Pedido {

@PrimaryGeneratedColumn()
 id:number;

 @Column({ name: 'datageracao', type: 'date', length: 100 })
 datageracao: Date;

 @Column({ name: 'dataprevisao', type: 'date', length: 100 })
 dataprevisao: Date;

 

 @Column({ name: 'status', type: 'varchar', length: 100 })
 status: String;
 
 @Column({ name: 'totaldesconto', type: 'double', length: 100 })
 totaldesconto: Double;
 
 @Column({ name: 'totalproduto', type: 'number', length: 100 })
 totalproduto: Number;

 @Column({ name: 'valortotal', type: 'double', length: 100 })
 valortotal: Double;

 @OneToMany(type => Pedido, pedido => pedido.cliente, { cascade: true, eager: true })
 cliente: Cliente[];
    Pedido: any;
    

 
}