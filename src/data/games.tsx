export interface Game {
    id: number,
    name: string,
    description: string
}


export const Games: Game[] = [
    {
        id: 1,
        name: "Dictionary",
        description: "A list of all characters you are currently learning"
    },
    {
        id: 2,
        name: "Identification",
        description: "Find the match!"
    }
]
