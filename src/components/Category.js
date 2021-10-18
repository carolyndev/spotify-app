import React, { useRef, useEffect, useState } from 'react';
import Playlist from './Playlists';

const Category = () => {
  const [limiter, setLimiter] = useState();
  const mainInnerRef = useRef();
  const dataCategories = [
    {
      id: 1,
      name: 'Throwback Favorites',
      desc: '',
    },
    {
      id: 2,
      name: 'Focus',
      desc: 'Music to help you concentrate.',
    },
    {
      id: 3,
      name: 'Mood',
      desc: 'Playlists to match your mood.',
    },
    {
      id: 4,
      name: 'Popular new releases',
      desc: '',
    },
    {
      id: 5,
      name: 'Still Chill',
      desc: '',
    },
    {
      id: 6,
      name: 'Soundtrack your home',
      desc: '',
    },
  ];

  useEffect(() => {
    // function
    const handleResize = () => {
      // calculation
      const widthCalculation = Math.floor(
        mainInnerRef.current.getBoundingClientRect().width / 195
      );
      setLimiter(widthCalculation);
    };
    // assign an event listener
    window.addEventListener('resize', handleResize);
    // remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {dataCategories.map((category, id) => (
        <div className="card__section" key={id} ref={mainInnerRef}>
          <div className="card__section-header">
            <div className="card__section-title">
              <h2>
                <a href="">{category.name}</a>
              </h2>

              <p>{category.desc}</p>
            </div>

            <span>SEE ALL</span>
          </div>
          <Playlist categoryId={category.id} limiter={limiter} />
        </div>
      ))}
    </div>
  );
};

export default Category;
