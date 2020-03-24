<template>
  <div>
    <b-button class="newagenda" v-b-modal.modal-1>
        Add New Agenda
    </b-button>
    <b-modal id="modal-1" title="New Activity" @ok="handleOk">
    <p class="my-4"><b-input-group size="sm" prepend="Title" class="mb-2">
        <b-form-input  v-model="name" aria-label="Small text input with custom switch"></b-form-input>
        </b-input-group>
    </p>
    <p class="my-4">
        <b-input-group size="sm" prepend="Message" class="mb-2">
        <b-form-input v-model="message" aria-label="Small text input with custom switch"></b-form-input>
        </b-input-group>
    </p>
    <p>
        Start Date <input type="date" v-model="startDate"  class="startdate"/> End Date <input type="date" v-model="endDate" class="startdate" />
    </p>
    </b-modal>
  </div>
</template>
<script>
export default {
    name:'EnterInfo',
    data(){
        return{
            name:'',
            message:'',
            startDate:'',
            todos:[],
            endDate:'',
            errorMessage:''
        }
    },
     methods: {
        addTodoToHome(){
            console.log(this.formData)
            this.$emit('updateEventArray',this.formData)
        },
        handleOk(){
            if( this.name =="" && this.message ==="" ){
                 console.log(this.errorMessage)
                 return this.errorMessage = "All fields are required"
             }
            else{
                this.submitForm()
            }
            console.log("summit ok")
        },
        submitForm(){
         const formData = {
            name:this.name,
            message:this.message,
            // starts:this.startDate,
            // ends:this.endDate
        }
        this.todos=[formData]
        console.log(todos);
        // console.log(formData)
    }
  }
}
</script>
<style scoped>
.startdate {
    border-radius: 2rem;
}
.newagenda{
    background: transparent;
    border:1px solid orange;
    color: orange;
}
</style>