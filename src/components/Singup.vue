<template>
    <div class="Salon">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <div class="container col-6">
            <form>
                
                <label>Username</label>
                <input type="text" class="form-control" id="username">
                <br>
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="email">
                <br>                    
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="psw">
                <br>
                <label for="inputRepeatPassword">Repeat password</label>
                <input type="password" class="form-control" id="rpsw">
                    
                <br>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Singup',
  mounted(){
      console.log('We are going to create an account for you, don\'t worry!');
  },
  methods : {
    
  }
}
</script>

<style>

</style>

