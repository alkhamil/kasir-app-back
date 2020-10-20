import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { getRepository } from 'typeorm';
import { CreateCartDto, UpdateCartDto } from './cart.dto';
import { CartEntity } from './cart.entity';

@Injectable()
export class CartService extends TypeOrmCrudService<CartEntity> {
    constructor(@InjectRepository(CartEntity) repo) {
        super(repo)
    }

    async findAll() : Promise<any>{
        return await this.repo.find({relations : ['product']}) 
    }

    async findById(id: number) : Promise<any> {
        return await this.repo.findOne(id, {relations: ['product']})
    }

    async findByProductId(id: number) : Promise<any> {
        return await this.repo.find({ where: { product: id}, relations : ['product'] });
    }


    async create(data : CreateCartDto) : Promise<CartEntity>{
        const product = await getRepository(ProductEntity).findOne(data.productId)
        data.qty = 1;
        data.total_price = product.price * data.qty;
        const cart = await this.repo.create({
            ...data,
            product: product
        })
        await this.repo.save(cart);

        return cart;
    }

    async update(id: number): Promise<any> {
        const cart = await getRepository(CartEntity).findOne(id, {relations : ['product']})
        cart.qty++;
        cart.total_price = cart.product.price * cart.qty;
        return await this.repo.update(id, cart)
    }

    async minus(id: number): Promise<any> {
        const cart = await getRepository(CartEntity).findOne(id, {relations : ['product']})
        cart.qty--;
        if (cart.qty == 0) {
            this.delete(id)
        }else {
            cart.total_price = cart.product.price * cart.qty;
            return await this.repo.update(id, cart)
        }
    }

    async delete(id: number): Promise<any> {
        return await this.repo.delete(id);
    }
}
