// imported constants to help reduce (ha!) typos
import { ADD_ARTICLE } from '../constants/action-types';

// actions
export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});
