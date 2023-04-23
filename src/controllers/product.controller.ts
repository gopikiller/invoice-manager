import { Request, Response } from 'express';

import { STATUS_CODE } from '../config';
import type { Products } from '../database/entities/products';
import { AppLogger } from '../interfaces/logger.interface';
import { components, operations } from '../interfaces/schema.interface';
import ProductService from '../services/product.service';
import logger from '../utils/logger';

class ProductController {
    private readonly productService = new ProductService();
    private readonly logger: AppLogger;
    constructor() {
        this.logger = logger();
    }

    index = async (req: Request, res: Response<operations['getProducts']['responses']['200']['content']['application/json'] | components['schemas']['Error']>) => {
        try {
            const product = await this.productService.getAllProducts();
            res.status(STATUS_CODE.OK).json(product);
        } catch (err) {
            this.logger.error(err.message);
            res.status(STATUS_CODE.BAD_REQUEST).json({ error_code: STATUS_CODE.BAD_REQUEST, error_message: err.message });
            return;
        }
    };

    get = async (
        req: Request<operations['getProductByProductCode']['parameters']['path']>,
        res: Response<operations['getProductByProductCode']['responses']['200']['content']['application/json'] | components['schemas']['Error']>,
    ) => {
        const { productCode } = req.params;
        try {
            const product = await this.productService.getProductByProductCode(productCode);
            if (!product) {
                res.status(STATUS_CODE.NOT_FOUND).json({ error_code: STATUS_CODE.NOT_FOUND, error_message: `Product with product code: '${productCode}' not found!` });
                return;
            }
            res.status(STATUS_CODE.OK).json(product);
        } catch (err) {
            this.logger.error(err.message);
            res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error_code: STATUS_CODE.INTERNAL_SERVER_ERROR, error_message: 'Internal Server Error' });
            return;
        }
    };

    post = async (
        req: Request<any, any, operations['createProduct']['requestBody']['content']['application/json']>,
        res: Response<operations['createProduct']['responses']['201']['content']['application/json'] | components['schemas']['Error']>,
    ) => {
        const productRequest = req.body as Products;

        try {
            const insertData = await this.productService.createProduct(productRequest);
            this.logger.info(`Product created: ${insertData.productCode}!`);
            res.status(STATUS_CODE.CREATED).json({ ...insertData });
        } catch (err) {
            this.logger.error(err.message);
            res.status(STATUS_CODE.BAD_REQUEST).json({ error_code: STATUS_CODE.BAD_REQUEST, error_message: err.message });
            return;
        }
    };

    patch = async (
        req: Request<operations['updateProductByProductCode']['parameters']['path'], any, operations['updateProductByProductCode']['requestBody']['content']['application/json']>,
        res: Response<operations['updateProductByProductCode']['responses']['200']['content']['application/json'] | components['schemas']['Error']>,
    ) => {
        const { productCode } = req.params;
        const productRequest = req.body as Products;

        try {
            const product = await this.productService.getProductByProductCode(productCode);

            if (!product) {
                res.status(STATUS_CODE.NOT_FOUND).json({ error_code: STATUS_CODE.NOT_FOUND, error_message: `Product with product code: '${productCode}' not found!` });
                return;
            }

            const updatedCustomer = await this.productService.updateProduct(productCode, productRequest);
            if (!updatedCustomer) {
                this.logger.error(`Failed to return updated product`);
                res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error_code: STATUS_CODE.INTERNAL_SERVER_ERROR, error_message: 'Internal Server Error' });
                return;
            }
            res.status(STATUS_CODE.OK).json(updatedCustomer);
        } catch (err) {
            this.logger.error(err.message);
            res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error_code: STATUS_CODE.INTERNAL_SERVER_ERROR, error_message: 'Internal Server Error' });
            return;
        }
    };

    delete = async (req: Request<operations['deleteProductById']['parameters']['path']>, res: Response<operations['deleteProductById']['responses']['204'] | components['schemas']['Error']>) => {
        const { productCode } = req.params;

        try {
            const product = await this.productService.getProductByProductCode(productCode);

            if (!product) {
                res.status(STATUS_CODE.NOT_FOUND).json({ error_code: STATUS_CODE.NOT_FOUND, error_message: `Product '${productCode}' not found!` });
                return;
            }

            const deleteProduct = await this.productService.deleteProductByProductCode(productCode);
            if (!deleteProduct) {
                this.logger.error(`Failed to delete product ${productCode}`);
                res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error_code: STATUS_CODE.INTERNAL_SERVER_ERROR, error_message: 'Internal Server Error' });
                return;
            }
            res.status(STATUS_CODE.NO_CONTENT).send();
        } catch (err) {
            this.logger.error(err.message);
            res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error_code: STATUS_CODE.INTERNAL_SERVER_ERROR, error_message: 'Internal Server Error' });
            return;
        }
    };
}

const productController = new ProductController();
export const getProducts = productController.index.bind(productController);
export const createProduct = productController.post.bind(productController);
export const getProductByProductCode = productController.get.bind(productController);
export const updateProductByProductCode = productController.patch.bind(productController);
export const deleteProductByProductCode = productController.delete.bind(productController);
