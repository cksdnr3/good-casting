const { default: axios } = require('axios');


// const userInfo =
//     typeof window !== `undefined`
//         ? JSON.parse(localStorage.getItem('USER'))
//         : null;

const profileList = (pageRequest) => {
    return axios({
        url: `/profiles/list`,
        method: 'post',
        data: pageRequest,
        headers: { Authorization: 'JWT fefege..' },
    });
};

const profileDetail = (id) => {
    return axios({
        url: `/profiles/detail/${id}`,
        method: 'get',
        headers: { Authorization: 'JWT fefege..' },
    });
};

const profileRegister = (arg) => {
    return axios({
        url: `/profiles/register`,
        method: 'post',
        data: arg,
        headers: {
            Authorization: localStorage.getItem('TOKEN'),
        },
    });
};

const profileDelete = (id) => {
    return axios({
        url: `/profiles/delete/${id}`,
        method: 'delete',
        headers: { Authorization: localStorage.getItem('TOKEN') },
    });
};

export default {
    profileList,
    profileDetail,
    profileRegister,
    profileDelete,
};
