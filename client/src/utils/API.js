import axios from "axios";

export default {

    getPosts: function (data) {
        return axios.get('/api/posts')
    },

    getProviderPosts: function (id) {
        return axios.get('/api/posts' + id)
    },

    addPost: function (data) {
        return axios.post('/api/posts' + id)
    },

    getAppts: function (id) {
        return axios.get('/api/appts/' + id)
    },

    addAppt: function (id) {
        return axios.post('/api/appts/' + id)
    },

//=========log in and sign up functions must be verified=================

    // userLogin: function (id) {
    //     return axios.post('/api/accounts/' + id, data)
    // },

    // userSignUp: function (data) {
    //     return axios.post('/api/accounts', data)
    // }

}