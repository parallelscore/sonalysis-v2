import React from 'react';
import { ImageCardProps } from '../type';


const ImageCard = ({ avatar, player, position, number }: ImageCardProps) => {
  return (
    <div>
      {avatar?<img className="score-area__wrapper-img" src={avatar} />:<img className="score-area__wrapper-img" />}
      <div className="pt-3">
        <p>{player}</p>
        <p>Position: {position}</p>
        <p>No. {number}</p>
      </div>
    </div>
  );
};

export default ImageCard;
