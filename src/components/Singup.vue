<template>
    <div class="Salon">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <div class="container col-6">
            <form @submit.prevent="buttonCreateUser">
                <label>Username</label>
                <input type="text" class="form-control" v-model="fullname">
                <br>
                <label for="inputEmail">Email</label>
                <input type="email" v-model="email" class="form-control">
                <br>
                <label for="inputPassword">Password</label>
                <input type="password" v-model="password" class="form-control">
                <br>
                <button type="submit" class="btn btn-primary">Sign up</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Singup',
  data() {
    return {
        email :'',
        password : '',
        fullname : '',
    }
  },
  mounted(){
      console.log('We are going to create an account for you, don\'t worry!');
  },
  methods : {

    buttonCreateUser: function(event) {
          axios.post('members',{
                      fullname :  this.fullname,
                      email :     this.email,
                      password : this.password
                    }).then(response => {
                      this.$store.commit('member',response.data)
                      this.$router.push('/Homepage');
                    })
                    .catch(error => console.log(error))
            }

  }
}
</script>

<style>

</style>
