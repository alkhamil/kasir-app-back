import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './category.dto';
import { CategoryService } from './category.service';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
    constructor(public service: CategoryService) {}

    @Get('/')
    async getAll() : Promise<any> {
        return await this.service.findAll()
    }

    @Post('/')
    @ApiBody({type : CreateCategoryDto})
    async create(@Body() category : CreateCategoryDto) : Promise<any>{
        return await this.service.create(category)
    }
}
