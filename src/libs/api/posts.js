const API_URL = 'https://jsonplaceholder.typicode.com/';
const ENDPOINT = 'posts';

const list = () => fetch(`${API_URL}${ENDPOINT}`);
const retrieve = id => fetch(`${API_URL}${ENDPOINT}/${id}`);

// list, retrieve, remove, activate

export default {
  list,
  retrieve,
};
