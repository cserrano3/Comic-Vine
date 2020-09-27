import React from 'react';
import Input from '../input/Input';
import Label from '../label/Label';
import './style.scss';

interface Props<T> {
  options: Array<T>;
  onChange?: (value: T) => void;
  onInput?: (event: React.ChangeEvent) => void;
  disabled?: boolean;
  name: string;
  labelText: string;
}

export default function Selector<T>({
  options,
  onChange,
  name,
  labelText,
  disabled = false
}: Props<T>) {

  const [isListOpen, toggleList] = React.useState<boolean>(false);

  const onToggleList = React.useCallback(() => {
    toggleList(!isListOpen)
  }, [isListOpen]);

  return (
    <div className="selector__wrapper">
      <div className="selector__inputWrapper">
        <Label forInput={name} text={labelText} />
        <Input
          type="text"
          name={name}
        />
        <i
          className={`material-icons
          ${!isListOpen ? 'selector__arrow' : 'selector__arrow--open'}`}
          onClick={onToggleList}>
          {'arrow_drop_down'}
        </i>
      </div>
      {
        isListOpen ? (
          <ul className="selector__suggestions">
            {
              options.map(option => {
                return (
                  <li className="selector__option">
                    {option}
                  </li>
                )
              })
            }
          </ul>
        ) : null
      }

    </div >
  )

}