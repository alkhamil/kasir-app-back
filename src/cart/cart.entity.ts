import { ProductEntity } from "src/product/product.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinColumn } from "typeorm";

@Entity('t_cart')
export class CartEntity {

  @PrimaryGeneratedColumn() 
  id: number

  @Column() 
  qty: number

  @Column() 
  total_price: number

  @OneToOne(type => ProductEntity)
  @JoinColumn()
  product: ProductEntity

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

}