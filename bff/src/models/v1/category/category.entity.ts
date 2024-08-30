import { Base } from 'src/shared/entities/base.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity('category')
export class Category extends Base {

    @Column({ type: 'varchar', nullable: false, unique: true })
    name: string;

    @Column({ type: 'varchar', nullable: false })
    description: string;

    @OneToMany(() => Product, (product) => product.category)
    product: Product[];
}
