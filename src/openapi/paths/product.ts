import { PathsObjectV2 } from '../../interfaces/openapi.interface';

export const path: PathsObjectV2 = {
    '/product': {
        post: {
            'x-eov-operation-handler': 'product.controller',
            operationId: 'createProduct',
            tags: ['Product'],
            summary: 'Create product',
            requestBody: {
                description: 'To create new product',
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Product',
                        },
                    },
                },
            },
            responses: {
                '201': {
                    description: 'Created product datas',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Product',
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
            'x-eov-operation-handler': 'product.controller',
            operationId: 'getProducts',
            tags: ['Product'],
            summary: 'Get products',
            responses: {
                '200': {
                    description: 'Get all products',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    $ref: '#/components/schemas/Product',
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
    '/product/{productCode}': {
        get: {
            'x-eov-operation-handler': 'product.controller',
            operationId: 'getProductByProductCode',
            summary: 'Get product by productCode',
            tags: ['Product'],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'productCode',
                    schema: {
                        $ref: '#/components/schemas/productCode',
                    },
                },
            ],
            responses: {
                '200': {
                    description: 'Get product by productcode',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Product',
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
            'x-eov-operation-handler': 'product.controller',
            operationId: 'updateProductByProductCode',
            summary: 'Update product by productCode',
            tags: ['Product'],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'productCode',
                    schema: {
                        $ref: '#/components/schemas/productCode',
                    },
                },
            ],
            requestBody: {
                description: 'JSON object to update product',
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Product',
                        },
                    },
                },
            },
            responses: {
                '200': {
                    description: 'updated product response',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Product',
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
            'x-eov-operation-handler': 'product.controller',
            operationId: 'deleteProductByProductCode',
            summary: 'Delete product by productCode',
            tags: ['Product'],
            parameters: [
                {
                    in: 'path',
                    required: true,
                    name: 'productCode',
                    schema: {
                        $ref: '#/components/schemas/productCode',
                    },
                },
            ],
            responses: {
                '204': {
                    description: 'Sucessfully deleted product',
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
