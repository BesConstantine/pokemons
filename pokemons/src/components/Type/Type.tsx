import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

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
    <label
      htmlFor="select_type"
      className="Type"
    >
      {'Select type '}
      <select
        id="select_type"
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
        {types.map((typeOfPokemon) => (
          <option
            className="Type-Option"
            value={typeOfPokemon.name}
            key={typeOfPokemon.name}
          >
            {typeOfPokemon.name}
          </option>
        ))}
      </select>
    </label>
  );
};
