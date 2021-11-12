import { useSelector, useDispatch } from 'react-redux';
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
    <label>
      {'find Pokemon '}
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </label>
  );
};
