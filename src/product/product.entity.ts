import { CartEntity } from "src/cart/cart.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from "typeorm";

import { CategoryEntity }  from '../category/category.entity'

@Entity('m_product')
export class ProductEntity {

  @PrimaryGeneratedColumn() 
  id: number

  @Column() 
  image: string

  @Column() 
  code: string

  @Column() 
  price: number

  @Column() 
  name: string

  @Column()
  description: string

  @Column({default : true})
  is_ready: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => CategoryEntity, (category: CategoryEntity) => category.product, {onDelete: 'CASCADE'})
  category: CategoryEntity
}