import React from 'react';

import './index.scss';

const ProgressBar = ({ progress, className }) => {
    const styles = { width: `${progress}%` };
    return (
        <div className={`ProgressBar__scene ${className}`}>
            <div className="Progress__scene" style={styles} />
        </div>
    );
}

export default ProgressBar;
