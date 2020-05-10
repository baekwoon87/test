<template>
  <v-card
    class="mx-auto ma-4"
    max-width="400"
  >
    <v-toolbar color="primary" dark>
        <v-toolbar-title>here</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="white" icon>
            <v-icon>mdi-arrange-bring-forward</v-icon>
        </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text>
      {{card_text}}
    </v-card-text>

    <v-card-actions>
        <v-spacer></v-spacer>
         <v-btn color="primary" flat>click</v-btn>
         <v-btn color="primary" flat>click</v-btn>
    </v-card-actions>
  </v-card>
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
