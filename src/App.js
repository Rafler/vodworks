import React, {useEffect, useState} from 'react';
import './App.scss';

import Header from './components/Header/Header';
import SideMenuFocusable from './components/SideMenu/SideMenu';
import FilmListFocusable from './components/FilmsList/FilmList';
import FilmDetailsFocusable from './components/FilmDetails/FilmDetails';
import {initNavigation, withFocusable} from '@noriginmedia/react-spatial-navigation';

initNavigation();

const App = () => {
  const [data, setData] = useState([]);
  const [genres, setGenre] = useState([]);
  const [films, setFilms] = useState([]);
  const [currentFilm, setFilm] = useState({});

  async function getData() {
    let res = await fetch('https://raw.githubusercontent.com/roman-curse/videoJson/master/videoJson.json');
    res.json().then(res => setData(res.results)).catch(err => console.log(err))
  };

  function getGenre(filmArr) {
    filmArr.map(film => film.genre_ids.map(el => {
      if (genres.find(genre => genre === el) === undefined) {
        setGenre([...genres, el])
      }
    }))
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getGenre(data);
  }, [data, getGenre]);

  useEffect(() => {
    setFilms(data.filter(el => el.genre_ids.find(genre => genre === genres[0])));
  }, [genres]);
  return (
      <div className="container">
        <Header/>
        <SideMenuFocusable genres={genres} data={data} setFilms={setFilms} focusKey={'MENU'}/>
        <FilmListFocusable films={films} setFilm={setFilm} focusKey={'CONTENT'}/>
        {currentFilm.poster_path && (
            <FilmDetailsFocusable overview={currentFilm.overview} poster_path={currentFilm.poster_path}
                         title={currentFilm.title}/>
        )}
      </div>
  );
};

const AppFocusable= withFocusable()(App);

const Main = ({}) => (<AppFocusable focusable={false}/>);

export default Main;
