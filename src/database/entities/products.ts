import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp without time zone' })
    updatedAt: Date;
}
