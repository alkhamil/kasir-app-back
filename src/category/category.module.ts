import { CategoryService } from './category.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryController } from './category.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([CategoryEntity])
    ],
    controllers: [CategoryController],
    providers: [CategoryService,],
})
export class CategoryModule { }
