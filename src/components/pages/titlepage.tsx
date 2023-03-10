import Button from "@mui/material/Button"
import Guest from '@mui/icons-material/NoAccounts'

const TitlePage = ({handleClick} : {handleClick:Function}): JSX.Element => {
    return (
        <>
            <Button variant="outlined" size="large" startIcon={<Guest />} onClick={(e) => {
                e.stopPropagation();
                handleClick()
            }}>Guest Mode</Button>
            <br /><br />
            <i>Progress is not saved in Guest Mode.</i>
        </>
	);
}

export default TitlePage;
