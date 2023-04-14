import { PathsObjectV2 } from '../../interfaces/openapi.interface';

export const path: PathsObjectV2 = {
    '/healthcheck': {
        get: {
            'x-eov-operation-handler': 'healthcheck.controller',
            operationId: 'healthCheck',
            tags: ['Health Check'],
            security: [
                {
                    BearerAuth: ['root_user', 'product_admin'],
                },
            ],
            responses: {
                '200': {
                    description: 'Check health of the application',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/HealthCheck',
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
