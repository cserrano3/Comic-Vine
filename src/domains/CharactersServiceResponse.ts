import ImageServiceResponse from './ImageServiceResponse';

export default interface CharacterServiceResponse {
  aliases: string;
  birth: string;
  description?: string;
  image: ImageServiceResponse;
  gender: number;
  name: string;
  real_name: string;
}