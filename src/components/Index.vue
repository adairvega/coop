<template>
  <div class="Index">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <div class="container">
      <h1>Sing in</h1>
    </div>
    <br>
    <div class="container col-6">
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="email" v-model="email" class="form-control">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else. 😉</small>
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" v-model="password" class="form-control">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      email : '',
      password : ''
    }
  },
  mounted(){
      
  },
  methods : {
    login: function(event){
      axios.post('members/signin',{
        email : this.email,
        password : this.password
      }).then(response => {
        this.$router.push('/Homepage');
      })
      .catch(error => console.log(error))
    }
  }
}
</script>

<style>
</style>