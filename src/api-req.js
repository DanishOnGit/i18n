import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        console.log('API Response:', response.data);
    })
    .catch((error) => {
        console.error('API Request failed:', error.message);
        process.exit()
    });