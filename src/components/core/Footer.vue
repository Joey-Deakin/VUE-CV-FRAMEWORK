<template>
  <v-footer id="core-footer" absolute height="62" v-if="title!='User Profile'">
    <v-spacer/>
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
      Joey , made with
      <v-icon color="tertiary" size="17">mdi-heart</v-icon>for web development
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    title: null
  }),
  watch: {
    $route(val) {
      this.title = val.name;
    }
  }
};
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
