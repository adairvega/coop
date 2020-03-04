<template>
  <div class="DetailMember">
    <!-- BOOTSTRAP -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <!-- FIN BOOTSTRAP -->
    <br />
    <div class="container">
      <h1>Welcome to user details</h1>
      <hr />
      <div class="row">
        <!-- User messages -->
        <div class="col col-8">
          <h1>Messages of {{$store.state.membre.fullname}}</h1>
          <!-- Alert in messages-->
          <div class="row">
            <div class="col col-1"></div>
            <div class="alert alert-info col-10" role="alert">Click over the message to go in it!</div>
            <div class="col col-1"></div>
          </div>
          <!-- End alert message-->
          
          <!-- User messages -->
          <div class="card text-center" style="width: 100%;">
            <div class="card-body" style="background-color: #e9ecef">
              <div v-for="msg in $store.state.messages.data" class="row">
                
                <div class="col col-3"></div>
                <div class="col col-6">
                  <div v-if="msg.member_id == $store.state.membre.id">
                    <div
                      class="alert alert-primary"
                      style="border: 2px solid #3f9563;
                      border-radius: 50px 5px 50px 50px;
                      color: white;
                      background-color: #3f9563;"
                    >
                      <div v-for="owner in $store.state.membres" v-bind:key="owner">
                        <div v-if="owner.id == msg.member_id">
                          <h5
                            @click="gotoMessage(msg.channel_id, $store.state.token)"
                            style="cursor: pointer;"
                          >{{msg.message}}</h5>
                        </div>
                        <div v-if="owner.id == msg.member_id && (owner.id == msg.member_id) == 0">
                          <div class="alert alert-dark col-12" role="alert">Not messages yet!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col col-3"></div>
              </div>
            </div>
          </div>
          <!-- End user messages-->
        </div>

        <div class="col col-4">
          <!-- Member info-->
          <div class="card text-center">
            <div class="text-center">
              <div v-if="Math.random() > 0.5">
                <img src="../assets/user.png" class="rounded" style="height: 200px; width: 200px;" />
              </div>
              <div v-else>
                <img src="../assets/user2.png" class="rounded" style="height: 200px; width: 200px;" />
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">
                <b>{{$store.state.membre.fullname}}</b>
              </h3>
              <br />
              <label>User id</label>
              <textarea class="form-control" disabled :placeholder="$store.state.membre.id" />
              <br />
              <label>Email</label>
              <input class="form-control" disabled :placeholder="$store.state.membre.email" />
              <br />
              <label>Member since</label>
              <input class="form-control" disabled :placeholder="$store.state.membre.created_at" />
              <br />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-6">
              <button class="btn btn-success" @click="returnHome">Return to home</button>
            </div>
            <div class="col-6">
              <button
                class="btn btn-dark"
                @click="deleteUser($store.state.membre.id, $store.state.token)"
              >Delete user</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <!-- Main Div -->
  </div>
</template>

<script>
export default {
  name: "DetailMember",
  methods: {
    returnHome() {
      this.$router.push("/Homepage");
    },
    deleteUser: function(id, token) {
      axios
        .delete("members/" + id, token)
        .then(response => {
          this.$router.push("/Homepage");
        })
        .catch(error => console.log(error));
    },
    gotoMessage: function(id_channel, token) {
      //Send mesagges data
      axios
        .get("channels/" + id_channel + "/posts", token)
        .then(response => {
          //Trying to save the messages
          this.$store.commit("setMessages", response);

          this.$router.push("/Messages");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>