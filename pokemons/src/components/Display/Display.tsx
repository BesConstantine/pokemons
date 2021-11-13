import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import classNames from 'classnames';
import { action as actionDisplay } from '../../store/display';

import './Display.scss';

export const Display = () => {
  const dispatch = useDispatch();
  const display = useSelector((state: RootState) => state.display.display);
  const setDisplay = (inputDisplay: string) => {
    dispatch(actionDisplay.changeDisplay(inputDisplay));
  };

  return (
    <div className="Display">
      <button
        className={classNames(
          'Display-Button',
          'Display-Button_Cards',
          { 'Display-Button_Active': display === 'cards' },
        )}
        onClick={() => setDisplay('cards')}
      ></button>
      <button
        className={classNames(
          'Display-Button',
          'Display-Button_List',
          { 'Display-Button_Active': display === 'list' },
        )}
        onClick={() => setDisplay('list')}
      ></button>
    </div>
  );
};