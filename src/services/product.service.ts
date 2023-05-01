import type { Product } from '../database/entities/product';
import { createProduct, deleteProductByProductCode, getAllProducts, getProductById, getProductByProductCode, updateProductByProductCode } from '../database/repositories';

class ProductService {
    public async createProduct(productData: Product) {
        const isProductExists = await getProductByProductCode(productData.productCode);
        // Check if product already exist
        if (isProductExists) {
            throw new Error(`Product with product code ${productData.productCode} already exist!`);
        }
        // create product
        const product = await createProduct(productData);
        if (!product) {
            throw new Error(`Failed to create new product ${productData.productCode}`);
        }
        return product;
    }

    public async getProductById(id: Product['productId']) {
        return await getProductById(id);
    }

    public async getProductByProductCode(productCode: Product['productCode']) {
        return await getProductByProductCode(productCode);
    }

    public async getAllProducts() {
        return await getAllProducts();
    }

    public async updateProduct(productCode: Product['productCode'], productData: Partial<Product>) {
        const updatedResult = await updateProductByProductCode(productCode, productData);

        if (!updatedResult) {
            throw new Error(`Failed to update product details for productCode: ${productCode}`);
        }
        return await this.getProductByProductCode(productCode);
    }

    public async deleteProductByProductCode(id: Product['productId']) {
        return await deleteProductByProductCode(id);
    }
}

export default ProductService;
