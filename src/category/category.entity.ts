import { ProductEntity } from "src/product/product.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity('m_category')
export class CategoryEntity {

  @PrimaryGeneratedColumn() 
  id: number;

  @Column() 
  name: string;

  @OneToMany(() => ProductEntity, (product: ProductEntity) => product.category, {onDelete: 'RESTRICT'})
  product: ProductEntity;

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}