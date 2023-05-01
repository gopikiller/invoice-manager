import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { InvoiceStatus } from '../../types/invoice';
import type { Customer } from './customer';
import type { InvoiceItem } from './invoiceitem';

@Entity('invoice')
export class Invoice {
    @PrimaryGeneratedColumn('uuid', { name: 'invoiceid' })
    invoiceId: string;

    @Column('text', { name: 'invoicdnumber', nullable: false, unique: true })
    invoiceNumber: string;

    @Column('text', { name: 'status', nullable: false, default: InvoiceStatus.open })
    status: InvoiceStatus;

    @Column({ name: 'duedate', type: 'timestamp without time zone', nullable: true })
    dueDate: Date | null;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp without time zone' })
    updatedAt: Date;

    @ManyToOne('Customer', (customer: Customer) => customer.invoices)
    @JoinColumn({ name: 'customerId' })
    customer: Customer;

    @OneToMany('InvoiceItem', (invoiceitems: InvoiceItem) => invoiceitems.invoice)
    invoiceitem: InvoiceItem[];
}
