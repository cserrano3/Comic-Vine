import React from 'react';
import Input from '../input/Input';
import Label from '../label/Label';
import { useField } from 'formik';
import deburr from 'lodash.deburr';
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

  const [filteredOptions, setFilteredOptions] = React.useState<Array<T>>(options);

  const [field, _, helpers] = useField({
    name
  });

  const onSelectValue = React.useCallback((event: React.MouseEvent<HTMLLIElement>) => {
    helpers.setValue(event.currentTarget?.innerText)
    toggleList(!isListOpen)
  }, [filteredOptions, isListOpen])

  const onToggleList = React.useCallback(() => {
    toggleList(!isListOpen)
  }, [isListOpen]);

  const onFilterValue = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {

    const input = e.target.value;
    helpers.setValue(input)

    setFilteredOptions(options.filter(option => {
      return String(option).startsWith(input);
    }));

    toggleList(true);
  }, [options]);

  return (
    <div className="selector__wrapper">
      <div className="selector__inputWrapper">
        <Label forInput={name} text={labelText} />
        <Input
          type="text"
          name={name}
          onChange={onFilterValue}
          onFocus={onToggleList}
          value={field.value}
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
              filteredOptions.map(option => {
                return (
                  <li className="selector__option" onClick={
                    onSelectValue
                  }>
                    { option}
                  </li>
                )
              })
            }
          </ul>
        ) : null
      }
    </div >
  );
}