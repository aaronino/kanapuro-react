import { Game, GameCode } from '../data/games';
import { PathCharacters, PathCharacter } from '../data/data';
import DictionaryGame from './games/dictionarygame';
import IdentifyGame from './games/identification';

export default function PlayGame({game, gameOver}: {game: Game, gameOver: any}) {
    let validCharacters: PathCharacter[] = PathCharacters;
    let body:React.ReactNode = null;

    // todo this component needs path, we can use that to figure out which languages
    // todo we need PlayerProgress of some kind here as well so we can pass only appropriate tiles, we can put that off for a while


    switch (game.code) {
        case GameCode.Dictionary:
            body =
            <>
                <DictionaryGame chars={validCharacters} onGameOver={gameOver} />
            </>;
            break;
        case GameCode.Identify:
            body =
            <>
                <IdentifyGame chars={validCharacters} onGameOver={gameOver} />
            </>;
            break;
    }


    return (
        <>
            {body}
        </>
    )
}
