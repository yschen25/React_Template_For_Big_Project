import axios from 'axios';

const config = {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    }
};

const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/',
    headers: {config}
});


const getAll = () => {
    return http.get('yschen25/Interview/memberData');
};

const getDataById = id => {
    return http.get(`yschen25/Interview/memberData/${id}`);
};

const create = data => {
    return http.post('yschen25/Interview/memberData/', data);
};

const updateDataById = (id, data) => {
    return http.put(`yschen25/Interview/memberData/${id}`, data);
};

const removeDataById = id => {
    return http.delete(`yschen25/Interview/memberData/${id}`);
};

const removeAll = () => {
    return http.delete('yschen25/Interview/memberData');
};


export default {
    getAll,
    getDataById,
    create,
    updateDataById,
    removeDataById,
    removeAll
};