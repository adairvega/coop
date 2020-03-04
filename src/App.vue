<template>
  <div id="app">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/Homepage"><img src="./assets/logoCoop.png" style="width: 45px;"/></router-link></li>
        <li class="breadcrumb-item"><router-link to="/Singup">Sign Up</router-link></li>
        <li class="breadcrumb-item" @click="logout"><router-link to="/">Sign Out</router-link></li>        
      </ol>
      <div class="col col-4"><button class="switch" id="switch">
            <span><img src="./assets/dom.svg" style="width: 20px;"/></span>
            <span><img src="./assets/luna.svg" style="width: 20px;"/></span>
          </button>
      </div>
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
  methods: {
    logout: function(event) {
            axios.delete('members/signout', this.$store.state.token)
        }
  },
  mounted() {
    axios.get('ping').then(() => {
      if (!this.membreConnecte) {
        this.$router.push('/');
      }
    }).catch(() => {
      console.log('Membre connecté')
    })

    const btnSwicth = document.querySelector('#switch');

    btnSwicth.addEventListener('click', ()=>{
      document.body.classList.toggle('dark');
      btnSwicth.classList.toggle('active');
    });
  },

  computed : {
    membreConnecte() {
      return this.$store.state.membre ? true : false;
    }
  },
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

body.dark {
  background-color: #2c3e50;
}

body.dark div.card{
  background-color: #adb8c2;
}

body.dark ol{
  background-color: #adb8c2;
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

body {
  background-color: #f8f9fa;
}

h1 {
  color : #3f9563;
}

.switch {
  background-color: #343D5B;
  border-radius: 1000px;
  border: none;
  position: relative;
  cursor: pointer;
  display: flex;
  outline: none;
}

.switch::after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  background: #f1f1ff;
  top: 0;
  left: 0;
  right: unset;
  border-radius: 100px;
  transition: .3s ease all;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0, .2);
}

.switch.active{
  background: orange;
}

.switch.active::after{
  right: 0;
  left: unset;
}

.switch span {
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: block;
  background: none;
  color: #fff;
}
</style>
