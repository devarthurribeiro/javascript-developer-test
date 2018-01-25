<template>
  <ul class="repo-list">
    <li v-for="repo in repos" :key="repo.id">
      <repo-list-item :repo="repo" />
    </li>
  </ul>
</template>

<script>
import RepoListItem from './RepoListItem'

export default {
  props: ['repos'],
  components: {
    RepoListItem
  }
}
</script>
