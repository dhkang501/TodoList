const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
};

const state = {
    todoItems:storage.fetch()
};

const getters = {
    storedTodoItems(state){
        return state.todoItems;
    } 
}

const mutations = {
    addOneItem(state, todoItem) {
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;//위와 같음(데이터 흐름을 보면 위는 쓸데없는 이동을 하고 있음.)
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));//동일하게 세팅하면서 바뀐거를 string으로 저장
    },
    clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    }
}

export default{
    state, 
    getters, 
    mutations
}