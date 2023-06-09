import { OpenAPIV3 as ExpressOpenAPIV3, OpenApiValidatorOpts } from 'express-openapi-validator/dist/framework/types';
import { OpenAPIV3 } from 'openapi-types';
import * as path from 'path';

import AuthMiddleware from '../middleware/auth.middleware';
import { components } from './components';
import paths from './paths';

export const spec: OpenAPIV3.Document = {
    openapi: '3.0.0',
    servers: [
        {
            url: 'http://localhost:3000/',
            description: 'Localhost',
        },
    ],
    info: {
        version: '1.0',
        title: 'Node Express Server',
    },
    paths,
    components,
};

export const openapi: OpenApiValidatorOpts = {
    apiSpec: spec as ExpressOpenAPIV3.Document,
    validateRequests: true,
    validateResponses: true,
    operationHandlers: path.join(__dirname, '../controllers/'),
    validateSecurity: {
        handlers: {
            BearerAuth: async (req, roles, schema) => {
                const authMiddleware = await new AuthMiddleware().authorizationHandler(req, roles);
                if (authMiddleware.status >= 400) {
                    throw { status: authMiddleware.status, message: authMiddleware.message };
                }
                return true;
            },
        },
    },
};
