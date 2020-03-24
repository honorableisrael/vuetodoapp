<template>
<div>
    <div class="taskwrapper">
        <div class="taskbox1">   
            <div class="task-wrap">
                <h2 class="setup">Tasks</h2>
            </div>
    <div v-for="(task,index) in allTask" v-bind:key="task.name">
        <div class="authduewrapper">
            <div>
                <label>
                <input type="radio" class="option-input radio" name="example" />
                   {{task.name}}
                </label> 
            </div>
            <div>
                <span class="authduebox1">Auth</span> 
                    <span class="authduebox2">{{task.date       }}</span>
                    <i 
                    title="delete todo"
                    class="deleteIcon" 
                    @click="deleteTodo(index)"
                    > <img src='../../assets/bin.png' alt="bin" height="30" width="30"/>
                    </i>
            </div>
        </div>
                <br>
                <hr class="line">
        </div>
    </div>
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import store from '../../store/index';
export default Vue.extend({
    name:'tasklist',
    data(){
        return{
            allTask:[]
        }
    },
    store,
    mounted(){
        this.allTask= JSON.parse(JSON.stringify(this.$store.state.allTask))
    },
    methods:{
        deleteTodo(index){
            console.log(index)
           const newList = this.allTask.splice(index,1)
           alert('todo deleted')
        }
    }
})
</script>
<style>
    .deleteIcon{
        color: white;
        border-radius: 50%;
        padding: 4px;
        position: relative;
        top: 7px;
        left: 7px;
        cursor: pointer;
    }
</style>