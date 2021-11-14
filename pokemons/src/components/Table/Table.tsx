import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsFromApi } from '../../api/pokemons';
import { getTypesFromApi } from '../../api/types';
import { RootState } from '../../store';
import { action as actionLoading } from '../../store/loading';
import { Display } from '../Display';
import { PokemonList } from '../PokemonList';
import { Search } from '../Search';
import { Type } from '../Type';

import './Table.scss';

export const Table = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const loading = useSelector((state: RootState) => state.loading.loading);
  const urlForPokemon = useSelector((state: RootState) => state.urlForPokemons.urlForPokemons);

  const dispatch = useDispatch();

  const scrollHandle = (event: any) => {
    const { scrollHeight } = event.target.documentElement;
    const { scrollTop } = event.target.documentElement;
    const { innerHeight } = window;
    if (scrollHeight - (scrollTop + innerHeight) < 100) {
      dispatch(actionLoading.setLoading(true));
    }
  };

  useEffect(() => {
    dispatch(getTypesFromApi());
    document.addEventListener('scroll', scrollHandle);
    return () => {
      document.removeEventListener('scroll', scrollHandle);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      dispatch(getPokemonsFromApi(urlForPokemon));
    }
  }, [loading]);

  return (
    <div className="Table">
      <div className="Table-Header">
        <h1
          className="Table-Title"
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
