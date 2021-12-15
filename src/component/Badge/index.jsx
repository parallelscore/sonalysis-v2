import React from 'react';

import './index.scss';

const hasValue = (value) => !!value

const Badge = ({ text, topic, className, image }) => (
    <div className={`Bagde__scene ${className}`}>
        <h3 className="margin-zero paragraph-text margin-b-xs">{text}</h3>
        {hasValue(image) ? <img src={image} alt={image} /> : <h3 className="margin-zero paragraph-text medium-emphasis">{topic}</h3>}
    </div>
);

export default Badge;
