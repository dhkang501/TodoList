<template>
<!-- TodoInput에서 저장한 값들을 TodoList에서 보여주기-->
  <div>
    <transition-group name="list" tag="ul">
      <!-- v-for="todoItem in todoItems"  이렇게만 써도 되는데 vscode에서
           v-bind:key="todoItem" 같이 사용하라고 함
      -->
      <!-- prpsdata에 들어있는 데이터 말고 store에 있는 todoItems 데이터 사용하기 -->
      <!-- <li v-for="(todoItem, index) in this.$store.state.todoItems " /store.state 이용 -->
      <!-- <li v-for="(todoItem, index) in this.$store.getters.storedTodoItems "  -->
      <li v-for="(todoItem, index) in this.todoItems " v-bind:key="todoItem.item" class="shadow">
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
            v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

// vue lifecycle : 1. vue 인스턴스 생성 2.mount 3.updated 4.destroyed
export default {
  // props: ['prpsdata'], //store 로 교체
  //data todoItmes 공통사용으로 App.vue로
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    }),
    // removeTodo(todoItem, index){
    //   // this.$emit('removeItem', todoItem, index);//App.vue 거침
    //   this.$store.commit('removeOneItem',{todoItem, index});//App.vue 안거치고 바로 호출
    //   // console.log(todoItem);
    //   // console.log(todoItem, index);//이걸 쫒아서 삭제
    // },
    // toggleComplete(todoItem, index){
    //   // this.$emit('toggleItem',todoItem, index)
    //   this.$store.commit('toggleOneItem',{todoItem, index});
    // }
  },
  computed: {
    // todoItems(){
    //   return this.$store.getters.storedTodoItems;
    // }
    // ...mapGetters(['storedTodoItems'])//배열리터럴
    ...mapGetters({
      todoItems: 'storedTodoItems'
    })
  }
  // created() : 동작하자마자 localStorage에 있는 key, value 가져오는 함수를 App.vue로
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>