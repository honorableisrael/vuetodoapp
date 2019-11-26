<template>
    <div>
        <b-button v-b-modal.modal-1>Add New Agenda</b-button>
        <b-modal id="modal-1" title="New Activity">
        <p class="my-4"><b-input-group size="sm" prepend="Title" class="mb-2">
            <b-form-input aria-label="Small text input with custom switch"></b-form-input>
            <b-input-group-append is-text>
            </b-input-group-append>
            </b-input-group>
        </p>
        <p class="my-4">
            <b-input-group size="sm" prepend="Message" class="mb-2">
            <b-form-input aria-label="Small text input with custom switch"></b-form-input>
            <b-input-group-append is-text="false">
            </b-input-group-append>
            </b-input-group>
        </p>
        <p>
           Start Date <input type="date"  class="startdate"/> End Date <input type="date" class="startdate" />
        </p>
        </b-modal>
    </div>
</template>
<script>
export default {
    name:'EnterInfo',
     methods: {
    // showModal() {
    //   this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
    // },
    // hideModal() {
    //   this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow')
    // },
    // toggleModal() {
    //   this.$root.$emit('bv::toggle::modal', 'modal-1', '#btnToggle')
    // }
  }
}
</script>
<style scoped>
.startdate{
    border-radius: 2rem;
}
</style>