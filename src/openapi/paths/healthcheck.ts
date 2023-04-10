import { PathsObjectV2 } from '../../interfaces/openapi.interface';

export const path: PathsObjectV2 = {
    '/healthcheck': {
        get: {
            'x-eov-operation-handler': 'HealthCheckV2.controller',
            operationId: 'healthCheck',
            tags: ['Health Check'],
            responses: {
                '200': {
                    description: 'Check health of the application',
                    content: {
                        'application/json': {
                            schema: {
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
                        },
                    },
                },
            },
        },
    },
};
