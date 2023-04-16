import { Repository } from 'typeorm';

import type { Customers } from '../entities/customers';

class CustomerRepository extends Repository<Customers> {
    createCustomer = async (customerData: Customers) => {
        return await this.save(customerData);
    };

    getAllCustomers = async () => {
        return await this.createQueryBuilder().getMany();
    };

    getCustomerById = async (id: Customers['customerId']) => {
        return await this.findOne({ where: { customerId: id } });
    };

    getCustomerByName = async (name: Customers['name']) => {
        return await this.findOne({ where: { name } });
    };

    getCustomerByEmail = async (email: Customers['email']) => {
        return await this.findOne({ where: { email } });
    };
}

export default CustomerRepository;
