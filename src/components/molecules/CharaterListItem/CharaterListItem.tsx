import React from 'react';
import Avatar from '../../atoms/avatar/Avatar';
import Icon from '../../atoms/icon/Icon';
import Separator from '../../atoms/separator/Separator';
import ListItem from '../../atoms/listItem/ListItem';
import Aliases from '../Aliases/Aliases';
import './style.scss';

interface Props {
  imageURL: string;
  aliases?: Array<string>;
  gender?: string;
  name: string;
  realName: string;
  birth?: string;
}

export default function ChararacterListItem({
  imageURL,
  aliases,
  gender,
  name,
  realName,
  birth
}: Props) {
  console.log(aliases.length)
  return (
    <ListItem className="character-list-item">
      <Avatar imageURL={imageURL} alt={name} size="small" className="character-list-item__avatar" />

      <div className="character-list-item__info-wrapper">
        <span className="character-list-item__name">{name}</span>
        <Separator />
        <span className="character-list-item__real-name">{realName}</span>
        <div className="character-list-item__aliases-wrapper">
          <Aliases aliases={aliases} />
        </div>
        <div>
          {birth && <span className="character-list-item__birth">{birth}</span>}
          <Separator className="character-list-item__info-separator" />
          {gender && <span className="character-list-item__gender">{gender}</span>}
        </div>
      </div>

      <div className="character-list-item__icon-wrapper">

        <Icon name="favorite" />

      </div>

    </ListItem >
  );
}
