import {  Injectable, } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from "src/entidades/pedido.entity";
import { send } from "process";



@Injectable()
export class PedidoService {

    constructor(@InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido> ){}

    async create(data: Pedido){
       
     this.pedidoRepository.create(data);
     return this.pedidoRepository.save(data);
    }

    
    

      async readAll() {
        return this.pedidoRepository.find();
        

}

async update(id: number, data: Pedido){
    this.pedidoRepository.update(id ,data);
    return await this.pedidoRepository.findOne(id);
}


async read(id : number){
    return await this.pedidoRepository.findOne({where:{id}});

}
findById(id: number) {
    return this.pedidoRepository.findOne(id);
}



}



