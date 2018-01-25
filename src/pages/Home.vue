<template>
  <div>
    <h1>Find user by Username Github</h1>
    <div v-show="$route.name === 'Home'">
      <input v-model="username" placeholder="Github Username" type="text">
      <button @click="find(username)" :disabled="!username">Search</button>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  data: () => ({
    username: ''
  }),
  methods: {
    find (username) {
      this.$router.push(`/profile/${username}`)
    }
  }
}
</script>
