import { Controller, Body, Post, Get, Param, Delete, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { ItempedidoService } from "./itempedido.service";










@Controller('/item')
export class ItemPedidoController { 


    constructor(private  itemService: ItempedidoService ) { }
    @Get()
    showAllproduto(){
     return this.itemService.readAll();
    }

    @Post()
    createProduto(@Body() ItemPedido){
     return this.itemService.create(ItemPedido);
    }

    @Get('id:')
    readProduto(@Param() id: number){
     return this.itemService.read(id);
     
    }

    @Put('id:')
    upadateProduto(@Param('id') id: number, @Body() data) {
        return this.itemService.update(id, data);
    }
   


}
