import { Base } from 'src/shared/entities/base.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
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

    @ManyToOne(() => User, {nullable: false})
    @JoinColumn({ name: 'user' })
    user: User;
}
