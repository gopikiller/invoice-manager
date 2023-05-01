import { Repository } from 'typeorm';

import type { Product } from '../entities/product';

class ProductRepository extends Repository<Product> {
    createProduct = async (customerData: Product) => {
        return await this.save(customerData);
    };

    getAllProducts = async () => {
        return await this.createQueryBuilder().where({ active: true }).getMany();
    };

    getProductById = async (id: Product['productId']) => {
        return await this.findOne({ where: { productId: id } });
    };

    getProductByProductCode = async (code: Product['productCode']) => {
        return await this.findOne({ where: { productCode: code } });
    };

    updateProductByProductCode = async (code: Product['productCode'], updatedata: Omit<Partial<Product>, 'productCode'>) => {
        return await this.update({ productCode: code }, updatedata);
    };

    deleteProductByProductCode = async (code: Product['productCode']) => {
        return await this.delete({ productCode: code });
    };
}

export default ProductRepository;
