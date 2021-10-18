import React from 'react';
import Track from '../components/Track';

import { useParams } from 'react-router-dom';
import { ReactComponent as PlayIcon } from '../images/play.svg';
import { ReactComponent as HeartIcon } from '../images/heart.svg';
import { ReactComponent as EllipsisIcon } from '../images/ellipsis.svg';
import { ReactComponent as ClockIcon } from '../images/clock.svg';
import { dataPlaylists } from '../data/dataPlaylists';

const PlaylistPage = (props) => {
  let { id } = useParams();

  return (
    <div className="playlist__page">
      <p>This is an individual playlist {id}.</p>
      <div className="playlist__info">
        <div className="playlist__image">
          <img
            src="https://i.scdn.co/image/ab67706f00000002983d5a9606b36672284ddc06"
            alt="pic"
          />
        </div>
        <div className="playlist__desc">
          <p className="playlist__supratitle">PLAYLIST</p>
          <h1 className="playlist__title">Throwback Thursday</h1>

          <p className="playlist__subtitle">
            Celebrate the 20th anniversary of The Strokes' debut with their
            post-punk contemporaries #SpotifyTBT Cover: The Strokes
          </p>
          <div className="playlist__stats">
            <a>
              <h4>Spotify</h4>
            </a>
            {/* before content: "•"; margin: 0 4px; */}
            <span>1,960,693 likes</span>
            {/* // before content: "•"; margin: 0 4px; */}
            <span>50 songs, 2 hr 48 min</span>
          </div>
        </div>
      </div>

      <div className="playlist__tracklist">
        <div className="playlist__icons">
          <button className="play-icon">
            <PlayIcon />
          </button>
          <button className="like-icon">
            <HeartIcon />
          </button>
          <button className="ellipsis-icon">
            <EllipsisIcon />
          </button>
        </div>

        <div className="playlist__tracks">
          <div className="track-header">
            <div>#</div>
            <div>TITLE</div>
            <div>ALBUM</div>
            <div className="clock-icon">
              <ClockIcon />
            </div>
          </div>

          <ul>
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
