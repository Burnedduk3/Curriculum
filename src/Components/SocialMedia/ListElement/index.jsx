import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ListElement = (props) => (
  <li className="list-element">
    <a href={props.href} target={props.target}>
      <img src={props.src} alt="social media icon"/>
      <p className="social-media-title">{props.socialName}</p>
    </a>
  </li>
);

export default ListElement;

ListElement.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  src: PropTypes.string,
  socialName: PropTypes.string,
};

ListElement.defaultProps = {
  href: '#',
  target: '',
  src: '',
  socialName: '',
};

