import { getEnv } from '../env.js'

const env = getEnv()

type ReturnType = Record<string, Array<Record<string, string | number | undefined>>>

export async function getRandomChessPuzzle() {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': env.RAPID_API_KEY,
            'x-rapidapi-host': 'chess-puzzles.p.rapidapi.com'
        }
    }

    // get puzzle with 3 to 4 moves
    const numMoves = Math.floor(Math.random() * (2)) + 3;

    const response = await fetch(
        `https://chess-puzzles.p.rapidapi.com/?rating=2000&themesType=ALL&playerMoves=${numMoves}&count=1`,
        options,
    )

    if (response.status !== 200) {
        throw new Error(`Failed to fetch randopm puzzle: ${response.statusText}`)
    }

    const data = (await response.json()) as ReturnType

    const puzzles = data.puzzles

    const puzzle = puzzles[0]

    return puzzle
}