import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import type { Invoice } from './invoice';

@Entity('customer')
export class Customer {
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

    @OneToMany('Invoice', (invoice: Invoice) => invoice.customer)
    invoices: Invoice[];
}
