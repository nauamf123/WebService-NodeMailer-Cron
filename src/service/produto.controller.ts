import { Controller, Body, Post, Get, Param, Delete, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { Cliente } from "src/entidades/cliente.entity";
import { ProdutoService } from "./produto.service";
import { Produto } from "src/entidades/produto.entity";





@Controller('/produto')
export class ProdutoController { 


    constructor(private  produtoService: ProdutoService ) { }
    
    @Get()
    showAllproduto(@Body() data){
     return this.produtoService.readAll(data);
    }

    @Post()
    createProduto(@Body() CadastroCliente){
     return this.produtoService.create(CadastroCliente);
    }

    @Get('id:')
    readProduto(@Param() id: number){
     return this.produtoService.read(id);
     
    }

    @Put('id:')
    upadateProduto(@Param('id') id: number, @Body() data) {
        return this.produtoService.update(id, data);
    }
   
   

    @Post('auth/register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: Produto) {
    return this.produtoService.register(data);
}

@Post()
 Cron(){
  return this.produtoService.handleCron();

 }

}