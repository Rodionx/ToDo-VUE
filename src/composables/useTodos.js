import { reactive, toRefs } from "vue";
export default function(){
    const data = reactive({
        todo: null,
        todos: []
    })

    const addTodo = () =>{
        if(data.todo.length > 1){
            data.todos.push(data.todo)
            data.todo = null
        }else{
            data.todo = null
        }
    }

    const deleteall = (index) => {
            data.todos = [];
    }

    const deleteTodo = (index) => {
        setTimeout(() => {
            data.todos.splice(index, 1)
          }, 2000);
    }

    const current = new Date();
    const date =
      current.getFullYear() +
      "-" +
      (current.getMonth() + 1) +
      "-" +
      current.getDate();
    const time = current.getHours() + ":" + current.getMinutes();
    const dateTime = date + " " + time;


    return { ...toRefs(data), addTodo, deleteTodo, dateTime, deleteall}
}