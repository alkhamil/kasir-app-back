import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { CategoryEntity } from 'src/category/category.entity';
import { getRepository, Repository } from 'typeorm';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductService extends TypeOrmCrudService<ProductEntity> {
    constructor(@InjectRepository(ProductEntity) repo) {
        super(repo)
    }

    async findAll() : Promise<any>{
        return await this.repo.find({relations : ['category']}) 
    }

    async create(data : CreateProductDto) : Promise<ProductEntity>{
        const category = await getRepository(CategoryEntity).findOne(data.categoryId)
        const product = await this.repo.create({
            ...data,
            category : category
        })

        await this.repo.save(product);

        return product;
    }
}
