import axios from 'axios';
import { newsAPIkey } from '../keys';
import { GET_SNEWS } from '../constants/index';


const URL = `https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=${newsAPIkey}`;
var sNews;
const request = axios.get(URL)
    .then(response => sNews = response.data.articles)
    .catch(err => console.log(err))

export const getSportNews = () => ({
    type: GET_SNEWS,
    payload: sNews
})