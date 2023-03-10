import MenuButton from "../menubutton";
import PlayButton from '../playbutton';
import { Card } from '@mui/material';
import { useContext } from 'react';
import { Path, Paths} from '../../data/data';
import { PathContext } from '../../context/PathContext';

function ModePage({enterGamesPage} : {enterGamesPage:Function}) {
    const { path, setPath } = useContext(PathContext);
    function pathSelected(p: Path) {
        setPath(p);
    }

    return (
			<>
                <ul className="mode-list">
                    {Paths.map((p) => (
                        <li key={p.id} className="mode-list-item">
                            <MenuButton text={p.button_text} onSelect={ () => pathSelected(p) } />
                            { path.id === p.id ? <PlayButton onClicked={ () => enterGamesPage() } /> : null }
                        </li>
                    ))}
                 </ul>
                <Card>{path.description}</Card>
			</>
	);
}

export default ModePage;
