const { createApp } = Vue  //creo un objeto VUE llamdo createApp
createApp({
  data() {
    return {
      url: 'https://api.sampleapis.com/recipes/recipes',
      recipes: [], // array para mostrar                                                                    /*cuisines:[],       cursos: [],       calories: 1000,       cuisine: "All",      curso: "All"       */
    }
  },
  methods: {
     fetchData(url) {  // necesite un async y await porque seguia de largo y no me cargaba el array recipes ni las listas desplegables
      fetch(url) 
        .then(response => response.json()) 
        .then(data => {
          console.log(data)
          this.recipes=data
        })
        .catch(error=>alert("Ups... se produjo un error: "+ error))
    },
  },
  created() {
  this.fetchData(this.url)                                                       //   
  }
}).mount('#app')




