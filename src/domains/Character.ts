import Image from './Image';

export default interface Character {
  aliases: Array<string>;
  birth: string;
  description?: string;
  image: Image;
  gender: string;
  name: string;
  realName: string;
  isFavorite?: boolean;
}