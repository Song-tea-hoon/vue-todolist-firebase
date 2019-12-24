import firebase from 'firebase'

export const getTodo = function() {
    // firebase에서 todoList를 불러오는 api함수
    return firebase.database()
      .ref('todoList')
      .once('value')
      .then(snapshot => snapshot.val())
}

export const addTodo = function(data) {
    return firebase.database()
      .ref('todoList')
      .push(data)
}

export const removeTodo = function(id) {
    return firebase.database()
      .ref('todoList/'+id)
      .remove();
}

export const updateTodo = function(id, done) {
    const updates = {};
    updates[`todoList/${id}/done`] = done;
    /**
     * {
     *  todoList/-Lsdlkfjsdklfj/done: true
     * }
     */
    return firebase.database().ref().update(updates)
}
