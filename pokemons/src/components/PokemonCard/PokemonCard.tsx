import { useState } from 'react';
import { Pokemon } from '../../types/pokemon'
import classNames from 'classnames';

import './PokemonCard.scss';

interface Props {
  pokemon: Pokemon,
}

export const PokemonCard = (props: Props) => {
  const { pokemon } = props;
  const [isVisibleDetails, setIsVesibleDetails] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);

  return (
    <>
      <div onClick={() => console.log(pokemon)} className="PokemonCard">
        <div className="PokemonCard-Reverse"></div>
        <div className="PokemonCard-Face">
          <div className="PokemonCard-Container-Image">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="PokemonCard-Image"
            />
          </div>
          <h2 className="PokemonCard-Name">
            {pokemon.name}
          </h2>
          <label className="PokemonCard-Details-Container">
            <p className="PokemonCard-Details">
              specification
            </p>
            <button
              className={classNames('PokemonCard-Details-Button', { 'PokemonCard-Details-Button_Active': isVisibleDetails })}
              onClick={() => setIsVesibleDetails(!isVisibleDetails)}
            ></button>
          </label>
          <div className={
            classNames(
              'PokemonCard-Specification',
              { 'PokemonCard-Specification_Visible': isVisibleDetails}
            )}>
            <table className="PokemonCard-Table">
              <tr>
                <th className="PokemonCard-Table-Title">HP</th>
                <th className="PokemonCard-Table-Title">Att</th>
                <th className="PokemonCard-Table-Title">Def</th>
                <th className="PokemonCard-Table-Title">Spd</th>
                <th className="PokemonCard-Table-Title">SpAtt</th>
                <th className="PokemonCard-Table-Title">SpDef</th>
              </tr>
              <tr>
                <th className="PokemonCard-Table-Params">{pokemon.hp}</th>
                <th className="PokemonCard-Table-Params">{pokemon.attack}</th>
                <th className="PokemonCard-Table-Params">{pokemon.defense}</th>
                <th className="PokemonCard-Table-Params">{pokemon.speed}</th>
                <th className="PokemonCard-Table-Params">{pokemon.special_attack}</th>
                <th className="PokemonCard-Table-Params">{pokemon.special_defense}</th>
              </tr>
            </table>
            <div className="PokemonCard-Types">
              {pokemon.types.map(type => (
                <div className={`PokemonCard-Type PokemonCard-Type_${type}`}>
                  {type}
                </div>
              ))}
            </div>
            <div className="PokemonCard-Moves">
              <button
                className={classNames(
                  'PokemonCard-Button',
                  'PokemonCard-Button_Left',
                  { 'PokemonCard-Button_Disabled': currentMove <= 0}
                )}
                disabled={currentMove <= 0}
                onClick={() => setCurrentMove(currentMove - 1)}

              ></button>
              <div className="PokemonCard-Move">
                {pokemon.moves[currentMove]}
              </div>
              <button
                className={classNames(
                  'PokemonCard-Button',
                  'PokemonCard-Button_Right',
                  { 'PokemonCard-Button_Disabled': currentMove >= pokemon.moves.length - 1}
                )}
                disabled={currentMove >= pokemon.moves.length - 1}
                onClick={() => setCurrentMove(currentMove + 1)}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
