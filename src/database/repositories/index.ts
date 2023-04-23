import AppDataSource from '..';
import { Customers } from '../entities/customers';
import { Products } from '../entities/products';
import CustomerRepository from './customer.repository';
import ProductRepository from './product.repository';

// Customer repositories
const customerRepository = new CustomerRepository(Customers, AppDataSource.manager);
export const createCustomer = customerRepository.createCustomer.bind(customerRepository);
export const getCustomerById = customerRepository.getCustomerById.bind(customerRepository);
export const getCustomerByEmail = customerRepository.getCustomerByEmail.bind(customerRepository);
export const getCustomerByName = customerRepository.getCustomerByName.bind(customerRepository);
export const getAllCustomers = customerRepository.getAllCustomers.bind(customerRepository);
export const updateCustomerById = customerRepository.updateCustomerById.bind(customerRepository);
export const deleteCustomerById = customerRepository.deleteCustomerById.bind(customerRepository);

// Product repositories
const productRepository = new ProductRepository(Products, AppDataSource.manager);
export const createProduct = productRepository.createProduct.bind(productRepository);
export const getAllProducts = productRepository.getAllProducts.bind(productRepository);
export const getProductById = productRepository.getProductById.bind(productRepository);
export const getProductByProductCode = productRepository.getProductByProductCode.bind(productRepository);
export const updateProductByProductCode = productRepository.updateProductByProductCode.bind(productRepository);
export const deleteProductByProductCode = productRepository.deleteProductByProductCode.bind(productRepository);
