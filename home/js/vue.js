const app = Vue.createApp({
  data() {
    return {
      message: "Happy New Year WEBPROG MI231!",
      vueClass: "pinkBG"
    };
  }
});

app.mount('#app');

const app2 = Vue.createApp({
  data() {
    return {
      itemName: null,
      itemNumber: null,
      itemImportant: false,
      shoppingList: [
        { name: 'Tomatoes', number: 5, important: false }
      ]
    }
  },
  methods: {
    addItem(){
      let item = {
        name: this.itemName,
        number: this.itemNumber,
        important: this.itemImportant
      }
      this.shoppingList.push(item)
      this.itemName = null
      this.itemNumber = null  
      this.itemImportant = false
    }
  }
})
app2.mount('#app2')