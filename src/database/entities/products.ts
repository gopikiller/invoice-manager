import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
export class Products {
    @PrimaryGeneratedColumn('uuid', { name: 'productid' })
    productId: string;

    @Index()
    @Column('text', { name: 'product_code', unique: true, nullable: false })
    productCode: string;

    @Column('text', { name: 'name', nullable: false })
    name: string;

    @Column('text', { name: 'description', nullable: true })
    description: string | null;

    @Column('boolean', { name: 'active', default: true })
    active: boolean;

    @Column('text', { name: 'price', nullable: false })
    price: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp without time zone' })
    updatedAt: Date;
}
