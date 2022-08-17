<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// ES5 방식 컴포넌트 생성 및 등록
// var my_cmp = {
//   template: '<div>my component</div>'
// }

// new Vue({
//   el: '',
//   component:{
//     'my-cmp' : my_cmp
//   }
// })

export default {
  data(){
    return{
      //모든 component에서 사용 todoItems
      // todoItems: [],
    }
  },
  methods:{//mutations
    // addOneItem(todoItem){ //store.js로 이동
    //   const obj = {completed: false, item: todoItem};//boolean 체크 됬는지 여부,text값
    //   // localStorage.setItem(this.newTodoItem, obj);//값이 [object Object] 이렇게 보임
    //   localStorage.setItem(todoItem, JSON.stringify(obj)); //todoItem이벤트 받아서 저장 ,객체 obj를 스트링값으로 변환 시켜주는  API {"completed":false,"item":"sdf"} 이렇게 보임,Storage.setItem(), setItem(keyName, keyValue)
    //   this.todoItems.push(obj);//todoItems배열에 반환
    // },
    // removeOneItem(todoItem, index){
    //   localStorage.removeItem(todoItem.item);//localStorage영역 삭제됨, 화면영역은 반영 안됨
    //   this.todoItems.splice(index, 1);//화면영역 삭제, index 해당번호 , 1개 삭제, 기존 배열 변경 후 새로운 배열 반환
    //   //slice : 지우는데 기존배열 변경하지 않음
    // },
    // toggleOneItem(todoItem, index){
    //   // todoItem.completed = !todoItem.completed;//설정값이 바뀜, 화면상만 바뀜
    //   this.todoItems[index].completed = !this.todoItems[index].completed;//위와 같음(데이터 흐름을 보면 위는 쓸데없는 이동을 하고 있음.)
    //   //로컬 스토리지의 데이터 갱신
    //   localStorage.removeItem(todoItem.item);//update가 없기 때문에 지웠다가
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));//동일하게 세팅하면서 바뀐거를 string으로 저장
    // },
    // clearAllItems(){
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  },
  //created TodoList.vue -> App.vue -> store.js 로 이동
  components:{
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }

}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
input{
  border-style:groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>