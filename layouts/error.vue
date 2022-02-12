<template>
  <div>
    <h2>에러페이지</h2>
  </div>
</template>

<script>
export default {
  props: ['error'],
  created() {
    const isError = this.error.statusCode === 404

    this.$store.commit('setErrorStatus', isError)
  },
}
</script>

<style></style>
