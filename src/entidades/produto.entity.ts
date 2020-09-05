
import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';


@Entity()
export class Produto {
[x: string]: any;

@PrimaryGeneratedColumn('uuid')    
Id: number;

@Column({ name: 'name', type: 'varchar', length: 100 })
Name: String;

@Column({ name: 'description', type: 'varchar', length: 100 })
Description: String;

@Column({ name: 'price', type: 'double', length: 100 })
Price: Double;

@Column({ name: 'offerprice', type: 'double', length: 100 })
OfferPrice: Double;

    
}