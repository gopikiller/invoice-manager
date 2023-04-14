import { JwtPayload } from 'jsonwebtoken';

export interface Payload extends JwtPayload {
    uid: string;
    email: string;
    roles: string[];
}
