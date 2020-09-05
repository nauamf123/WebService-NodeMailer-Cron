import { Controller, Body, Post, Get, Param, Delete, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import {  PedidoService } from "./pedido.service";











@Controller('/pedido')
export class PedidoController { 


    constructor(private  pedidoService: PedidoService ) { }
    @Get()
    showAllproduto(){
     return this.pedidoService.readAll();
    }

    @Post()
    createProduto(@Body() ItemPedido){
     return this.pedidoService.create(ItemPedido);
    }

    @Get('id:')
    readProduto(@Param() id: number){
     return this.pedidoService.read(id);
     
    }

    @Put('id:')
    upadateProduto(@Param('id') id: number, @Body() data) {
        return this.pedidoService.update(id, data);
    }
   


}
