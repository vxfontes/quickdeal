import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Address } from './adress.entity';
import { User } from '../user/user.entity';

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
