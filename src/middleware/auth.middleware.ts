import { Request } from 'express';
import { verify } from 'jsonwebtoken';
import moment from 'moment';

import { ReqHeaders, SECRET_KEY, STATUS_CODE } from '../config';
import { Payload } from '../interfaces/jwt.interface';
import { AppLogger } from '../interfaces/logger.interface';
import logger from '../utils/logger';

class AuthMiddleware {
    private secret: string;
    private log: AppLogger;
    private now: number;

    constructor() {
        this.secret = this.getSecret();
        this.log = logger();
        this.now = moment().unix();
    }

    private getSecret(): string {
        if (!SECRET_KEY) {
            throw new Error('Secret not found!');
        }
        return SECRET_KEY;
    }

    private veriftToken(token: string) {
        try {
            return <Payload>verify(token, this.secret);
        } catch (error) {
            this.log.error('invalid token');
        }
    }

    async authorizationHandler(req: Request, role: string[]) {
        if (!req.headers || !req.headers[ReqHeaders.AUTHORIZATION]) {
            return { status: STATUS_CODE.UNAUTHORIZED, message: 'Missing authorization token' };
        }

        try {
            const token = req.headers && req.headers[ReqHeaders.AUTHORIZATION] ? req.headers[ReqHeaders.AUTHORIZATION].split(' ')[1] : null;

            if (!token) {
                return { status: STATUS_CODE.UNAUTHORIZED, message: 'Missing authorization token' };
            }

            const payload = this.veriftToken(token);

            if (!payload) {
                this.log.info('payload not found');
                return { status: STATUS_CODE.UNAUTHORIZED, message: 'unauthorized' };
            }

            if (this.now < Number(payload.iat) || Number(payload.exp) < this.now) {
                this.log.error('expired token');
                return { status: STATUS_CODE.UNAUTHORIZED };
            }

            const hasNoRole = payload.roles.filter(a => role.includes(a)).length === 0;
            if (hasNoRole) {
                this.log.error('no permission');
                return { status: STATUS_CODE.FORBIDDEN };
            }

            req.body['payload'] = payload;
            console.log(req.body.payload);
            return { status: STATUS_CODE.OK };
        } catch (error) {
            this.log.info(error);
            return { status: STATUS_CODE.UNAUTHORIZED, message: 'unauthorized' };
        }
    }
}

export default AuthMiddleware;
