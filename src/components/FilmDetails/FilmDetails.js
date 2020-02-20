import React from 'react';
import './FilmDetails.scss'

import eye from './../../assets/eye.svg';
import add from './../../assets/add.svg';
import play from './../../assets/play.svg'
import {withFocusable} from '@noriginmedia/react-spatial-navigation';

const FilmDetailsButton = ({image, title, focused}) => (<div className={focused ? "button focused" : "button" }><img src={image} alt={title}/>   {title}</div>);

const FilmDetailsButtonFocusable = withFocusable()(FilmDetailsButton);

const FilmDetails = ({overview, poster_path, title}) => {
  return (
      <section className="film-details">
        <h3 className="film-title">{title}</h3>
        <div className="properties">
          <div className="prop"><span className="prop-name">Time</span><span className="prop-data">1 hour 23 minutes</span></div>
          <div className="prop"><span className="prop-name">Country</span><span className="prop-data">USA</span></div>
          <div className="prop"><span className="prop-name">Language</span><span className="prop-data">English</span></div>
        </div>
        <div className="container">
            <img src={poster_path} alt={title} className="film"/>
          <article className="about">{overview}</article>
        </div>
        <div className="buttons">
          <FilmDetailsButtonFocusable image={play} title={'Play'}/>
          <FilmDetailsButtonFocusable title={'Trailer'} image={eye}/>
          <FilmDetailsButtonFocusable image={add} title={'Add'}/>
        </div>
      </section>
  );
};



const FilmDetailsFocusable = withFocusable()(FilmDetails);

export default FilmDetailsFocusable;
