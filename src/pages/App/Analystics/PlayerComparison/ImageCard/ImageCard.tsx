import React from 'react';
import { ImageCardProps } from '../type';

const ImageCard = ({ player, position, number }: ImageCardProps) => {
  return (
    <div>
      <img className="score-area__wrapper-img" />
      <div className="pt-3">
        <p>{player}</p>
        <p>{position}</p>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default ImageCard;
