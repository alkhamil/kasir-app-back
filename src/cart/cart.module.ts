import { CartService } from './cart.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './cart.entity';
import { CartController } from './cart.controller';
import { ProductModule } from 'src/product/product.module';

@Module({
    imports: [
        ProductModule,
        TypeOrmModule.forFeature([CartEntity])
    ],
    controllers: [CartController],
    providers: [CartService,],
})
export class CartModule { }
