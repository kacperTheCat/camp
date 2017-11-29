<template>
<form class="team-window">
  <h2>Users Overview</h2>
  <p>Team ID is {{ $route.params.teamId }}</p>
  <md-button class="md-raised" @click="goHome">Go Home</md-button>
</form>
</template>
<script>
export default {
  watch: {
    '$route' (to, from) {
      // alert(to.params.teamId); //teraz się wykonuje bo każemy sledzic komponent
    }
  },
  created() {
    // alert(this.$route.params.teamId)
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
//odpowiedz jak wrzucac dane do routera
//adres się zmienia ale funkcja wykonuje sie raz, przez cykl komponentu
</script>
<style media="screen">
  .team-window{
    background: #d4e137;
  }
  .md-raised{
    background: #fff;
  }
</style>
