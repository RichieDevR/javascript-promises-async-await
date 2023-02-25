import { fetchWithTimeout } from './services.js';

const movies = require('./data/movies.json');

export function fetchMovies() {
  return fetchWithTimeout(movies);
}
