import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import '@fontsource/be-vietnam'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ServicesOffered from './components/ServicesOffered.tsx';

const theme = createTheme({
  typography: {
    fontFamily: "Be Vietnam", 
    fontStyle: "normal",
    fontSize: 9,
    fontWeight: 600
  }
});

const itemData = [
  {
    img: './static/images/storageSmall1.png',
  },
  {
    img: './/static/images/storageSmall2.png',
  },
  {
    img: './/static/images/storageSmall3.png',
  },
  {
    img: './/static/images/storageSmall4.png',
  }

];

const App = () => {
  return (
    <Box sx={{ width: 1080 }}>
      <ThemeProvider theme={theme}>
        <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
          <Typography variant="h4" component="div" paddingBottom={2}>Bussiness name</Typography>

          <Button size="small" variant="outlined" href="#outlined-buttons" startIcon={<EditIcon />}>Edit</Button>
        </Grid>
        
        <Stack direction="row" spacing={3}>
          <Avatar src='./static/images/storageBig.png' sx={{ width: 712, height: 320 }} variant="rounded"/>
          
          <Box>
            <Grid container rowSpacing={1.2} columnSpacing={1.2}>
              {itemData.map((item) => (
                <Grid item>
                  <Avatar src={item.img} sx={{ width: 167, height: 155 }} variant="rounded"/>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
        
        <Box>
          <image src></image>
        </Box>

        <ServicesOffered />
        
      </ThemeProvider>
    </Box>
  );
}

export default App;
