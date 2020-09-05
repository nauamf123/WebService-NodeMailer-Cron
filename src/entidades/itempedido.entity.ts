import { Double, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Pedido } from "./pedido.entity";
import { Produto } from "./produto.entity";





export class ItemPedido {
 toResponseObject() {
     throw new Error("Method not implemented.");
 }

 @PrimaryGeneratedColumn()
 id: number;

 @Column({ name: 'qualidade', type: 'varchar', length: 100 })
 qualidade: String;

 @Column({ name: 'valorunitario', type: 'double', length: 100 })
 valorunitario: Double;

 @Column({ name: 'totaldesconto', type: 'double', length: 100 })
 totaldesconto: Double;

 @Column({ name: 'valortotal', type: 'double', length: 100 })
 valortotal: Double;

 

 @ManyToOne(type => Produto, user => user.Produto)
 produto: Produto;

 @ManyToOne(type => Pedido, user => user.Pedido)
 pedido: Pedido;

 

}