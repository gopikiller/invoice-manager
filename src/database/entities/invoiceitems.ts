import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import type { Invoices } from './invoices';
import type { Products } from './products';

@Entity('invoiceitems')
export class InvoiceItems {
    @PrimaryGeneratedColumn('uuid', { name: 'invoiceitemid' })
    invoiceitemId: string;

    @Column('int', { name: 'quantity', nullable: false, default: 1 })
    quantity: number;

    @ManyToOne('Products', (product: Products) => product.productId)
    @JoinColumn({ name: 'productId' })
    product: Products;

    @ManyToOne('Invoices', (invoice: Invoices) => invoice.invoiceId)
    @JoinColumn({ name: 'invoiceId' })
    invoice: Invoices;
}
