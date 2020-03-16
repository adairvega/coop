<template>
  <div class="Messages">
    <!-- BOOTSTRAP -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <!-- FIN BOOTSTRAP-->

    <h1>{{$store.state.channel.topic}}</h1>
    <br />
    <h5>
      {{$store.state.channel.label}}
      <br />
    </h5>
    <br />
    <b>Last update :</b>
    <h5>
      <span class="badge badge-info">{{$store.state.channel.modified_at}}</span>
    </h5>
    <hr />

    <br />
    <div class="container">
      <div class="card text-center" style="width: 100%;">
        <div class="card-body" style="background-color: #e9ecef">
          <hr />
          
          <div v-if="$store.state.messages.data.length === 0">
            <div class="alert alert-dark col-12" role="alert">Not messages yet!</div>
          </div>
          

          <div v-for="msg in $store.state.messages.data" class="row">
            <div class="col col-4">
              <br><br>
              <div class="row" v-if="msg.member_id == $store.state.membre.id">
                <div class="col col-8">
                  <textarea id="editedMessage" class="form-control" v-model="messageEditing" />
                </div>
                <div class="col col-2">
                  <button class="btn btn-warning" @click="editMsg(msg.channel_id, msg.id, msg.message)">
                    <img src="../assets/edit.svg" style="width: 20px;" />
                  </button>
                </div>
                <div class="col col-2">
                  <button class="btn btn-danger" @click="deleteMsg(msg.channel_id, msg.id)">
                    <img src="../assets/delete.svg" style="width: 15px;" />
                  </button>
                </div>
              </div>
            </div>
            <div class="col col-4">
              <div
                class="alert alert-primary"
                v-if="msg.member_id == $store.state.membre.id"
                style="border: 2px solid #3f9563;
                     border-radius: 50px 50px 5px 50px;
                     color: white;
                     background-color: #3f9563;"
              >
                <div v-for="owner in $store.state.membres">
                  <div v-if="owner.id == msg.member_id">
                    <h6>
                      <kbd
                        @click="gotoUser(owner)"
                        style="cursor: pointer; background-color: #3f9563;"
                      >{{owner.fullname}}</kbd> says :
                    </h6>
                    <h3>
                      <strong>{{msg.message}}</strong>
                    </h3>
                  </div>
                </div>
              </div>
              <div v-else>
                <div
                  class="alert alert-primary"
                  style="border: 2px solid #004085;
                     border-radius: 50px 50px 50px 5px;
                     color: white;
                     background-color: #004085;"
                  role="alert"
                >
                  <div v-for="owner in $store.state.membres">
                    <div v-if="owner.id == msg.member_id">
                      <h6>
                        <kbd
                          @click="gotoUser(owner)"
                          style="cursor: pointer; background-color: #004085;"
                        >{{owner.fullname}}</kbd> says :
                      </h6>
                      <h3>
                        <strong>{{msg.message}}</strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end of DIV if-else -->
            </div>
            <div class="col col-4" style="text-align: center;">
              <br><br>
              <h6>{{msg.created_at}}</h6>
            </div>
          </div>

          <div class="row">
            <div class="col col-10">
              <textarea id="newMessage" class="form-control" v-model="message" />
            </div>
            <div class="col col-1">
              <button
                @click="newMessage($store.state.channel.id, $store.state.membre.id)"
                class="btn btn-info"
              >Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-6">
          <button class="btn btn-success" @click="returnToHall">Return to conversation hall</button>
        </div>
        <div class="col-6">
          <button class="btn btn-dark">Delete conversation</button>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "Messages",
  data() {
    return {
      message: "",
      messageEditing: ""
    };
  },
  methods: {
    returnToHall: function(event) {
      this.$router.push("/Conversation");
    },

    newMessage: function(channel_id, membre_id) {
      axios
        .post("channels/" + channel_id + "/posts", {
          member_id: membre_id,
          message: this.message,
          token: this.$store.state.token
        })
        .then(response => {
          this.message = "";
          axios
            .get("channels/" + channel_id + "/posts", this.$store.state.token)
            .then(response => {
              //Trying to save the messages
              this.$store.commit("setMessages", response);

              this.$store.commit("setChannel", channel);
              this.$router.push("/Messages");
            })
            .catch(error => console.log(error));
        });
    },

    gotoUser: function(membre) {
      this.$store.commit("setMembre", membre);
      this.$router.push("/DetailMember");
    },

    editMsg: function(channel_id, idmsg, messageBeforeEdit) {
      axios
        .put("channels/" + channel_id + "/posts/" + idmsg, {
          message: this.messageEditing,
          token: this.$store.state.token
        })
        .then(response => {
          this.messageEditing = "";
          axios
            .get("channels/" + channel_id + "/posts", this.$store.state.token)
            .then(response => {
              //Trying to save the messages
              this.$store.commit("setMessages", response);

              this.$store.commit("setChannel", channel);
              this.$router.push("/Messages");
            })
            .catch(error => console.log(error));
        });
    },
    deleteMsg: function(channel_id, idmsg) {
      axios
      .delete("channels/"+channel_id+"/posts/"+idmsg, this.$store.state.token)
      .then(response => {
          this.$router.push("/Messages");
        })
        .catch(error => console.log(error));
      
    }
  }
};
</script>