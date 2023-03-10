import { useState } from 'react';
import GameList from '../gamelist';
import { Game, Games } from '../../data/games';
import PlayGame from '../playgame'

function GamesPage() {
    const [ activeGame, setActiveGame] = useState(Games[0]);
    const [ isPlaying, setIsPlaying] = useState(false);

    function chooseGame(game: Game) {
        setActiveGame(game);
        setIsPlaying(true);
    }

    return (
        <>
            { isPlaying ? <PlayGame game={activeGame} /> : <GameList chooseGame={chooseGame} /> }
        </>
    );
}

export default GamesPage;
