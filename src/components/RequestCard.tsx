import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import styled from '@mui/material/styles/styled';

const HeadText = styled(Typography)(() => ({
    fontSize: 17,
    fontWeight:600
}));

const ContentText = styled(Typography)(() => ({
    fontSize: 14,
    fontWeight: 400,
    color: '#637381',
    marginTop: 12
}));

const ButtonRequest = styled(Button)(() => ({
    width: "100%",
    marginTop: 24,
    padding: 11,
    fontSize: 15,
    borderRadius: 2,
    backgroundColor: "#1890FF",
    variant: "body1",
    boxShadow: '0px 8px 16px rgba(24, 144, 255, 0.24)'
}));

 
const RequestCard = () => {
    return(
        <Card sx={{ boxShadow: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24)' }}>
            <CardContent>
                <HeadText variant="h6">
                    Request a quote
                </HeadText>
                <ContentText>
                    Lorem ipsum dolor sit amet, nam sint mucius ea. Sea movet saperet cu, sumo possim assentior his te, probo bonorum id nec
                </ContentText>
                <ButtonRequest variant="contained">Request a quote</ButtonRequest>
            </CardContent>
        </Card>
    )
}

export default RequestCard;