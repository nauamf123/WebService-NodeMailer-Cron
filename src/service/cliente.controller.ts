import { Controller, Body, Post, Get, Param, Delete, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { ClienteService } from "./cliente.service";
import { Cliente } from "src/entidades/cliente.entity";





@Controller('/cliente')
export class ClienteController { 


    constructor(private  clienteService: ClienteService ) { }
    @Get()
    showAllproduto(){
     return this.clienteService.readAll();
    }

    @Post()
    createProduto(@Body() CadastroCliente){
     return this.clienteService.create(CadastroCliente);
    }

    @Get('id:')
    readProduto(@Param() id: number){
     return this.clienteService.read(id);
     
    }

    @Put('id:')
    upadateProduto(@Param('id') id: number, @Body() data) {
        return this.clienteService.update(id, data);
    }
   
   

    @Post('auth/register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: Cliente) {
    return this.clienteService.register(data);
}

}