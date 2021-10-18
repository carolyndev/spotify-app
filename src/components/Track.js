import React from 'react';
import { ReactComponent as PlayIcon } from '../images/play.svg';
import { ReactComponent as HeartIcon } from '../images/heart.svg';
import { ReactComponent as EllipsisIcon } from '../images/ellipsis.svg';

const Track = () => {
  return (
    <li className="track">
      <div className="track-number">
        <span>1</span>
        <PlayIcon />
      </div>
      <div className="track-title">
        <img
          className="track-cover"
          src="https://i.scdn.co/image/ab67616d0000485113f2466b83507515291acce4"
          alt="pic"
        />
        <div className="track-info">
          <p>Last Nite</p>
          <span>The Strokes</span>
        </div>
      </div>
      <div className="track-album">Is This It</div>
      <div className="track-runtime">
        <HeartIcon />
        <span>1:48</span>
        <EllipsisIcon />
      </div>
    </li>
  );
};

export default Track;
