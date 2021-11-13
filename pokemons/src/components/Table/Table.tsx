import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsFromApi } from '../../api/pokemons';
import { getTypesFromApi } from '../../api/types';
import { RootState } from '../../store';
import { Display } from '../Display';
import { PokemonList } from '../PokemonList';
import { Search } from '../Search';
import { Type } from '../Type';

import './Table.scss';

export const Table = () => {
  const [isLoading, setIsLoading] = useState(true);

  const urlForPokemon = useSelector((state: RootState) => state.urlForPokemons.urlForPokemons);

  const dispatch = useDispatch();

  const scrollHandle = (event: any) => {
    const scrollHeight = event.target.documentElement.scrollHeight;
    console.log('scrollHeight' + scrollHeight)
    const scrollTop = event.target.documentElement.scrollTop;
    console.log('scrollTop' + scrollTop)
    const innerHeight = window.innerHeight;
    console.log('innerHeight' + innerHeight)
    if (scrollHeight - (scrollTop + innerHeight) < 100) {
      setIsLoading(true);
      console.log(scrollHeight - (scrollTop + innerHeight))
    }
  };

  useEffect(() => {
    dispatch(getTypesFromApi());
    document.addEventListener('scroll', scrollHandle);
    return () => {
      document.removeEventListener('scroll', scrollHandle);
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      dispatch(getPokemonsFromApi(urlForPokemon, setIsLoading));
    }
  }, [isLoading]);

  return (
    <div className="Table">
      <div className="Table-Header">
        <h1
          className="Table-Title"
          onClick={()=> console.log(urlForPokemon)}
        >
          Pokemonopedia
        </h1>
        <div className="Table-Params">
          <div className="Table-Filters">
            <Search />
            <Type />
          </div>
          <Display />
        </div>
      </div>
      <PokemonList />
    </div>
  );
};