import React from "react";
import Stack from '@mui/material/Stack';
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

type RatingUserProp = {
    ratingValue?: number;
    rewievValue?: number;
    imageSrc?: string;
    
}

const nFormatter = (num, digits) => {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
  

const RatingUser : React.FC<RatingUserProp> = (props) => {
    const { ratingValue, rewievValue, imageSrc } = props;

    return(
        <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar src={ imageSrc } />
            <Stack direction="row" alignItems="center" spacing={0.5}>
                <Rating value={ ratingValue } size="large" readOnly />
                <Typography variant="body1" fontSize={14} > { '(' + nFormatter(rewievValue, 2) + ' Review)'} </Typography>
            </Stack>
        </Stack>
    )
};

export default RatingUser;