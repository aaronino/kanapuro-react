import { Button } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

type PlayButtonProps = {
    onClicked: any
}

export default function PlayButton({onClicked}: PlayButtonProps) {
    return (
        <Button variant="outlined" size="large" startIcon={<PlayArrow />} onClick={onClicked} />
    );
}
