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
                    type: 'string',
                },
                error_message: {
                    type: 'string',
                },
            },
        },
        HealthCheck: {
            type: 'object',
            required: ['status', 'message', 'is_healthy'],
            properties: {
                status: {
                    type: 'number',
                },
                message: {
                    type: 'string',
                },
                is_healthy: {
                    type: 'boolean',
                },
            },
        },
        Customer: {
            type: 'object',
            required: ['name', 'email'],
            properties: {
                customerId: {
                    type: 'string',
                },
                name: {
                    type: 'string',
                },
                email: {
                    type: 'string',
                },
                address: {
                    type: 'string',
                    nullable: true,
                },
                phone: {
                    type: 'string',
                    nullable: true,
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
    },
};
