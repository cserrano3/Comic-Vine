import React from 'react';
import Separator from '../../atoms/separator/Separator';
import './style.scss';

interface Props {
  aliases: Array<string>;
}

export default function ({ aliases }: Props) {
  return (
    <>
      {
        aliases.map(alias => {
          if (aliases.indexOf(alias) !== 2) {
            return (
              <span className="aliases">
                {alias}<Separator className="aliases__separator" />
              </span>
            )
          }

          return (
            <span className="aliases">
              {alias}
            </span>
          )
        }).slice(0, 3)
      }
    </>
  )
}
