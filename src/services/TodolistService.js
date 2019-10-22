import React, { Component } from 'react';

import axios from 'axios';

export const TodoListService = {
    todoListItem: getTodoListItems,
    remove,
    completed,
    save
};

const baseApiUrl = "http://127.0.0.1:3000";

function getTodoListItems() {
    const requestOptions = {
        method: 'GET'
    };

    return axios.get(baseApiUrl + '/list', requestOptions);
}

function remove(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    const body = JSON.stringify({ id });

    return axios.post(baseApiUrl + 'todos/' + id, body, requestOptions);
}

function completed(id) {
    const requestOptions = {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' }
    };
    const body = JSON.stringify({ "_id": id });

    return axios.post(baseApiUrl + '/update', body, requestOptions);
}


function save(name) {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' }
    };
    const body = JSON.stringify({name});

    return axios.post(baseApiUrl + '/create', body, requestOptions);
}
