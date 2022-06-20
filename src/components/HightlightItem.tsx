import React from "react";

type HightlightItemProp = {
    name?: string;
    description?: string;
    imagePath?: string;
}

const HightlightItem: React.FC<HightlightItemProp> = (props) => {
    const { name, description, imagePath } = props;

    return(
        <div></div>
    )
}

export default HightlightItem; 