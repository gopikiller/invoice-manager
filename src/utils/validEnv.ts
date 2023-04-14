import { bool, cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
    cleanEnv(process.env, {
        NODE_ENV: str(),
        PORT: port(),
        SECRET_KEY: str(),
        DB_HOST: str(),
        DB_PORT: port(),
        DB_USERNAME: str(),
        DB_PASSWORD: str(),
        DB_DATABASE: str(),
    });
};

export default validateEnv;
