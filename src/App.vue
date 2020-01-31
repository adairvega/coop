<template>
  <div id="app">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Login</router-link></li>
        <li class="breadcrumb-item"><router-link to="/Homepage">Accueil</router-link></li>
        <li class="breadcrumb-item"><router-link to="/Singup">Sign Up</router-link></li>
        <li class="breadcrumb-item"><router-link to="/Logout">Sign Out</router-link></li>
      </ol>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  },

  mounted() {
    axios.get('ping').then(() => {
      if (!this.membreConnecte) {
        this.$router.push('/Homepage');
      }
    }).catch(() => {
      console.log('Membre connecté')
    })
  },

  computed : {
    membreConnecte() {
      return this.$store.state.membre ? true : false;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
