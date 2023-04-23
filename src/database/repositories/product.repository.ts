import { Repository } from 'typeorm';

import type { Products } from '../entities/products';

class ProductRepository extends Repository<Products> {
    createProduct = async (customerData: Products) => {
        return await this.save(customerData);
    };

    getAllProducts = async () => {
        return await this.createQueryBuilder().where({ active: true }).getMany();
    };

    getProductById = async (id: Products['productId']) => {
        return await this.findOne({ where: { productId: id } });
    };

    getProductByProductCode = async (code: Products['productCode']) => {
        return await this.findOne({ where: { productCode: code } });
    };

    updateProductByProductCode = async (code: Products['productCode'], updatedata: Omit<Partial<Products>, 'productCode'>) => {
        return await this.update({ productCode: code }, updatedata);
    };

    deleteProductByProductCode = async (code: Products['productCode']) => {
        return await this.delete({ productCode: code });
    };
}

export default ProductRepository;
