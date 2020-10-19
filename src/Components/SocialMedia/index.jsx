import React from 'react';
import socialMedia from './textConstants';
import './styles.scss';
import ListElement from './ListElement';

const SocialMediaContainer = () => {
  return (
    <div className="social-media-container">
      <ul className="social-media-list">
        {
          Object.values(socialMedia).map((item, index)=>(
            <ListElement
              key={item.name}
              href={item.link}
              src={item.img}
              target="_blank"
              socialName={item.name}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default SocialMediaContainer;
