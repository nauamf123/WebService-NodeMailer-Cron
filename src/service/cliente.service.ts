import {  Injectable, HttpException, HttpStatus, } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from "src/entidades/cliente.entity";




@Injectable()
export class ClienteService {
    cli: any;

    constructor(@InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente> ){}

    async create(data: Cliente){
        this.clienteRepository.create(data);
        return this.clienteRepository.save(data);
    }


    async readAll() {
        return this.clienteRepository.find();
        

}

async update(id: number, data: Cliente){
    this.clienteRepository.update(id ,data);
    return await this.clienteRepository.findOne(id);
}


async read(id : number){
    return await this.clienteRepository.findOne({where:{id}});

}
findById(id: number) {
    return this.clienteRepository.findOne(id);
}
async register(data: Cliente) {
    const { name } = data;
    let user = await this.cli.findOne({ where: { name } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = this.clienteRepository.create(data);
    await this.clienteRepository.save(user);
    return user.toResponseObject();
  }


}