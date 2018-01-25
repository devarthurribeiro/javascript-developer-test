<template>
  <div>
    <div v-if="Users.profile.id">
      <img :src="Users.profile.avatar_url" class="avatar" alt="avatar">
      <h2>{{Users.profile.login}}</h2>
      <repo-list :repos="Users.repos" />
    </div>
    <div v-else>Usuário não encontrado!</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import RepoList from '../components/RepoList'

export default {
  created () {
    const { username } = this.$route.params
    username !== '' ? this.getUserProfileByUsername(username) : alert('Nome de usuário inválido')
  },
  methods: {
    ...mapActions(['getUserProfileByUsername'])
  },
  components: {
    RepoList
  },
  computed: {
    ...mapState(['Users'])
  }
}
</script>

<style>
  .avatar {
    width: 220px;
    height: auto;
    border-radius: 50%;
  }
  li {
    margin: 10px;
  }
</style>
