import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
    //created() :  TodoList.vue -> App.vue -> store.js 로 이동, created() 걷어내고 fetch()로, 
    //             동작하자마자 localStorage에 있는 key, value 가져옴
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                // this.todoItems.push(localStorage.key(i))
                // console.log(typeof localStorage.getItem(localStorage.key(i)));//String으로 옴
                //TodoInput에서 String으로 보낸 데이터를 다시  JSON형식으로 바꿔줌
                // this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //this.todoItems 는 scope이 다르기 때문에 아래 export state에 있는 todoItems:[]에 접근할 수 없음
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));//arr[] 배열 만들어서 집어넣고
                }
            }
        }
        return arr;//반환 시켜줌
    },
};

export const store = new Vuex.Store({
    state: {
        todoItems:storage.fetch()
        // headerText: "TODO it!"
    },
    getters:{
        storedTodoItems(state){
            return state.todoItems
        }
    },
    mutations: {
        addOneItem(state, todoItem){//todoItem : TodoList에서 this.newItems 넘어오는 값 받음
            const obj = {completed: false, item: todoItem};//boolean 체크 됬는지 여부,text값
            // localStorage.setItem(this.newTodoItem, obj);//값이 [object Object] 이렇게 보임
            localStorage.setItem(todoItem, JSON.stringify(obj)); //todoItem이벤트 받아서 저장 ,객체 obj를 스트링값으로 변환 시켜주는  API {"completed":false,"item":"sdf"} 이렇게 보임,Storage.setItem(), setItem(keyName, keyValue)
            // this.todoItems.push(obj);//this.todoItems으로 state에 있는 todoItems 접근 못함  ,todoItems배열에 반환
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload){
            localStorage.removeItem(payload.todoItem.item);//localStorage영역 삭제됨, 화면영역은 반영 안됨
            // this.todoItems.splice(index, 1);//화면영역 삭제, index 해당번호 , 1개 삭제, 기존 배열 변경 후 새로운 배열 반환
            //slice : 지우는데 기존배열 변경하지 않음
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload){
            // todoItem.completed = !todoItem.completed;//설정값이 바뀜, 화면상만 바뀜
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;//위와 같음(데이터 흐름을 보면 위는 쓸데없는 이동을 하고 있음.)
            //로컬 스토리지의 데이터 갱신
            localStorage.removeItem(payload.todoItem.item);//update가 없기 때문에 지웠다가
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));//동일하게 세팅하면서 바뀐거를 string으로 저장
        },
        clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
});
