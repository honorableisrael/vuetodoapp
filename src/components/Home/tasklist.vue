<template>
<div>
     <div class="taskwrapper">
            <div class="taskbox1">   
                <div class="task-wrap">
                    <h2 class="setup">Tasks</h2>
                    <!-- <span><button v-on:click="displayModal"> New Task</button></span>                -->
                </div>
                
    <div v-for="task in allTask" v-bind:key="task.name">
            <div class="authduewrapper">
            <div>
                <label>
                    <input type="radio" class="option-input radio" name="example" />
                   {{task.name}}
                </label> 
            </div>
                <div>
                    <span class="authduebox1">Auth</span> 
                    <span class="authduebox2">due 2 Dec 2018</span>
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
                {name:'Setup Github respository.' },
                {name:'Setup Server at Herokue.'},
                {name:'Investigate swift server options like kitura and vapor.'},
                {name:'Write basic server that authenticates users.'},
                {name:' Email questions to momenta B.V. on iOS app development.'}
            ]
        }
    }
})
</script>