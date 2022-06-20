import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer'
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';

import styled from '@mui/material/styles/styled'

// @ts-ignore
import Service from './service/Service.tsx';

import servicesData from './content/servicesData.js'

const CategoryName = styled(Typography)(({ theme }) => ({
    variant: "h6",
    fontWeight: 600,
    fontSize: 17,
    lineHeight: 1
}));

const ServicesOffered = () => {
    const [ showMore, setShowMore] = useState(true);
    return(
        <Card sx={{ maxWidth: 712 }}>
            <CardContent>
                <Grid container sx={{ maxHeight: showMore ? 255 : 1000 , transitionDuration: '0.5s' }}  spacing={ 4 } justifyContent="space-evenly">
                    {servicesData.map((item) => (
                        <Grid item xs={6} >
                            <Stack direction="row" spacing={2} padding={2} alignItems="center">
                                <Avatar 
                                    src={item.categoryImg } 
                                    sx={{ width: 0.06, height: 0.06 }} 
                                    variant="square" />
                                <CategoryName>{ item.categoryName }</CategoryName>
                            </Stack>
                            <Table size="small">
                                <TableContainer>
                                    <TableBody>
                                        {item.services.map((serviceData) => (
                                            <Service serviceName={ serviceData.serviceName } price={ serviceData.price } active={ serviceData.active } />
                                        ))}
                                    </TableBody>
                                </TableContainer>
                            </Table>
                        </Grid>
                    ))}
                </Grid>
                <CategoryName 
                    pt={2} pl={2} 
                    onClick={ () => setShowMore(!showMore) } 
                    sx={{ fontSize: 14 }}> 
                    { showMore ? 'Show More' : 'Show Less' } 
                </CategoryName> 
            </CardContent>  
        </Card>
    )
}

export default ServicesOffered;