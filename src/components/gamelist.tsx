import MenuButton from "./menubutton";
import PlayButton from './playbutton';
import { Card } from '@mui/material';
import { useState } from 'react';
import { Game, Games } from '../data/games';

export default function GameList({chooseGame} : {chooseGame:Function}) {
    const [ game, setGame ] = useState(Games[0]);
    function gameSelected(name: Game) {
        setGame(name);
    }

    return (
            <>
                <ul className="game-list">
                    { Games.map (g =>
                        <li key={g.id} className="game-list-item">
                            <MenuButton text={g.name} onSelect={ () => gameSelected(g) } />
                            { game.id === g.id ? <PlayButton onClicked={ () => chooseGame(g) } /> : null }
                        </li>
                    )}
                </ul>
                <Card>{game.description}</Card>
			</>
    );
}
