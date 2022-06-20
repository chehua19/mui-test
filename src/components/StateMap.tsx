import React from "react";
import { ComposableMap, Geographies, Geography, useZoomPan, Marker } from "react-simple-maps";

import makeStyles from "@mui/styles/makeStyles";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const useStyles = makeStyles(() => ({
    map: {
        width: '100%',
        maxWidth: 712,
        maxHeight: 300,
        borderRadius: 8
    }
}))

const width = 800;
const height = 600;

const CustomZoomableGroup = ({ children, ...restProps}) => {
    const { mapRef, transformString, position } = useZoomPan(restProps);
    return (
      <g ref={mapRef}>
        <rect width={width} height={height} fill="transparent" />
        <g transform={transformString}>{children(position)}</g>
      </g>
    );
  };

const StateMap = () => {
    const classes = useStyles();
    return(
        <ComposableMap className={ classes.map } projection="geoAlbersUsa">
            <CustomZoomableGroup center={[0, 0]} zoom={9}>
            {(position) => (
                <>
                <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map(geo => (
                        <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#DDD"
                        stroke="#FFF"
                        />
                    ))}
                </Geographies>
                 <Marker coordinates={[7.3986, 9.0765]}>
                 <circle r={8 / position.k} fill="#F53" />
                    </Marker>
             
                    </>
                )}
            </CustomZoomableGroup>
        </ComposableMap>
    );
}

export default StateMap;