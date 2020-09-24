import axios from 'axios';
import { BASE_URL } from '../../helpers/constants';

export default function getCharacterByName(name: string, limit: number, offset: number) {
  return axios.get(`${BASE_URL}/get-character-by-name?name=${name}&limit=${limit}&offset=${offset}`)
    .then(response => {
      return response;
    }).catch(error => {
      return error;
    });
}
