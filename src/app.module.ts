import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteController } from './service/cliente.controller';
import { ClienteService } from './service/cliente.service';
import { ProdutoController } from './service/produto.controller';
import { ItemPedidoController } from './service/itempedido.controller';
import { PedidoController } from './service/pedido.controller';
import { ProdutoService } from './service/produto.service';
import { ItempedidoService } from './service/itempedido.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entidades/produto.entity';
import { Cliente } from './entidades/cliente.entity';
import { ItemPedido } from './entidades/itempedido.entity';
import { Pedido } from './entidades/pedido.entity';
import { PedidoService } from './service/pedido.service';
import 'module-alias/register';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 54345,
      username: 'nauam',
      password: '7887',
      database: 'WebService',
      entities: [
       Produto,
       Cliente,
       ItemPedido,
       Pedido
      ],
      synchronize: true,
      logging: true,
    }),

    TypeOrmModule.forFeature([
      Produto,
       Cliente,
       ItemPedido,
       Pedido
    ]),
    

    ScheduleModule.forRoot(),
  ],
  
  providers: 
  [AppService,
    ClienteService,
    ProdutoService,
    ItempedidoService,
    PedidoService
  
  
  ],
  controllers:
   [ProdutoController,
    ClienteController,
    ItemPedidoController,
    PedidoController
  
  ],
})
export class AppModule {}
