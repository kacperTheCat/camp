<template>
<div id="app">
  <h1>Let's go somewhere!</h1>
  <p>pick the link bellow</p>
  <nav>
    <!-- <router-link to="/">Home</router-link>
      <router-link to="/Users/1">User 1</router-link>
      <router-link to="/Users/2">Users 2</router-link>
      <router-link to="/Users/3">Users 3</router-link> -->
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
      <md-tab md-label="user 1" to="/Users/1"></md-tab>
      <md-tab md-label="user 2" to="/Users/2"></md-tab>
      <md-tab md-label="user 3" to="/Users/3"></md-tab>
    </md-tabs>
  </nav>

  <hr>
  <router-view class="user-field"></router-view>
</div>
</template>

<script>
export default {
  name: 'TabRouter',
  name: 'app',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

#app {
    // font-family: roboto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // color: #333;
    // background: #d4e137;
    height: 100vh;
}
nav {
    // background: #9e9d24;
}
a {
    // text-decoration: none;
    // color: #000;
    font-weight: 900;
    padding: 0.3rem;

}

.user-field {
    width: 30vw;
    height: 30vh;
}

</style>
