import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { CreateCategoryDto } from './category.dto';


@Injectable()
export class CategoryService extends TypeOrmCrudService<CategoryEntity>{
    constructor(@InjectRepository(CategoryEntity) repo) {
        super(repo)
    }

    async findAll() : Promise<any>{
        return await this.repo.find({relations : ['product']}) 
    }

    async create(data : CreateCategoryDto) : Promise<any>{
        return await this.repo.save(data);
    }
}
