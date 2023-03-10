export enum GameCode {
    Dictionary,
    Identify
}

export interface Game {
    id: number,
    code: GameCode
    name: string,
    description: string
}


export const Games: Game[] = [
    {
        id: 1,
        code: GameCode.Dictionary,
        name: "Dictionary",
        description: "A list of all characters you are currently learning"
    },
    {
        id: 2,
        code: GameCode.Identify,
        name: "Identification",
        description: "Find the match!"
    }
]
