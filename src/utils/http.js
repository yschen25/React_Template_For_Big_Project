import axios from "axios";

const config = {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    }
};

axios.create({
    baseURL: "https://my-json-server.typicode.com/",
    headers: {config}
});

