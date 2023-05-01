import { Repository } from 'typeorm';

import type { Customer } from '../entities/customer';

class CustomerRepository extends Repository<Customer> {
    createCustomer = async (customerData: Customer) => {
        return await this.save(customerData);
    };

    getAllCustomers = async () => {
        return await this.createQueryBuilder().where({ active: true }).getMany();
    };

    getCustomerById = async (id: Customer['customerId']) => {
        return await this.findOne({ where: { customerId: id } });
    };

    getCustomerByName = async (name: Customer['name']) => {
        return await this.findOne({ where: { name } });
    };

    getCustomerByEmail = async (email: Customer['email']) => {
        return await this.findOne({ where: { email } });
    };

    updateCustomerById = async (id: Customer['customerId'], updatedata: Partial<Customer>) => {
        return await this.update({ customerId: id }, updatedata);
    };

    deleteCustomerById = async (id: Customer['customerId']) => {
        return await this.delete(id);
    };
}

export default CustomerRepository;
