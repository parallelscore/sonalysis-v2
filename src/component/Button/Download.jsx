import React from 'react';
import { CSVLink } from "react-csv";

import './index.scss';

const Download = ({ data, text, className, headers }) => (
    <CSVLink data={data} className={className} headers={headers} target="_blank">
        {text}
    </CSVLink>
);

export default Download;
