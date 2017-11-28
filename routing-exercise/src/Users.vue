<template>
<div>
  <h2>Users Overview</h2>
  <p>Team ID is {{ $route.params.teamId }}</p>
  <button @click="goHome">Go Home</button>
</div>
</template>
<script>
export default {
  watch: {
    '$route' (to, from) {
      alert(to.params.teamId);
    }
  },
  created() {
    alert(this.$route.params.teamId)
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
