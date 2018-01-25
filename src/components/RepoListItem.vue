<template>
  <a :href="repo.archive_url" target="_blank">{{repo.name}}</a>
</template>

<script>
export default {
  props: ['repo']
}
</script>
