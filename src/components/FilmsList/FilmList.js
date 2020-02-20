import React, {useEffect} from 'react';
import './FilmList.scss'
import {withFocusable} from '@noriginmedia/react-spatial-navigation';

const Film = ({film, setFilm, focused}) => ( <img src={film.poster_path} alt={film.original_title} className={focused ? 'film focused' : 'film'} />)

const FocusableFilm = withFocusable()(Film);

const FilmList = ({films, setFilm, setFocus}) => {
  return (
      <section className="film-list">
      {films.map((film, i) => (

       <FocusableFilm film={film} setFilm={setFilm} focusKey={`FILM-${i}`} onEnterPress={() => setFilm(film)}/>
      ))}
      </section>
  );
};

const FilmListFocusable = withFocusable()(FilmList);


export default FilmListFocusable;
