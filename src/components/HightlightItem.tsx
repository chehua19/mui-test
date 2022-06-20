import React from "react";
import Stack from "@mui/material/Stack"
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import styled from "@mui/material/styles/styled";

type HightlightItemProp = {
    name?: string;
    description?: string;
    imagePath?: string;
}

const HeaderText = styled(Typography)((theme) => ({
    typography: 'Subtitle2',
    fontSize: 14,
    fontWeight: 600,
    color: '#212B36'
    
}))

const ContentText = styled(Typography)((theme) => ({
    typography: 'body2',
    fontSize: 14,
    fontWeight: 400,
    color: '#637381',
}))

const HightlightItem: React.FC<HightlightItemProp> = (props) => {
    const { name, description, imagePath } = props;

    return(
        <Stack direction={"row"}>
            <Avatar sx={{maxWidth: 32, maxHeight: 32}} src={ imagePath } variant="rounded"/>
            <Stack ml={1}>
                <HeaderText> { name } </HeaderText>
                <ContentText> { description } </ContentText>
            </Stack>
        </Stack>
    )
}

export default HightlightItem; 