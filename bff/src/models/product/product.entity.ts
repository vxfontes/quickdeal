import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from '../category/category.entity';
import { User } from '../user/user.entity';
import { Base } from 'src/shared/models/base.entity';
import { Review } from '../review/review.entity';

@Entity('product')
export class Product extends Base {

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'varchar', nullable: false })
    description: string;

    @Column({ type: 'bool', nullable: false, default: true })
    active: boolean;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    @Column({ name: 'stock_quantity', type: 'int', nullable: false })
    stockQuantity: number;

    @OneToMany(() => Review, (review) => review.product, { cascade: true })
    review: Review[];

    @ManyToOne(() => Category, { nullable: false })
    @JoinColumn({ name: 'category' })
    category: Category;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({ name: 'store' })
    store: User;
}
