import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Products {
    @PrimaryGeneratedColumn('uuid', { name: 'productid' })
    productId: string;

    @Column('text', { name: 'name', nullable: false })
    name: string;

    @Column('text', { name: 'description', nullable: true })
    description: string | null;

    @Column('boolean', { name: 'active', default: false, nullable: false })
    active: boolean;

    @Column('decimal', { name: 'price', nullable: false })
    price: number;
}
