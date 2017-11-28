<template>
<div>
  <h1>type your message!</h1>
  <app-input :msg="message" @messageChange="message = $event"></app-input>
</div>
</template>
<script>
import Input from './Input.vue';

export default {
  data(){
  return {
    message: 'This is a great Message!'
  }
},
components: {
  'app-input': Input
}
}
</script>
