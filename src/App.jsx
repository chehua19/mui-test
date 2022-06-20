import React from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";

import EditIcon from '@mui/icons-material/Edit';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Chip from "@mui/material/Chip";

import styled from '@mui/material/styles/styled';
import makeStyles from "@mui/styles/makeStyles";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import ThemeProvider from './theme/index.tsx';

import ImageCollector from './components/ImageCollector.tsx';
import Rating from './components/Rating.tsx';
import UtilButtons from './components/UtilButtons.tsx'
import ServicesOffered from './components/ServicesOffered.tsx';
import RequestCard from './components/RequestCard.tsx';
import DetailsCard from './components/DetailsCard.tsx';
import HightlightItem from './components/HightlightItem.tsx';
//import StateMap from './components/StateMap.tsx';

import BussinessData from './components/content/businnesCategory.js';
import DescriptionData from './components/content/desctiption.js';
import DetailsData from './components/content/detailsCard.js';
import HighlightData from './components/content/highlightData.js';

const useStyle = makeStyles((theme) => ({
  mainWrapper: {
    width: '90%', 
    maxWidth: 1080
  },
  bussinessWrapper: {
    display: "flex",
    justifyContent: 'space-around', 
    flexWrap: "wrap"
  }
}))

const BlockText = styled(Typography)((theme) => ({
  fontSize: 17,
  fontWeight: 600,
  marginBottom: 8,
  typography: 'h6'
}));

const ChipBussiness = styled(Chip)((theme) => ({
  fontSize: 14, 
  margin: 5
}));

const ContentText = styled(Typography)((theme) => ({
  fontSize: 16,
  fontWeight: 400,
  color: '#637381'
}));

const App = () => {
  const classes = useStyle();
  return (
    <ThemeProvider>
      <Box className={ classes.mainWrapper }>
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
            <BlockText>Bussiness category</BlockText>
            <Box className={ classes.bussinessWrapper }>
              {BussinessData.map((item) => (
                <ChipBussiness label={ item } />
              ))}
            </Box>
          </Grid>

          <Grid item xs={4}>
            <RequestCard/>
          </Grid>

          <Grid item xs={8}>
            <BlockText> { DescriptionData.header } </BlockText>
            <ContentText> { DescriptionData.content } </ContentText>
          </Grid>

          <Grid item xs={4}>
            <BlockText>Details</BlockText>
            <DetailsCard phone={ DetailsData.phone } website={ DetailsData.website } email={ DetailsData.email }/>
          </Grid>

          <Grid item xs={8}>
            <BlockText>Highlights</BlockText>
            <Grid container mt={1} spacing={2}>
              {HighlightData.map((item) => (
                <Grid item xs={6}>
                  <HightlightItem name={ item.name } description={ item.desription } imagePath={ item.path } />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={8}>
            <BlockText>Services offered</BlockText>
            <ServicesOffered />
          </Grid>

          <Grid item xs={8}>
            <BlockText>Location</BlockText>
            
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
    
  );
}

export default App;
