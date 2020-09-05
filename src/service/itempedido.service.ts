import {  Injectable, } from "@nestjs/common";
import { Repository } from "typeorm";
import { ItemPedido } from "../entidades/itempedido.entity";
import { InjectRepository } from '@nestjs/typeorm';



@Injectable()
export class ItempedidoService {
    

    constructor(@InjectRepository(ItemPedido)
    private itemRepository: Repository<ItemPedido> ){}

    async create(data: ItemPedido){
        this.itemRepository.create(data);
        return this.itemRepository.save(data);
    }


    async readAll() {
        return this.itemRepository.find();
        

}

async update(id: number, data: ItemPedido){
    this.itemRepository.update(id ,data);
    return await this.itemRepository.findOne(id);
}


async read(id : number){
    return await this.itemRepository.findOne({where:{id}});

}
findById(id: number) {
    return this.itemRepository.findOne(id);
}



}