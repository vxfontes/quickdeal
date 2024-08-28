import { Column, Entity } from 'typeorm';
import { RoleEnum } from './role.entity';
import { Base } from 'src/shared/models/base.entity';

@Entity({ name: 'user', schema: "app" })
export class User extends Base {

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'varchar', nullable: false, unique: true })
    email: string;

    @Column({ type: 'varchar', nullable: false })
    password: string;

    @Column({ type: 'enum', enum: RoleEnum, nullable: false })
    role: string;
}