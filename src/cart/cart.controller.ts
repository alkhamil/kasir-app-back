import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateCartDto, UpdateCartDto } from './cart.dto';
import { CartService } from './cart.service';

@Controller('cart')
@ApiTags('Cart')
export class CartController {
    constructor(public service: CartService) {}

    @Get('/')
    async getAll() : Promise<any> {
        return await this.service.findAll()
    }

    @Get('/:id')
    @ApiParam({name: 'id'})
    async getId(@Param('id') id) : Promise<any> {
        return await this.service.findById(id);
    }

    @Get('/product/:id')
    @ApiParam({name: 'id'})
    async getProductId(@Param('id') id) : Promise<any> {
        return await this.service.findByProductId(id);
    }

    @Post('/')
    @ApiBody({type : CreateCartDto})
    async create(@Body() cart : CreateCartDto) : Promise<any>{
        return await this.service.create(cart)
    }

    @Put('update/:id')
    @ApiParam({name: 'id'})
    async update(@Param('id') id) : Promise<any> {
        return await this.service.update(id)
    }

    @Put('minus/:id')
    @ApiParam({name: 'id'})
    async minus(@Param('id') id) : Promise<any> {
        return await this.service.minus(id)
    }

    @Delete('delete/:id')
    @ApiParam({name: 'id'})
    async delete(@Param('id') id) : Promise<any> {
        return await this.service.delete(id)
    }
}
