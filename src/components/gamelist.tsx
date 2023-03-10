import MenuButton from "./menubutton";
import PlayButton from './playbutton';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import { useState } from 'react';
import { Game, Games } from '../data/games';

export default function GameList({chooseGame} : {chooseGame:Function}) {
    const [ game, setGame ] = useState(Games[0]);
    function gameSelected(name: Game) {
        setGame(name);
    }

    return (
            <>
                <Grid container spacing={2}>
                    <Grid item xs={2} />
                    <Grid item xs={8} >
                        <ul className="game-list">
                            { Games.map (g =>

                                <li key={g.id} className="game-list-item">
                                    <Grid container spacing={2}>
                                        <Grid item xs={10} >
                                            <MenuButton text={g.name} onSelect={ () => gameSelected(g) } />
                                        </Grid>
                                        <Grid item xs={2}>
                                            { game.id === g.id ? <PlayButton onClicked={ () => chooseGame(g) } /> : null }
                                        </Grid>

                                    </Grid>

                                </li>
                            )}
                        </ul>
                        <Paper>{game.description}</Paper>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
			</>
    );
}
