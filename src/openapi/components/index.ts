import { OpenAPIV3 } from 'openapi-types';

export const components: OpenAPIV3.ComponentsObject = {
    securitySchemes: {
        BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        },
    },
    schemas: {
        Error: {
            type: 'object',
            required: ['error_code', 'error_message'],
            properties: {
                error_code: {
                    type: 'number',
                },
                error_message: {
                    type: 'string',
                },
            },
        },
        Customer: {
            type: 'object',
            required: ['name', 'email'],
            properties: {
                customerId: {
                    $ref: '#/components/schemas/customerId',
                },
                name: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                    format: 'email',
                },
                address: {
                    type: 'string',
                    nullable: true,
                },
                phone: {
                    type: 'string',
                    nullable: true,
                },
                active: {
                    type: 'boolean',
                },
                createdAt: {
                    $ref: '#/components/schemas/datetime',
                },
                updatedAt: {
                    $ref: '#/components/schemas/datetime',
                },
            },
        },
        Product: {
            type: 'object',
            required: ['name', 'productCode', 'price'],
            properties: {
                productId: {
                    $ref: '#/components/schemas/productId',
                },
                productCode: {
                    $ref: '#/components/schemas/productCode',
                },
                name: {
                    type: 'string',
                },
                description: {
                    type: 'string',
                    nullable: true,
                },
                price: {
                    type: 'string',
                },
                active: {
                    type: 'boolean',
                },
                createdAt: {
                    $ref: '#/components/schemas/datetime',
                },
                updatedAt: {
                    $ref: '#/components/schemas/datetime',
                },
            },
        },
        datetime: {
            type: 'string',
            format: 'date-time',
            description: 'date time of the entity',
        },
        customerId: {
            type: 'string',
            format: 'uuid',
            description: 'Unique identifier of the customer',
            example: 'a75048e9-a243-4661-8c4b-f95b7cc25437',
        },
        productId: {
            type: 'string',
            format: 'uuid',
            description: 'Unique identifier of the product',
        },
        productCode: {
            type: 'string',
        },
    },
};
