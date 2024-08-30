import { Base } from 'src/shared/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'address', schema: "app" })
export class Address extends Base {

    @Column({ type: 'varchar', nullable: false })
    street: string;

    @Column({ type: 'varchar' })
    neighborhood?: string;

    @Column({ type: 'varchar', nullable: false })
    city: string;

    @Column({ name: 'zip_code', type: 'varchar', nullable: false })
    zipCode: string;

    @Column({ type: 'varchar', nullable: false })
    number: string;

    @Column({ type: 'varchar' })
    complement?: string;

    @Column({ type: 'varchar', nullable: false })
    phone: string;

    @Column({ type: 'varchar' })
    reference?: string;
}
