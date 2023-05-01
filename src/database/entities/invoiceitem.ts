import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import type { Invoice } from './invoice';
import type { Product } from './product';

@Entity('invoiceitem')
export class InvoiceItem {
    @PrimaryGeneratedColumn('uuid', { name: 'invoiceitemid' })
    invoiceitemId: string;

    @Column('int', { name: 'quantity', nullable: false, default: 1 })
    quantity: number;

    @ManyToOne('Product', (product: Product) => product.productId)
    @JoinColumn({ name: 'productId' })
    product: Product;

    @ManyToOne('Invoice', (invoice: Invoice) => invoice.invoiceId)
    @JoinColumn({ name: 'invoiceId' })
    invoice: Invoice;
}
