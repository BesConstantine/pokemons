import classNames from 'classnames';
import {useSelector} from 'react-redux';
import { RootState } from '../../store';
import { PokemonCard } from '../PokemonCard';

import './PokemonList.scss'

export const PokemonList = () => {
  const search = useSelector((state: RootState) => state.search.search)
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const type = useSelector((state: RootState) => state.type.type);
  const display = useSelector((state: RootState) => state.display.display);

  const visiblePokemons = pokemons
    .filter(pokemon => {
      const lowSearch = search.toLowerCase();
      const name = pokemon.name.toLowerCase();

      return name.includes(lowSearch);
    })
    .filter(pokemon => {
      if (!type) {
        return true;
      }

      return pokemon.types.includes(type);
    });

  return (
    <>
      {visiblePokemons.length > 0 && (
        <ul className={classNames(
          'PokemonList-List',
          { 'PokemonList-List_Cards': display === 'cards' },
          { 'PokemonList-List_List': display === 'list'},
        )}>
          {visiblePokemons.map(pokemon => (
            <li
              key={pokemon.id}
              className={classNames('PokemonList-Item',
                {'PokemonList-Item_Cards': display === 'cards' },
                {'PokemonList-Item_List': display === 'list' },
              )}
            >
              <PokemonCard
                pokemon={pokemon}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
