<template>
    <div class="home-wrapper">
        <aside class="firstcontainer">
            <div class="firstcontainer-wrapper">
                 <div class="icons-wapper"> 
                    <img src='../../assets/left1.png' alt="left"/>
                    <img src='../../assets/left2.png' alt="left"/>
                    <img src='../../assets/left3.png' alt="left"/>
                </div>
                    <div class="headerwrapper">
                        <div class="wrapper-1"><h3 @:click="changeTheTitle">{{ title }}</h3> <div><img class="ontheagend" src='../../assets/notification.png' alt="left"/><img class="ontheagend" src='../../assets/notification1.png' alt="left"/></div></div>
                        <div class="overview">Overview </div>
                         <div class="overview">{{name}}</div>
                        <div> <img class="ontheagenda" src='../../assets/ontheagenda.png' alt="left"/> On the Agenda </div>
                        <div class="overview"> <img class="ontheagenda1" src='../../assets/Today.png' alt="left"/> Today </div>
                        <div class="overview"> <img class="ontheagenda1" src='../../assets/search.png' alt="left"/> Search </div>
                    </div>
                </div>
        </aside>
        <div class="secondcontainer">
        <div>
            <span class="project-subtitle"> Project </span> : <span class="project-subtitle1">You currently have {{lengthOfTodo}}  todos</span>
             <div> <button class="checknow" v-bind:click="addName()">Check Username</button> </div>
                 <div class="connection"><b> Connection and setup</b></div>
                  <!-- <AppModal/> -->
                  <EnterInfo></EnterInfo>
                  <tasklist></tasklist> 
            </div>
        </div>
    </div>
</template> 
<script >
import Vue from 'vue';
import tasklist from './tasklist'
import EnterInfo from './EnterInfo';
import store from '../../store/index';


export default Vue.extend({
    name:'Home',
    components:{
        EnterInfo,
        tasklist
    },
    data(){
        return {
            title:'TodoList',
            allTask:[],
            name:''
        }
    },
    mounted(){
        this.allTask = JSON.parse(JSON.stringify(this.$store.state.allTask))
        this.name = this.$store.state.name
    },
    computed:{
        lengthOfTodo(){
            return this.allTask.length
        }
    },
    methods:{
        displayModal(){
            alert ('Modal Displayed')
            console.log('click event') 
        },
        addName(){
           return this.$store.commit('changeName')
        },
        changeTheTitle(){
            this.title = 'Custom TodoList'
        }
    }
})
</script>
<style>
    .checknow{
        border: 1px solid orange;
        border-radius: 1rem;
        color: orange;
        padding: 5px 1rem;
        margin-top: 1rem;
    }
    .checknow:focus{
        outline: none;
    }
    .home-wrapper{
        display: flex;
    }
    .project-subtitle{
        color: grey;
        text-align: left;
        font-size: 12px;
    }
    .project-subtitle1{
    color: rgb(97, 93, 93);
    text-align: left;
    font-size: 12px;
    padding:5px;
    border-radius: 2rem;
     background: rgb(226, 223, 223);
    }
    .secondcontainer{
        flex: 3;
        text-align: left;
        margin-left: 290px;
        padding:5rem;
        background:rgb(250, 247, 247);
        /* align-items: center; */
    }
    .firstcontainer{
         color: white;
         flex: 1;
         position: fixed;
         width: 290px;
    }
    .firstcontainer-wrapper{
        display: flex;
    }
    .icons-wapper{
        background: rgb(32,45,138);
        padding-top: 2.5rem;
        height: auto;
        position: relative;
        flex:1;
    }
    .headerwrapper{
        padding-top: 3.8rem;
        flex:3;
        text-align: left;
        line-height: 5;
        padding-left: 1rem;
        height: 100vh;
        background: rgb(28,33,129);
    }
    .overview{
        color: darkgrey;
    }
    .ontheagenda{
        width: 9%;
        padding-right: .2rem;
    }
    .ontheagend{
        position: relative;
        top: -.7rem;
    }
    .ontheagenda1{
        width: 9%;
        color: darkgrey;
        padding-right: .2rem;
    }
    .wrapper-1{
        padding-right: .9rem;
        display: flex;
        justify-content: space-between;
    }
.connection{
    color: blue;
    font-size: 3rem;
    margin-top: 1rem;
}
.taskwrapper{
    display: flex;
}
.taskbox1{
    background-color: inherit;
    flex: 2rem;
    margin-top: 2rem
}
.taskbox2{
    background: inherit;
    flex: 1rem;
}
.setup{
    color: blue;
    font-size: 2rem;
    font-style: normal;
    margin-top: 3rem;
}
.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: 12.33333px;
  right: 1;
  bottom: 0;
  left: 0;
  height: 30px;
  width: 30px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;
  position: relative;
  z-index: 1000;
  font-size: 3rem;
}
.option-input:hover {
  background: #9faab7;
}
.option-input:checked {
  background: #40e0d0;
}
.option-input:checked:before {
  height: 20px;
  width: 20px;
  position: absolute;
  content: '✔';
  display: inline-block;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  margin-bottom: 0rem;
  padding: 2px;
}
.option-input:checked:after {
  -webkit-animation: click-wave 0.65s;
  -moz-animation: click-wave 0.65s;
  animation: click-wave 0.65s;
  background: #40e0d0;
  content: '';
  display: block;
  position: relative;
  z-index: 100;
}
.option-input.radio {
  border-radius: 50%;
  padding: 2px;
}
.option-input.radio:after {
  border-radius: 50%;
}
.line{
    margin-left: 3rem;
    margin-right: 3rem;
}
.authduewrapper{
    display: flex;
    justify-content: space-between;
}
.authduebox1{
    color: white;
    text-align: right;
    font-size: 13px;
    padding:5px;
    border-radius: 2rem;
     background: orange;
    flex : 1rem;
    position: relative;
    top: 7px;
    justify-content: space-between;
}
.authduebox2{
    color: white;
    text-align: right;
    font-size: 13px;
    padding:5px;
    border-radius: 2rem;
     background: blue;
     flex : 1rem;
    position: relative;
    top: 7px;
}
.task-wrap{
    display: flex;
    justify-content: space-between;
}
</style>