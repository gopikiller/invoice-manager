import type { Customers } from '../database/entities/customers';
import { createCustomer, deleteCustomerById, getAllCustomers, getCustomerByEmail, getCustomerById, getCustomerByName, updateCustomerById } from '../database/repositories';

class CustomerService {
    public async createCustomer(customerData: Customers) {
        const isCustomerNameExist = await getCustomerByName(customerData.name);
        // Check if name already exist
        if (isCustomerNameExist) {
            throw new Error(`Customer with name ${customerData.name} already exist!`);
        }
        // check if email already exist
        const isCustomerEmailExist = await getCustomerByEmail(customerData.email);

        if (isCustomerEmailExist) {
            throw new Error(`Customer with email ${customerData.email} already exist!`);
        }
        // create customer
        const customer = await createCustomer(customerData);
        if (!customer) {
            throw new Error(`Failed to create new customer ${customerData.email}`);
        }
        return customer;
    }

    public async getCustomerById(id: Customers['customerId']) {
        return await getCustomerById(id);
    }

    public async getAllCustomers() {
        return await getAllCustomers();
    }

    public async updateCustomer(id: Customers['customerId'], customerData: Customers) {
        const updatedResult = await updateCustomerById(id, customerData);

        if (!updatedResult) {
            throw new Error(`Failed to update customer details for id: ${id}`);
        }

        return await this.getCustomerById(id);
    }

    public async deleteCustomerByID(id: Customers['customerId']) {
        return await deleteCustomerById(id);
    }
}

export default CustomerService;
