import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Address } from './adress.entity';

@Entity({ name: 'user_address', schema: "app" })
export class UserAddress {
    @PrimaryColumn()
    userId: string;

    @PrimaryColumn()
    addressId: string;

    @ManyToOne(() => User, user => user.id, { onDelete: 'CASCADE' })
    user: User;

    @ManyToOne(() => Address, address => address.id, { onDelete: 'CASCADE' })
    address: Address;
}
