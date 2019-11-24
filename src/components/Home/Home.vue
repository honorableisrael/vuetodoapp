<template>
    <div class="home-wrapper">
        <div class="firstcontainer">
            <div class="firstcontainer-wrapper">
                 <div class="icons-wapper"> 
                    <img src='../../assets/left1.png' alt="left"/>
                    <img src='../../assets/left2.png' alt="left"/>
                    <img src='../../assets/left3.png' alt="left"/>
                </div>
                    <div class="headerwrapper">
                        <div class="wrapper-1"><h3>Project</h3> <div><img class="ontheagend" src='../../assets/notification.png' alt="left"/><img class="ontheagend" src='../../assets/notification1.png' alt="left"/></div></div>
                        <div class="overview">Overview </div>
                        <div> <img class="ontheagenda" src='../../assets/ontheagenda.png' alt="left"/> On the Agenda </div>
                        <div class="overview"> <img class="ontheagenda1" src='../../assets/Today.png' alt="left"/> Today </div>
                        <div class="overview"> <img class="ontheagenda1" src='../../assets/search.png' alt="left"/> Search </div>
                    </div>
                </div>
        </div>
        <div class="secondcontainer">Second Container</div>
    </div>
</template>
<script >
import Vue from 'vue'
export default Vue.extend({
    name:'Home',
})
</script>
<style scoped>
    .home-wrapper{
        display: flex;
    }
    .secondcontainer{
        flex: 3;
        /* background: rgb(252,252, 255); */
        background: rgb(98, 98, 102);
        /* align-items: center; */
    }
    .firstcontainer{
         color: white;
         flex: 1;
    }
    .firstcontainer-wrapper{
        display: flex;
    }
    .icons-wapper{
        background: rgb(32,45,138);
        padding-top: 2.5rem;
        height: 100vh;
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
</style>