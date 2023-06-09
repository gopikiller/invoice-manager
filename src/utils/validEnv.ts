import { bool, cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
    cleanEnv(process.env, {
        NODE_ENV: str(),
        PORT: port(),
        SECRET_KEY: str(),
        DB_URL: str(),
    });
};

export default validateEnv;
