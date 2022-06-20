import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import styled from "@mui/material/styles/styled";

type DetailsCardProp = {
    phone?: string;
    website?: string;
    email?: string;
}

const DescriptionsText = styled(Typography)((theme) => ({
    typography: 'body1',
    fontSize: 16,
    fontWeight: 400,
    color: '#637381'
    
}))

const ContentText = styled(Typography)((theme) => ({
    typography: 'body1',
    fontSize: 16,
    fontWeight: 500,
    color: '#212B36',
    textDecoration: 'underline',
    marginTop: 5 
}))

const DetailsCard: React.FC<DetailsCardProp> = (props) => {
    const { phone, website, email } = props;
    return(
        <Card sx={{ backgroundColor: 'rgba(145, 158, 171, 0.08)', boxShadow: '0'}}>
            <CardContent>
                <Grid container>
                    <Grid item xs={4}>
                        <DescriptionsText>Phone: </DescriptionsText>
                    </Grid>
                    <Grid item xs={8}>
                        <ContentText> {phone} </ContentText>
                    </Grid>

                    <Grid item xs={4}>
                        <DescriptionsText>Website: </DescriptionsText>
                    </Grid>
                    <Grid item xs={8}>
                        <ContentText> {website} </ContentText>
                    </Grid>

                    <Grid item xs={4}>
                        <DescriptionsText>Email: </DescriptionsText>
                    </Grid>
                    <Grid item xs={8}>
                        <ContentText> {email} </ContentText>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default DetailsCard;