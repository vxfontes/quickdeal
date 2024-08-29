import { Base } from 'src/shared/models/base.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity('category')
export class Category extends Base {

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Product, (product) => product.category)
    product: Product[];
}
