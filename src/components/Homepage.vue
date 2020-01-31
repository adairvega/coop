<template>
  <div class="Homepage">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <h2>Welcome to coop</h2><br>
    <div class="container col-6">
      <div class="row">
        <div class="col-5">
          <button class="btn btn-primary" @click="showMembersList">Show members</button>
        </div>
        <div class="col-7">
          <button class="btn btn-success" @click="goToConversation">Go to conversations</button>
        </div>
      </div>
    </div>
    <div v-for="membre in $store.state.membres" v-bind:key="membre" class="container-6" style="margin:2%;">
      <br>
        <h7>Username: </h7><span>{{membre.fullname}}</span><br>
        <h7>Email: </h7><span>{{membre.email}}</span><br>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  methods:{
    showMembersList: function(event){
      axios.get('members').then(response => {
        this.$store.commit('setMembres',response.data);
      })
    },
    goToConversation: function(event){
      this.$router.push('/Conversation');
    }
  }
}
</script>

<style>

</style>