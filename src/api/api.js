import firebase from 'firebase'

export const getTodo = function() {
    return firebase.database().ref('todolist').once('value')
        .then(res => res.val());
}

export const addTodo = function (text) {
    const key = firebase.database().ref('todolist').push().key;
    const updates = {};
    updates['/todolist/' + key] = {
        text,
        id: key,
        done: false
    };
    return firebase.database().ref().update(updates);
}

export const updateTodo = function(id, done) {
    return firebase.database().ref('/todolist/' + id + '/done').update(done);
}

export const deleteTodo = function (id) {
    return firebase.database().ref('todolist/' + id).remove();
}
