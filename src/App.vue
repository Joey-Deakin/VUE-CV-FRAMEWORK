<template>
  <v-app>
    <core-filter v-if="this.$store.state.app.drawer"/>

    <core-toolbar/>

    <core-drawer/>

    <core-view/>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
  methods: {}
};
</script>
<style lang="scss">
@import "@/styles/index.scss";

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
