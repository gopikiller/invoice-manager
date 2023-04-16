import { PathsObjectV2 } from '../../interfaces/openapi.interface';

export const path: PathsObjectV2 = {
    '/customer': {
        post: {
            'x-eov-operation-handler': 'customer.controller',
            operationId: 'createCustomer',
            tags: ['Customer'],
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
};
