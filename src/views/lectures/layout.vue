<template>
<v-container fluid grid-list-md>
    <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 xl2 v-for="i in 9" :key="i">
            <v-card color="red">
                <v-card-title primary-title>
                    {{$vuetify.breakpoint.name}}
                </v-card-title>
                <v-card-text>
                    {{card_text}}
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
export default {
  data () {
    return {
      card_text: 'Visit ten places on our planet that are undergoing the biggest changes today.'
    }
  }
}
</script>
<style>

</style>
