import { Game } from '../data/games';



export default function PlayGame({game}: {game: Game}) {
    let body:React.ReactNode = null;


    if (game.name === "Dictionary") {
        body = <h1>Show dictionary component</h1>;
    }


    return (
        <>
            <h1>Finally we're playing game {game.name}</h1>
            {body}
            <h1>Todo - just show a bunch of tile data here to prove it's accessible</h1>
        </>
    )
}
