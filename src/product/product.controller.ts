import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
@ApiTags('Product')
export class ProductController {
    constructor(public service: ProductService) {}

    @Get('/')
    async getAll() : Promise<any> {
        return await this.service.findAll()
    }

    @Post('/')
    @ApiBody({type : CreateProductDto})
    async create(@Body() product : CreateProductDto) : Promise<any>{
        return await this.service.create(product)
    }
}
