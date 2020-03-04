<template>
  <div class="Homepage">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <img src="../assets/logoCoop.png" />
    <br />
    <h2>Welcome to coop</h2>
    <br />
    <br />
    <div class="container col-6">
      <div class="row">
        <div class="col-12">
          <button class="btn btn-success" @click="goToConversation">Go to conversations</button>
        </div>
      </div>
    </div>
    <br />
    <br />
    <hr />
    <h1>Active users</h1>
    <!-- List of members-->
    <div class="row justify-content-start">
      <div
        v-for="membre in $store.state.membres"
        v-bind:key="membre"
        class="container-6"
        style="padding: 1.5%;"
      >
        <div class=".col-6 .col-md-4">
          <div class="card text-center" style="width: 18rem; border-radius: 10px;">
            <br />
            <div class="text-center">
              <div v-if="Math.random() > 0.5">
                <img src="../assets/user.png" class="rounded" style="height: 100px; width: 100px;" />
              </div>
              <div v-else>
                <img src="../assets/user2.png" class="rounded" style="height: 100px; width: 100px;" />
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <b>{{membre.fullname}}</b>
              </h5>
              <div v-if="Math.random() > 0.5">
                <span class="badge badge-secondary">Old user</span>
              </div>
              <div v-else>
                <span class="badge badge-dark">New user</span>
              </div>
              <br />
              <label>Email</label>
              <input class="form-control" disabled :placeholder="membre.email" />
              <br />
              <label>Member since</label>
              <input class="form-control" disabled :placeholder="membre.created_at" />
              <br />
              <button class="btn btn-info" @click="showUserDetail(membre)">Show details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End List of members-->
  </div>
</template>

<script>
export default {
  name: "Homepage",
  mounted() {
    this.getMembersList()
  },
  methods: {
    showMembersList: function(event) {
      axios.get("members").then(response => {
        this.$store.commit("setMembres", response.data);
      });
    },
    getMembersList: function(event) {
      axios.get("members").then(response => {
        this.$store.commit("setMembres", response.data);
      });
    },
    goToConversation: function(event) {
      this.$router.push("/Conversation");
    },
    showUserDetail: function(membre) {
      this.$store.commit("setMembre", membre);
      this.$router.push("/DetailMember");
    }
  }
};
</script>

<style>
</style>