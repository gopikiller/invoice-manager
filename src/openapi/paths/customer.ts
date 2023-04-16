import { PathsObjectV2 } from '../../interfaces/openapi.interface';

export const path: PathsObjectV2 = {
    '/customer': {
        post: {
            'x-eov-operation-handler': 'customer.controller',
            operationId: 'createCustomer',
            tags: ['Customer'],
            summary: 'Create customer',
            requestBody: {
                description: 'To create new customer',
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Customer',
                        },
                    },
                },
            },
            responses: {
                '200': {
                    description: 'Created customer datas',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Customer',
                            },
                        },
                    },
                },
                '400': {
                    description: 'Failed request',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '404': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '409': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '401': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
            },
        },
        get: {
            'x-eov-operation-handler': 'customer.controller',
            operationId: 'getCustomers',
            tags: ['Customer'],
            summary: 'Get customers',
            responses: {
                '200': {
                    description: 'Get all customers',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    $ref: '#/components/schemas/Customer',
                                },
                            },
                        },
                    },
                },
                '404': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '409': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '401': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
            },
        },
    },
    '/customer/{customerId}': {
        get: {
            'x-eov-operation-handler': 'customer.controller',
            operationId: 'getCustomerById',
            summary: 'Get customer by customerId',
            tags: ['Customer'],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'customerId',
                    schema: {
                        $ref: '#/components/schemas/customerId',
                    },
                },
            ],
            responses: {
                '200': {
                    description: 'Get customer by ID',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Customer',
                            },
                        },
                    },
                },
                '404': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '400': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '409': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '401': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
            },
        },
        patch: {
            'x-eov-operation-handler': 'customer.controller',
            operationId: 'updateCustomerById',
            summary: 'Update customer by customerId',
            tags: ['Customer'],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'customerId',
                    schema: {
                        $ref: '#/components/schemas/customerId',
                    },
                },
            ],
            requestBody: {
                description: 'JSON object to update customer',
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Customer',
                        },
                    },
                },
            },
            responses: {
                '200': {
                    description: 'updated customer response',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Customer',
                            },
                        },
                    },
                },
                '404': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '400': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '409': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '401': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
            },
        },
        delete: {
            'x-eov-operation-handler': 'customer.controller',
            operationId: 'deleteCustomerById',
            summary: 'Delete customer by customerId',
            tags: ['Customer'],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'customerId',
                    schema: {
                        $ref: '#/components/schemas/customerId',
                    },
                },
            ],
            responses: {
                '204': {
                    description: 'Sucessfully deleted customer',
                },
                '404': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '400': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '409': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                '401': {
                    description: '',
                    headers: {},
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
            },
        },
    },
};
