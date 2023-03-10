import Button from "@mui/material/Button"
import Guest from '@mui/icons-material/NoAccounts'
import Grid from "@mui/material/Grid";

const TitlePage = ({handleClick} : {handleClick:Function}): JSX.Element => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Button className="menu-Button" variant="outlined" size="large" startIcon={<Guest />} onClick={(e) => {
                        e.stopPropagation();
                        handleClick()
                    }}>Guest Mode</Button>
                    <br /><br />
                    <i>Progress is not saved in Guest Mode.</i>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </>
	);
}

export default TitlePage;
