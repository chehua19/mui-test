import React from "react";

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import styled  from '@mui/material/styles/styled';

const photoData = [
    {
      img: './static/images/storageSmall1.png',
    },
    {
      img: './static/images/storageSmall2.png',
    },
    {
      img: './static/images/storageSmall3.png',
    },
    {
      img: './static/images/storageSmall4.png',
    }
  ];
  
const ContainerPhoto = styled(Avatar)(({ theme }) => ({
    width: '100%',
    height: '100%',
    borderRadius: 1
}));

const ImageCollector = () => {
    
    return(
      <Grid container spacing={3}>
        <Grid item xs={8}>
            <ContainerPhoto src='./static/images/storageBig.png'/>
        </Grid>
            
        <Grid item container rowSpacing={1.2} columnSpacing={1.2} xs={4}>
          {photoData.map((item) => (
            <Grid item xs={6}>
              <ContainerPhoto src={item.img} />
            </Grid>
        ))}
        </Grid>
      </Grid>
    )
}

export default ImageCollector;