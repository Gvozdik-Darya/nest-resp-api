import { Body, Controller, Delete, Get,Res, HttpCode, HttpStatus, Req,  Param, Post, Put,Header, Redirect } from '@nestjs/common';
import { CreateProductDto } from './Data Transfer Object/create-product.dto'
import {UpdateProductDto} from './Data Transfer Object/update-product.dto'
import { Request, Response } from 'express'
import { ProductsService } from './products.service'
import {Product} from './schemas/product.schema'

// app.use((req, res, next) => {
//     res.status(201).end('poka')
// })

@Controller('products')
export class ProductsController {
    
    // @Get()//на какой метод http запроса он будет откликаться
    // //@Redirect('https://google.com', 301)//не понятно что за статус код!!!
    // getAll(@Req() Req: Request, @Res() res: Response) {
    //     res.status(201).end("Poke")
    // return 'getAll'
    // }

    constructor(private readonly productsService: ProductsService) {
        
    }
    @Get()
    getAll(): Promise<Product[]> {
        return this.productsService.getAll()
    }
    
    @Get(':id')//динамический параметр
    getOne(@Param('id') id: string): Promise<Product>  {//декторатор для входящий свойств . params в какую переменную хотим вернуть
        return this.productsService.getById(id)
    }

    //для того чтобы понимали с каким типом данных мы работем - dto
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Chache-Control', 'none')//name value
    create(@Body() createProductDto: CreateProductDto): Promise<Product>  {//хотим получить параметр из тела запроса
    return this.productsService.create(createProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Product>  {
        return this.productsService.remove(id)

    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): Promise<Product>  {
        return this.productsService.update(id, updateProductDto)
    }

}
