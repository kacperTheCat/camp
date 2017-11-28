<template>
  <div id="app">
    <h1>Let's go somewhere!</h1>
    <p>pick the link bellow</p>
    <router-link to="/">Home</router-link>
    <router-link to="/Users/1">User 1</router-link>
    <router-link to="/Users/2">Users 2</router-link>
    <router-link to="/Users/3">Users 3</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}

</script>

<style lang="scss">
#app{
  font-family: roboto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #333;
}
a{
  text-decoration: none;
  color: #000;
  font-weight: 900;
  padding: .3rem;
  border-bottom: 1px solid #27eb75;
}
h2{
  border-bottom: 3px double #27eb75;
}
</style>
