import 'dotenv/config';
import Redis from "ioredis";

const { REDIS_URL } = process.env;

if (!REDIS_URL) {
    throw new Error('Redis URL not provided');
}

try {
    const renderRedis = new Redis(REDIS_URL);

    console.log(REDIS_URL);
}
catch (error) {
    console.error(error);
}


