import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { action as actionType } from '../../store/type';

import './Type.scss';

export const Type = () => {
  const type = useSelector((state: RootState) => state.type.type);
  const dispatch = useDispatch();
  const types = useSelector((state: RootState) => state.types.types);
  const setType = (inputType: string) => {
    dispatch(actionType.setType(inputType));
  };

  return (
    <label>
      {'select type '}
      <select
        value={type}
        onChange={(event) => setType(event.target.value)}
      >
        <option value="">
          all
        </option>
        {types.map(type => (
          <option
            value={type.name}
            key={type.name}
          >
            {type.name}
          </option>
        ))}
      </select>
    </label>
  );
};
