import React from 'react';
import { ReactComponent as PlayIcon } from '../images/play.svg';
import dataPlaylists from '../data/dataPlaylists';
import { Link } from 'react-router-dom';

const Playlists = (props) => {
  console.log(props.limiter);
  let filteredPlaylist = dataPlaylists
    .filter((playlist) => playlist.category_id === props.categoryId)
    .slice(0, props.limiter);

  return (
    <div className="playlists">
      {filteredPlaylist.map((playlist, id) => (
        <Link to={`/playlist/` + playlist.id}>
          <div className="card" key={id}>
            <div className="card__image">
              <img src={playlist.src} alt={playlist.name} />
            </div>

            <div className="card__content">
              <div className="card__title">
                <a>
                  <h4>{playlist.name}</h4>
                </a>
              </div>

              <div className="card__desc">
                <p>{playlist.desc}</p>
              </div>
              <div className="card__play play-icon">
                <button>
                  <PlayIcon />
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Playlists;
