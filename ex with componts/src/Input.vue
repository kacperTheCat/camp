<template>
<div>
  <p>{{msg}}</p>
  <input type="text" :value="msg" @input="changeMessage">
  <p>{{message}}</p>
</div>
</template>
<script>
export default {
  props: ['msg'],
  data() {
    return {
      message: ''
    }
  },methods: {
    changeMessage(event) {
      this.message = event.target.value;
      this.$emit('messageChange', this.message);
    }
  }
}
</script>

<style language="scss">
input{
  border: 2px solid red;
  font-family: roboto;
  }
  p{
    font-family: roboto;
  }

</style>
