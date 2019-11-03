const API_URL = 'https://jsonplaceholder.typicode.com/';
const ENDPOINT = 'users';

const retrieve = id => fetch(`${API_URL}${ENDPOINT}/${id}`);

export default {
  retrieve,
};
