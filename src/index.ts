import Redis from "ioredis";

import { getEnv } from './env.js'
import { getRandomChessPuzzle } from "./chess_puzzles/index.js";

const env = getEnv()

try {
    const redis = new Redis(env.REDIS_URL);

    const numKeys = await redis.dbsize();

    const newKey = numKeys + 1;

    const randomPuzzle = await getRandomChessPuzzle();

    console.log("Adding new puzzle to database...");
    console.log("Key: " + newKey);
    console.log("Puzzle: ");
    console.log(randomPuzzle);

    await redis.set(newKey.toString(), JSON.stringify(randomPuzzle));
    redis.disconnect();
}
catch (error) {
    console.error(error);
    process.exit(1);
}


