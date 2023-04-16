import { Request, Response } from 'express';

import { STATUS_CODE } from '../config';
import type { Customers } from '../database/entities/customers';
import { AppLogger } from '../interfaces/logger.interface';
import { operations } from '../interfaces/schema.interface';
import CustomerService from '../services/customer.service';
import logger from '../utils/logger';

class CustomerController {
    private readonly customerService = new CustomerService();
    private readonly logger: AppLogger;
    constructor() {
        this.logger = logger();
    }

    public async createCustomer(req: Request<any, any, operations['createCustomer']['requestBody']['content']['application/json']>, res: Response) {
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
    }
}

const customerController = new CustomerController();
export const createCustomer = customerController.createCustomer.bind(customerController);
