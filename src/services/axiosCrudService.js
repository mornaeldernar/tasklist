import axios from "axios";

/**
 * Login Method to ReqRes endpoint
 * @param { string } email 
 * @param { string } password 
 */
export const login = (email, password) => {

    let body = {
        email : email,
        password : password
    }

    //regresa ua response con una Promise
    return axios.post('https://reqres.in/api/login', body);
}

// Obtain all users
export const getAllUsers = () => 
{
    return axios.get('https://reqres.in/api/users')
}
// Obtain all users con paginado
export const getAllPagedUsers = (page) => 
{
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// Obtain user by id
export const getUserById = (id) => 
{
    return axios.get(`https://reqres.in/api/users/${id}`)
}

// Create user
export const createUser = (name, job) => {

    let body = {
        name : name,
        job : job
    }

    //regresa ua response con una Promise
    return axios.post('https://reqres.in/api/users', body);
}

// Update user
export const updateUser = (id, name, job) => {

    let body = {
        name : name,
        job : job
    }

    //regresa ua response con una Promise
    return axios.put(`https://reqres.in/api/users/${id}`, body);
}

// Delete user
export const deleteUser = (id) => {


    //regresa ua response con una Promise
    return axios.delete(`https://reqres.in/api/users/${id}`);
}