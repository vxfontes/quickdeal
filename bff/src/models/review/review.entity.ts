import { Base } from 'src/shared/models/base.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { Product } from '../product/product.entity';
import { User } from '../user/user.entity';

@Entity('review')
export class Review extends Base {

    @Column({ name: 'user_name', type: 'varchar', nullable: false })
    userName: string;

    @Column({ type: 'int', nullable: false })
    rating: number;

    @Column({ type: 'text', nullable: false })
    comment: string;

    @ManyToOne(() => Product, {nullable: false})
    @JoinColumn({ name: 'product' })
    product: Product;
}
