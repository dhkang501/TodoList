<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
        <i class="closeModalBtn fas fa-times" v-on:click="showModal = false"></i> 
      </h3>
      <h3 slot="body">무언가를 입력하세요</h3>
      <h3 slot="footer">copy right</h3>
    </Modal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
  data(){
    return{
      newTodoItem: "",
      showModal: false
    }
  },
  methods:{
    addTodo(){//
      if(this.newTodoItem !== ''){//값이 있을때만
        //이벤트 클릭 후에 local store로 저장하는 기능 App.vue로 옮김
        // this.$emit('addTodoItem', this.newTodoItem); //this.newTodoItem 데이터를 addTodoItem로 옮기는 방법 말고 store에 있는 데이터 사용.
        this.$store.commit('addOneItem', this.newTodoItem);//store에 있는 mutatations 동작 시킴
        this.clearInput();
      }else{
        // alert('아무것도 없어요...')
        this.showModal = !this.showModal;
      }
    },
    clearInput(){
      this.newTodoItem = '';
    }
  },
  components:{
    Modal : AlertModal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
  color: #42b983;
}

</style>