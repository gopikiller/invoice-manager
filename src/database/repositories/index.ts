import AppDataSource from '..';
import { Customers } from '../entities/customers';
import CustomerRepository from './customer.repository';

// Customer repositories
const customerRepository = new CustomerRepository(Customers, AppDataSource.manager);
export const createCustomer = customerRepository.createCustomer.bind(customerRepository);
export const getCustomerById = customerRepository.getCustomerById.bind(customerRepository);
export const getCustomerByEmail = customerRepository.getCustomerByEmail.bind(customerRepository);
export const getCustomerByName = customerRepository.getCustomerByName.bind(customerRepository);
export const getAllCustomers = customerRepository.getAllCustomers.bind(customerRepository);
export const updateCustomerById = customerRepository.updateCustomerById.bind(customerRepository);
export const deleteCustomerById = customerRepository.deleteCustomerById.bind(customerRepository);
