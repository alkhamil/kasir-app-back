import { CartModule } from './cart/cart.module';
import { CartController } from './cart/cart.controller';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigDatabase } from './config/config';
import { ProductEntity } from './product/product.entity';
import { CategoryEntity } from './category/category.entity';

@Module({
  imports: [
    CartModule, 
    CategoryModule,
    ProductModule,
    TypeOrmModule.forFeature([ProductEntity, CategoryEntity]),
    TypeOrmModule.forRootAsync({
      useClass: ConfigDatabase
    })
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule { }
