<template>
  <div>
    <b-button v-b-modal.modal-1>
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
            endDate:'',
            errorMessage:''
        }
    },
     methods: {
         validate(){  //validate form data
                         
         },
        handleOk(){
            if( this.name =="" && this.message ==="" ){
                 console.log(this.errorMessage)
                 return this.errorMessage = "All fields are required"
             }
            // if(this.errorMessage ===''){
            //     return ''
            // }
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
        console.log(formData)
    }
  }
}
</script>
<style scoped>
.startdate{
    border-radius: 2rem;
}
</style>