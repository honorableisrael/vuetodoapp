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
                    <span class="authduebox2">{{task.date}}</span>
                    <i 
                    title="delete todo"
                    class="deleteIcon" 
                    @click="deleteTodo(index)"
                    > X
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
export default Vue.extend({
    name:'tasklist',
    data(){
        return{
            allTask:[
                {name:'Setup Github respository.', date:"19-10-2020" },
                {name:'Setup Server at Herokue.', date:"29-12-2020"},
                {name:'Investigate swift server options like kitura and vapor.', date:"5-12-2020"},
                {name:'Write basic server that authenticates users.',date:"18-12-2020"},
                {name:' Email questions to momenta B.V. on iOS app development.', date:"19-12-2020"}
            ]
        }
    },
    methods:{
        deleteTodo(index){
            console.log(index)
           const newList = this.allTask.splice(index,1)
        }
    }
})
</script>
<style>
    .deleteIcon{
        background: red;
        color: white;
        border-radius: 50%;
        padding: 4px;
        position: relative;
        top: 7px;
        left: 7px;
        cursor: pointer;
    }
</style>