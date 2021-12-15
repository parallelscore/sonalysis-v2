import React from 'react';
import Download from "./Download";

import './index.scss';

const Button = ({ type, ...props }) => {
    switch (type) {
        case 'download':
            return <Download {...props} />;
    
        default:
            return <Download {...props} />
    }
}

export default Button;
