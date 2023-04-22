import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import type { Invoices } from './invoices';

@Entity('customers')
export class Customers {
    @PrimaryGeneratedColumn('uuid', { name: 'customerid' })
    customerId: string;

    @Column('text', { name: 'name', nullable: false })
    name: string;

    @Column('text', { name: 'email', nullable: false, unique: true })
    email: string;

    @Column('text', { name: 'phone', nullable: true })
    phone: string | null;

    @Column('text', { name: 'address', nullable: true })
    address: string | null;

    @Column('boolean', { name: 'active', default: true })
    active: boolean;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp without time zone' })
    updatedAt: Date;

    @OneToMany('Invoices', (invoice: Invoices) => invoice.customer)
    invoices: Invoices[];
}
