import {  Injectable, HttpException, HttpStatus, } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from "src/entidades/produto.entity";
import { Cron } from '@nestjs/schedule';


@Injectable()
export class ProdutoService {
    cli: any;
    ProdutoService: any;

    constructor(@InjectRepository(Produto)
    private produtoRepository: Repository<Produto> ){}

    async create(data: Produto){
        this.produtoRepository.create(data);
          this.email();
          return this.produtoRepository.save(data);
         
       
    }


    async readAll(data: Produto) {

        if(data = null){
          this.email2();
        }
        return this.produtoRepository.find(data);
        

}

async update(id: number, data: Produto){
    this.produtoRepository.update(id ,data);
    return await this.produtoRepository.findOne(id);
}


async read(id : number){
    return await this.produtoRepository.findOne({where:{id}});

}
findById(id: number) {
    return this.produtoRepository.findOne(id);
}
async register(data: Produto) {
    const { name } = data;
    let user = await this.cli.findOne({ where: { name } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    user = this.produtoRepository.create(data);
    await this.produtoRepository.save(user);
    return user.toResponseObject();
  }


  public email(): void {
    this
      .ProdutoService
      .sendMail({
        to: 'nauam.pinto@gmail.com',
        from: '"Ser anonimato" <smtp.mailtrap.io>',
        subject: 'Produto criado',
        template: __dirname + '/welcome', 
        context: {  
          code: 'cf1a3f828287',
          username: '17824ad0a5852c',
        },
      })


      
    }


    public email2(): void {
      this
        .ProdutoService
        .sendMail({
          to: 'nauam.pinto@gmail.com',
          from: '"Ser anonimato" <smtp.mailtrap.io>',
          subject: 'Sem stoque',
          template: __dirname + '/welcome', 
          context: {  
            code: 'cf1a3f828287',
            username: '17824ad0a5852c',
          },
        })
  
  
        
      }
      
      @Cron('45 * * * * *')
      handleCron() {
        this.email();
        this.email2();
      }
  


      



}