<template>
  <div>
    <v-alert type="info" :value="true" v-for="i in arras" v-bind:key="i">
      abcd {{ i }}
    </v-alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arras: [1, 2, 3, 4, 'www', 'xxxxx']
    }
  }
}
</script>
