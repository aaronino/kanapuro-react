import MenuButton from "../menubutton";
import PlayButton from '../playbutton';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import { Path, Paths} from '../../data/data';
import { PathContext } from '../../context/PathContext';
import Grid from "@mui/material/Grid";

function ModePage({enterGamesPage} : {enterGamesPage:Function}) {
    const { path, setPath } = useContext(PathContext);
    function pathSelected(p: Path) {
        setPath(p);
    }

    return (
			<>
                <Grid container spacing={2}>
                    <Grid item xs={2} />
                    <Grid item xs={8} >
                        <ul className="mode-list">
                            {Paths.map((p) => (
                                <li key={p.id} className="mode-list-item">
                                    <Grid container spacing={2}>
                                        <Grid item xs={10}>
                                            <MenuButton text={p.button_text} onSelect={ () => pathSelected(p) } />
                                        </Grid>
                                        <Grid item xs={2}>
                                            { path.id === p.id ? <PlayButton onClicked={ () => enterGamesPage() } /> : null }
                                        </Grid>
                                    </Grid>
                                </li>
                            ))}
                        </ul>

                        <Paper>{path.description}</Paper>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
			</>
	);
}

export default ModePage;
