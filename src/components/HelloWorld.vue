<template>
  <div class="hello">
    hello word
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  components: {
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      datas: 6
    }
  },
  methods: {
    submit() {
      var GameScore = Bmob.Object.extend('userData')
      var gameScore = new GameScore()
      gameScore.set('name', '1234')
      gameScore.save(null, {
        success: function(object) {
          alert('create object success, object id:' + object.id)
        },
        error: function(model, error) {
          alert('create object fail')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
