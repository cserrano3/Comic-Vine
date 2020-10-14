import React from 'react';
import Character from '../../../domains/Character';
import Avatar from '../../atoms/avatar/Avatar';
import Icon from '../../atoms/iconCheckbox/IconCheckbox';
import Separator from '../../atoms/separator/Separator';
import ListItem from '../../atoms/listItem/ListItem';
import Aliases from '../../atoms/aliases/Aliases';

import './style.scss';

interface Props extends Character {
  markAsFavorite?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ChararacterListItem({
  avatarURL,
  aliases,
  gender,
  name,
  real_name,
  birth,
  markAsFavorite
}: Props) {
  return (
    <ListItem className="character-list-item">

      <Avatar imageURL={avatarURL} alt={name} size="small" className="character-list-item__avatar" />

      <div className="character-list-item__info-wrapper">
        <span className="character-list-item__name">{name}</span>
        <Separator />
        <span className="character-list-item__real-name">{real_name}</span>
        <div className="character-list-item__aliases-wrapper">
          <Aliases aliases={aliases} />
        </div>
        <div>
          {birth && <span className="character-list-item__birth">{birth}</span>}
          {birth && gender && <Separator className="character-list-item__info-separator" />}
          {gender && <span className="character-list-item__gender">{gender}</span>}
        </div>
      </div>

      <div className="character-list-item__icon-wrapper">
        <Icon checked={false} name={name} onChange={markAsFavorite} />
      </div>

    </ListItem >
  );
}
