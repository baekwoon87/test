 v-data-iterator has both a header and footer slot for adding extra content.

<template>
  <v-container fluid>
    <v-layout>
        <v-flex xs5>
            <v-text-field v-model="title" label="title"></v-text-field>
        </v-flex>
        <v-flex xs5>
            <v-text-field v-model="content" label="content"></v-text-field>
        </v-flex>
        <v-flex xs5>
            <v-btn color="success" @click="post">post</v-btn>
        </v-flex>
    </v-layout>

    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      hide-default-footer
    >

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
                <v-card-title><h4>{{ item.title }}</h4></v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    {{ item.content }}
                </v-card-text>
                <v-card-text>
                    {{ item.id }}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="put(item.id)">put</v-btn>
                    <v-btn @click="del(item.id)">del</v-btn>
                </v-card-actions>
                <!--
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Calories:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.calories }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Fat:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.fat }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Carbs:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.carbs }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Protein:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.protein }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Sodium:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.sodium }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Calcium:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.calcium }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Iron:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.iron }}</v-list-item-content>
                </v-list-item>
              </v-list>
              -->
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    itemsPerPage: 4,
    page: 1,
    items: [],
    title: '',
    content: ''
  }),
  mounted () {
    this.get()
  },
  methods: {
    async post () {
      // this.items.push({
      //   title: this.title, content: this.content
      // })
      const r = await this.$firebase.firestore().collection('notes').add({
        title: this.title, content: this.content
      })
      console.log(r)
      this.title = ''
      this.content = ''

      await this.get()
    },
    async get () {
      const snapshot = await this.$firebase.firestore().collection('notes').get()
      this.items = []
      // console.log(snapshot)
      snapshot.forEach(doc => {
        // console.log(v.data())
        // console.log(v.id)
        const { title, content } = doc.data()
        this.items.push({
          title, content, id: doc.id
        })

        // this.items.push(v.data())
      })
      // console.log(snapshot)
    },
    async put (id) {
      const r = await this.$firebase.firestore().collection('notes').doc(id).set({
        title: this.title, content: this.content
      })
      await this.get()
      console.log(r)
    },
    async del (id) {
      /*
      const jobskill = this.$firebase.firestore().collection('notes').doc(id)
      jobskill.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete()
        })
      })
      */
      console.log(id)
      const r = await this.$firebase.firestore().collection('notes').doc(id).delete()
      await this.get()
      console.log(r)
    }
  }
}
</script>
<style>

</style>
