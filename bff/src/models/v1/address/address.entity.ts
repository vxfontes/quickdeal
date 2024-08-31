import { Base } from 'src/shared/entities/base.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ name: 'address', schema: "app" })
export class Address extends Base {

    @Column({ type: 'varchar', nullable: false })
    street: string;

    @Column({ type: 'varchar', nullable: true })
    neighborhood?: string;

    @Column({ type: 'varchar', nullable: false })
    city: string;

    @Column({ type: 'varchar', nullable: false })
    state: string;

    @Column({ name: 'zip_code', type: 'varchar', nullable: false })
    zipCode: string;

    @Column({ type: 'varchar', nullable: false })
    number: string;

    @Column({ type: 'varchar', nullable: true })
    complement?: string;

    @Column({ type: 'varchar', nullable: false })
    phone: string;

    @Column({ type: 'varchar', nullable: true })
    reference?: string;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({ name: 'user' })
    user: User;
}
