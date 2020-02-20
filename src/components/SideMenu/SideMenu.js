import React, {useEffect} from 'react';
import './SideMenu.scss'
import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import arrow from '../../assets/arrow.svg'

const MenuItem = ({filterFilms, genre, focused}) => (
    <li className={focused ? 'side-menu__element focused' : 'side-menu__element'}>{genre} {focused && <img
        className="arrow" src={arrow}/>}</li>
);


const MenuItemFocusable = withFocusable()(MenuItem);

const SideMenu = ({genres, data, setFilms, setFocus}) => {
  useEffect(() => {
    setFocus('MENU-0');
  }, []);

  function filterFilms(newGenre) {
    setFilms(data.filter(el => el.genre_ids.find(genre => genre === newGenre)));
  }

  return (
      <nav className="navigation">
        <ul className="side-menu">
          {genres.map((genre, i) => (
              <MenuItemFocusable filterFilms={filterFilms} genre={genre} focusKey={`MENU-${i}`}
                                 onEnterPress={() => filterFilms(genre)}/>
          ))}
        </ul>

      </nav>
  );
};

const SideMenuFocusable = withFocusable()(SideMenu);

export default SideMenuFocusable;
