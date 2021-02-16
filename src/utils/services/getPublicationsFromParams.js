import axios from 'axios';
import { GET_ITEMS_BY_CATEGORY_URL, GET_ITEMS_BY_SEARCH_QUERY } from '../constants/endpoints'

export const getPublicationsFromParams = ( params, context ) => {
  const categoryId = params.categoryId;
  const query = params.query;
  if(categoryId) {
    return axios(`${GET_ITEMS_BY_CATEGORY_URL}${categoryId}`)
    .then(res => context.setPublications(res.data.results))
    .catch(err => console.error(err))
  } else if (query) {
    return axios(`${GET_ITEMS_BY_SEARCH_QUERY}${query}`)
    .then(res => context.setPublications(res.data.results))
    .catch(err => console.error(err))
  }
}