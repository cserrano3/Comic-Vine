import Image from './Image';

export default interface Character {
  aliases?: Array<string>;
  birth?: string;
  avatarURL?: string;
  description?: string;
  image?: Image;
  gender: string;
  name: string;
  real_name: string;
  isFavorite?: boolean;
}