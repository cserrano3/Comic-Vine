import axios from 'axios';
import { BASE_URL } from './../../helpers/constants';

export function getAllCharactersService(limit: number, offset: number) {
  return axios.get(`${BASE_URL}/get-characters?limit=${limit}&offset=${offset}`)
    .then(response => {
      const { results, number_of_total_results, number_of_page_results } = response.data
      return {
        results,
        totalResults: number_of_total_results,
        resultsPerPage: number_of_page_results
      };
    })
    .catch(error => {
      return error
    });
}
