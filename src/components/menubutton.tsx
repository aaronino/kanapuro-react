import React from 'react';
import Button from "@mui/material/Button"

type MenuButtonProps = {
    text: string
    onSelect?: any // todo what type is a mouseevent?
}

function MenuButton ({text, onSelect}: MenuButtonProps): JSX.Element {
    return (
            <Button variant="outlined" size="large" onClick={onSelect}>
                {text}
            </Button>
    )
};

export default MenuButton;
