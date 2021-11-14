import React, { useState } from 'react';
import { Pokemon } from '../../types/pokemon'
import classNames from 'classnames';

import './PokemonCard.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface Props {
  pokemon: Pokemon,
}

export const PokemonCard = (props: Props) => {
  const { pokemon } = props;
  const [isVisibleDetails, setIsVesibleDetails] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);
  const display = useSelector((state: RootState) => state.display.display);

  return (
    <>
      <div
        className={classNames(
          'PokemonCard',
          { 'PokemonCard_Cards': display === 'cards'},
          { 'PokemonCard_List': display === 'list'},
        )}
      >
        <div
          className={classNames(
            'PokemonCard-Reverse',
            { 'PokemonCard-Reverse_Cards': display === 'cards'},
            { 'PokemonCard-Reverse_List': display === 'list'},
          )}
        ></div>
        <div
          className={classNames(
            'PokemonCard-Face',
            { 'PokemonCard-Face_Cards': display === 'cards' },
            { 'PokemonCard-Face_List': display === 'list' },
          )}
        >
          <div
            className={classNames(
              'PokemonCard-Container-Image',
              { 'PokemonCard-Container-Image_Cards': display === 'cards' },
              { 'PokemonCard-Container-Image_List': display === 'list' },
            )}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="PokemonCard-Image"
            />
          </div>
          <h2
            className={classNames(
              'PokemonCard-Name',
              { 'PokemonCard-Name_List': display === 'list' },
            )}
          >
            {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <label
            className={classNames(
              'PokemonCard-Details-Container',
              { 'PokemonCard-Details-Container_Cards': display === 'cards' },
              { 'PokemonCard-Details-Container_List': display === 'list' },
              { 'PokemonCard-Details-Container_Cards_Active': isVisibleDetails && display === 'cards'},
            )}
            >
            <p className="PokemonCard-Details">
              specification
            </p>
            <button
              className={classNames(
                'PokemonCard-Details-Button',
                { 'PokemonCard-Details-Button_Cards': display === 'cards' },
                { 'PokemonCard-Details-Button_List': display === 'list' },
                { 'PokemonCard-Details-Button_Cards_Active': isVisibleDetails && display === 'cards' },
                { 'PokemonCard-Details-Button_List_Active': isVisibleDetails && display === 'list' },
              )}
              onClick={() => setIsVesibleDetails(!isVisibleDetails)}
            ></button>
          </label>
          <div className={
            classNames(
              'PokemonCard-Specification',
              { 'PokemonCard-Specification_Visible': isVisibleDetails},
              { 'PokemonCard-Specification_Cards': display === 'cards' },
              { 'PokemonCard-Specification_List': display === 'list' },
            )}>
            <table
              className={classNames(
                'PokemonCard-Table',
                { 'PokemonCard-Table_Cards': display === 'cards' },
                { 'PokemonCard-Table_List': display === 'list' },
              )}
            >
                <caption
                  
                  className={classNames(
                    'PokemonCard-Table-Main-Title',
                    { 'PokemonCard-Table-Main-Title_List': display === 'list' },
                  )}
                  >
                    Statistics
                </caption>
                <tbody>
                <tr>
                  <th className="PokemonCard-Table-Title">HP</th>
                  <th className="PokemonCard-Table-Title">Att</th>
                  <th className="PokemonCard-Table-Title">Def</th>
                  <th className="PokemonCard-Table-Title">Spd</th>
                  <th className="PokemonCard-Table-Title">SpAtt</th>
                  <th className="PokemonCard-Table-Title">SpDef</th>
                </tr>
                <tr>
                  <td className="PokemonCard-Table-Params">{pokemon.hp}</td>
                  <td className="PokemonCard-Table-Params">{pokemon.attack}</td>
                  <td className="PokemonCard-Table-Params">{pokemon.defense}</td>
                  <td className="PokemonCard-Table-Params">{pokemon.speed}</td>
                  <td className="PokemonCard-Table-Params">{pokemon.special_attack}</td>
                  <td className="PokemonCard-Table-Params">{pokemon.special_defense}</td>
                </tr>
              </tbody>
            </table>
              <div
                className="PokemonCard-Types-Container"
              >
                <h3
                  className={classNames(
                    'PokemonCard-Types-Title',
                    { 'PokemonCard-Types-Title_List': display === 'list' },
                  )}
                >
                  Type(s) of pokemon
                </h3>
                <div className="PokemonCard-Types">
                {pokemon.types.map(type => (
                  <div
                    key={type}
                    className={`PokemonCard-Type PokemonCard-Type_${type}`}
                  >
                    {type}
                  </div>
                ))}
                </div>
              </div>
            <div
              className={classNames(
                'PokemonCard-Moves-Container',
                { 'PokemonCard-Moves-Container_Cards': display === 'cards' },
                { 'PokemonCard-Moves-Container_List': display === 'list' },
              )}
            >
              <h3 className={classNames(
                'PokemonCard-Moves-Title',
                { 'PokemonCard-Moves-Title_List': display === 'list' },
              )}>
                Moves of pokemon
              </h3>
              <div className={classNames(
                'PokemonCard-Moves',
                { 'PokemonCard-Moves_List': display === 'list' },
              )}>
                <button
                  className={classNames(
                    'PokemonCard-Button',
                    'PokemonCard-Button_Left',
                    { 'PokemonCard-Button_Disabled': currentMove <= 0 },
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
      </div>
    </>
  );
};
