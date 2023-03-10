import { Button } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

type PlayButtonProps = {
    onClicked: any
}

export default function PlayButton({onClicked}: PlayButtonProps) {
    return (
        <Button className="menu-play-button" size="large" startIcon={<PlayArrow />} onClick={onClicked} />
    );
}
