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
    <label className="Type">
      {'Select type '}
      <select
        className="Type-Select"
        value={type}
        onChange={(event) => setType(event.target.value)}
      >
        <option
          className="Type-Option"
          value=""
        >
          all
        </option>
        {types.map(type => (
          <option
            className="Type-Option"
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
