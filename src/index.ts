import Redis from "ioredis";

import { getEnv } from './env.js'
import { getRandomChessPuzzle } from "./chess_puzzles/index.js";

const env = getEnv()

try {
    const redis = new Redis(env.REDIS_URL);

    const key = 'key';

    const randomPuzzle = await getRandomChessPuzzle();
    console.log(randomPuzzle);

    // redis.set(key, 'Hello World!');

    redis.disconnect();
}
catch (error) {
    console.error(error);
    process.exit(1);
}


