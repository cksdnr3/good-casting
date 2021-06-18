const { default: axios } = require('axios');



const signup = (arg) => {
    return axios({
        url: `/users/signup`,
        method: 'post',
        data: arg,
        headers: { Authorization: 'JWT fefege..' },
    });
};

const signin = (arg) => {
    return axios({
        url: `/users/signin`,
        method: 'post',
        data: arg,
        headers: { Authorization: 'JWT fefege..' },
    });
};

const update = (user) => {
    return axios({
        url: `/users/update`,
        method: 'post',
        data: user,
        headers: { Authorization: 'JWT fefege..' },
    });
};

export default { signup, signin, update };
