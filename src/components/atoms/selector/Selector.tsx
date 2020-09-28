import React from 'react';
import Input from '../input/Input';
import Label from '../label/Label';
import { useField } from 'formik';
import './style.scss';

interface Props<T> {
  options: Array<T>;
  onChange?: (value: T) => void;
  onInput?: (event: React.ChangeEvent) => void;
  disabled?: boolean;
  name: string;
  labelText: string;
}

//TODO: Fix onBlur bug to toggle off the list when the user clicks on the arrow

export default function Selector<T>({
  options,
  onChange,
  name,
  labelText,
  disabled = false
}: Props<T>) {

  const [isListOpen, toggleList] = React.useState<boolean>(false);

  const [field, meta, helpers] = useField({
    name
  });

  const onSelectValue = React.useCallback((option: T) => {
    helpers.setValue(option)
    toggleList(!isListOpen)
  }, [options, isListOpen])

  const onToggleList = React.useCallback(() => {
    toggleList(!isListOpen)
  }, [isListOpen]);;


  return (
    <div className="selector__wrapper">
      <div className="selector__inputWrapper">
        <Label forInput={name} text={labelText} />
        <Input
          type="text"
          name={name}
          onBlur={onToggleList}
          onFocus={onToggleList}
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
                  <li className="selector__option" onClick={() => {
                    onSelectValue(option)
                  }}>
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