import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import styled from '@mui/material/styles/styled';

type ServiceProps = {
    serviceName: string,
    price: number,
    active: boolean
};

const TextField = styled(Typography)(({ theme }) => ({
    fontFamily: "Be Vietnam",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1,
    display: 'inline',
    maxWidth: 900
}));

const Cell = styled(TableCell)(({ theme }) => ({
    border: 0
}));


const Service: React.FC<ServiceProps> = (props) => {
    const { serviceName, price, active } = props;
    
    const color = active ? '#00AB55' : '#212B36';
    return(
        <TableRow component="th" scope="row" >
            <Cell><CheckIcon color={ active ? "success" : 'inherit' }></CheckIcon></Cell>
            <Cell><TextField color={ color }>{ serviceName }</TextField></Cell>
            <Cell><TextField color={ color } >{ active ? 'Free' : '$' + price }</TextField></Cell>
        </TableRow>
    );
};

export default Service;