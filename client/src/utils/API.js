import axios from "axios";

export default {

    getPosts: function () {
        return axios.get('/api/posts')
    },

    removePost: function (id) {
        return axios.delete('/api/posts/' + id)
    },

    editPost: function (id) {
        return axios.put('/api/posts/' + id)
    },


    addPost: function (data) {
        return axios.post('/api/posts', data)
    },

    getAppts: function () {
        return axios.get('/api/appts')
    },

    addAppt: function (data) {
        return axios.post('/api/appts',data)
    },

//=========log in and sign up functions must be verified=================

    userLogin: function (data) {
        return axios.post('/api/accounts/login' , data)
    },

    userSignUp: function (data) {
        return axios.post('/api/accounts/signup', data)
    }

}