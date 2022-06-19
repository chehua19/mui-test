import React from "react";

import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import ThemeProvider from './theme/index.tsx';
import ImageCollector from './components/ImageCollector.tsx';
import ServicesOffered from './components/ServicesOffered.tsx';


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
          <Grid item xs={12}>
            <ServicesOffered />
          </Grid>
      
      </Grid>
        
     
      
     
   
      </Box>
    </ThemeProvider>
    
  );
}

export default App;
