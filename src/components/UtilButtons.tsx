import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import styled from "@mui/material/styles/styled";

const ButtonIcons = styled(Avatar)((theme) => ({
    maxWidth: 24,
    maxHeight: 24,
    borderRadius: 0
}));

const UnilButton = styled(Button)(( theme ) => ({
    fontSize: 16,
    color: 'grey'
}))

const UtilsButtons = () => {
    return(
    <Stack direction={"row"}>
        <UnilButton startIcon={<ButtonIcons src="./static/images/saveIcon.png" />}>Save</UnilButton>
        <UnilButton startIcon={<ButtonIcons src="./static/images/shareIcon.png" />}>Share</UnilButton>
    </Stack>
    )
    
}

export default UtilsButtons;