const ENDPOINT =  'https://raw.githubusercontent.com/Adalab/m3-tutoria-2/master/assets/data/bulk.json';

const fetchUsers = () => fetch(ENDPOINT).then(response => response.json());

export { fetchUsers };