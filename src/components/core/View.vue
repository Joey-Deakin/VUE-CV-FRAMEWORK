<template>
  <v-content>
    <div v-bind:style="title =='User Profile'? '' : styleBotPad">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
    <core-footer v-if="$route.name !== 'Maps'" />
  </v-content>
</template>

<script>
export default {
  data: () => ({
    title: null,
    styleBotPad: {'padding-bottom': '100px'}
  }),
  metaInfo () {
    return {
      title: 'Joey'
    }
  },
  watch: {
    '$route' (val) {
      this.title = val.name
    }
  },
}
</script>

<style>
#core-view {
  padding-bottom: 100px;
}
</style>
