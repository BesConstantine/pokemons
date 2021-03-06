import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

import { RootState } from '../../store';
import { action as actionSearch } from '../../store/search';

import './Search.scss';

export const Search = () => {
  const search = useSelector((state: RootState) => state.search.search);
  const dispatch = useDispatch();
  const setSearch = (inputSearch: string) => {
    dispatch(actionSearch.changeSearch(inputSearch));
  };

  return (
    <label
      htmlFor="find_pokemon"
      className="Search"
    >
      {'Find Pokemon '}
      <input
        id="find_pokemon"
        className="Search-Input"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </label>
  );
};
