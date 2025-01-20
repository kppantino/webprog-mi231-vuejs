const app3 = Vue.createApp({
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
  app3.mount('#app3')