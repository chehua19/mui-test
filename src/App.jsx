import React from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";

import EditIcon from '@mui/icons-material/Edit';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Chip from "@mui/material/Chip";

import styled from '@mui/material/styles/styled';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import ThemeProvider from './theme/index.tsx';

import ImageCollector from './components/ImageCollector.tsx';
import Rating from './components/Rating.tsx';
import UtilButtons from './components/UtilButtons.tsx'
import ServicesOffered from './components/ServicesOffered.tsx';
import RequestCard from './components/RequestCard.tsx';

import BussinessData from './components/content/businnesCategory.js';

const BlockText = styled(Typography)(() => ({
  fontSize: 17,
  fontWeight: 600,
  marginBottom: 8
}))

const ChipBussiness = styled(Chip)(() => ({
  fontSize: 14, 
  margin: 5
}))

const App = () => {
  return (
    <ThemeProvider>
      <Box sx={{ width: 1080 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
              <Typography variant="h4" component="div" paddingBottom={2}>Bussiness name</Typography>
              <Button size="small" variant="outlined" href="#outlined-buttons" startIcon={<EditIcon />}>Edit</Button>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <ImageCollector/>
          </Grid>

          <Grid item xs={8}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Stack direction={"row"} spacing={5}>
                <Rating ratingValue="2.5" rewievValue="11504" imageSrc="./static/images/ratingIcon.png" />
                <UtilButtons />
              </Stack>

              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <CheckCircleIcon />
                <Typography fontSize={14}>Claimed</Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={8}>
            <BlockText variant="h6">Bussiness category</BlockText>
            <Box sx={{ display: "flex", justifyContent: 'space-around', flexWrap: "wrap"}}>
              {BussinessData.map((item) => (
                <ChipBussiness label={ item } />
              ))}
            </Box>
          </Grid>

          <Grid item xs={4}>
            <RequestCard/>
          </Grid>

          <Grid item xs={8}>
            <BlockText variant="h6">Services offered</BlockText>
            <ServicesOffered />
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
    
  );
}

export default App;
