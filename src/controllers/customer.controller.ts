import { Request, Response } from 'express';

import { STATUS_CODE } from '../config';
import type { Customers } from '../database/entities/customers';
import { AppLogger } from '../interfaces/logger.interface';
import { components, operations } from '../interfaces/schema.interface';
import CustomerService from '../services/customer.service';
import logger from '../utils/logger';

class CustomerController {
    private readonly customerService = new CustomerService();
    private readonly logger: AppLogger;
    constructor() {
        this.logger = logger();
    }

    index = async (req: Request, res: Response<operations['getCustomers']['responses']['200']['content']['application/json'] | components['schemas']['Error']>) => {
        try {
            const customers = await this.customerService.getAllCustomers();
            res.status(STATUS_CODE.OK).json(customers);
        } catch (err) {
            this.logger.error(err.message);
            res.status(STATUS_CODE.BAD_REQUEST).json({ error_code: STATUS_CODE.BAD_REQUEST, error_message: err.message });
            return;
        }
    };

    get = async (
        req: Request<operations['getCustomerById']['parameters']['path']>,
        res: Response<operations['getCustomerById']['responses']['200']['content']['application/json'] | components['schemas']['Error']>,
    ) => {
        const { customerId } = req.params;
        try {
            const customer = await this.customerService.getCustomerById(customerId);
            if (!customer) {
                res.status(STATUS_CODE.NOT_FOUND).json({ error_code: STATUS_CODE.NOT_FOUND, error_message: `Customer with id: '${customerId}' not found!` });
                return;
            }
            res.status(STATUS_CODE.OK).json(customer);
        } catch (err) {
            this.logger.error(err.message);
            res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error_code: STATUS_CODE.INTERNAL_SERVER_ERROR, error_message: 'Internal Server Error' });
            return;
        }
    };

    post = async (
        req: Request<any, any, operations['createCustomer']['requestBody']['content']['application/json']>,
        res: Response<operations['createCustomer']['responses']['200']['content']['application/json'] | components['schemas']['Error']>,
    ) => {
        const customerRequest = req.body as Customers;

        try {
            const insertData = await this.customerService.createCustomer(customerRequest);
            this.logger.info(`Customer created for email ${insertData.email}!`);
            res.status(STATUS_CODE.OK).json({ ...insertData });
        } catch (err) {
            this.logger.error(err.message);
            res.status(STATUS_CODE.BAD_REQUEST).json({ error_code: STATUS_CODE.BAD_REQUEST, error_message: err.message });
            return;
        }
    };
}

const customerController = new CustomerController();
export const getCustomers = customerController.index.bind(customerController);
export const createCustomer = customerController.post.bind(customerController);
export const getCustomerById = customerController.get.bind(customerController);