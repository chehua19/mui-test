import React, { useRef, useState, useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import { Button, Card, Stack, Box, Divider  } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles"
import styled from "@mui/material/styles/styled"

import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFrb3YyMyIsImEiOiJjbDRvdnhwN3UwN2Z0M2dub2xhZHJoaTRrIn0.9DYE3eXiYJ3JLX0DTUPPVg';

/*
display: flex;
    align-items: flex-end;
    justify-items: right;
    justify-content: flex-end;
*/

const useStyle = makeStyles((theme) => ({
    mainWrap: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    buttonsWrap: {
        position: "absolute",
        maxWidth: "40px",
        margin: 10
    },
    cardWrap: {
        
    },
    map: {
        borderRadius: 8
    }
}))

const ZoomButton = styled(Button)((theme) => ({
    minWidth: "40px",
     minHeight: "40px"
}))

const StateMap = () => {
    const classes = useStyle();
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-74.61);
    const [lat, setLat] = useState(40.0563);
    const [zoom, setZoom] = useState(7.08);
 
    useEffect(() => {
        if (map.current) return; // initialize map only once
        mapContainer.borderRadius = "10px"
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom,
            className: classes.map
        });

    });
 
    //useEffect(() => {
        //if (!map.current) return; // wait for map to initialize
        //map.current.on('move', () => {
            //setLng(map.current.getCenter().lng.toFixed(4));
            //setLat(map.current.getCenter().lat.toFixed(4));
            //setZoom(map.current.getZoom().toFixed(2));
        //});
    //});
    
    return (
        <Box className={ classes.mainWrap }>  
            <Stack className={ classes.buttonsWrap} spacing={1}>
                <Stack  divider={<Divider flexItem />}>
                    <Card sx={{ borderRadius: "5px 5px 0px 0px" }} >
                        <ZoomButton>
                            <CloseIcon sx={{ transform: "rotate(-45deg)" }}/>
                        </ZoomButton>
                    </Card>
                    <Card sx={{ borderRadius: "0px 0px 5px 5px" }}>
                        <ZoomButton>
                            <RemoveIcon/>
                        </ZoomButton>
                    </Card>
                </Stack>
                <Card >
                    <ZoomButton>
                        <CloseIcon sx={{ transform: "rotate(-45deg)" }}/>
                    </ZoomButton>
                </Card>
            </Stack>
            <div style={{ height: '300px', width: '712px' }} ref={mapContainer} />
        </Box>
    );
}

export default StateMap;