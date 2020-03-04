<template>
  <div class="Conversation">
    <!-- BOOTSTRAP -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
    <!-- FIN BOOTSTRAP-->

    <br />
    <!-- Contains everything -->
    <div class="container">
      <!-- ROW Container of Conversation's List and Form to create a new one -->
      <div class="row">
        <h1>Welcome to Conversation hall!</h1>
      </div>
      <hr />
      <div class="row">
        <!--This DIV contains the list of conversations-->
        <div class="col col-8" style="background-color: #e9ecef; padding: 2%; border-radius: 10px;">
        
        <h1>Current conversations</h1>
        <hr />
          <!-- List of conversations-->
          <div class="row">
            <div v-for="channel in $store.state.channels" style="padding: 1.5%;">
              
                <div class="card text-center" style="border-radius: 10px;">
                  
                  <!-- Image -->
                  <div class="text-center">
                    <div v-if="Math.random() > 0.5">
                      <img
                        src="../assets/discussion.png"
                        class="rounded"
                        style="height: 100px; width: 150px;"
                      />
                    </div>
                    <div v-else>
                      <img
                        src="../assets/discussion2.png"
                        class="rounded"
                        style="height: 100px; width: 150px;"
                      />
                    </div>
                  </div>
                  <!-- End image -->

                  <div class="card-body">
                    <h5 class="card-title">
                      <b>{{channel.topic}}</b>
                    </h5>
                    <b>Last update :</b>
                    {{channel.modified_at}}
                    <br />
                    <br />
                    <label>Keyword</label>
                    <input class="form-control" disabled :placeholder="channel.label" />
                    <br />
                    <label>Topic</label>
                    <input class="form-control" disabled :placeholder="channel.topic" />
                    <br />
                    <button
                      type="submit"
                      @click="gotoMessages(channel, channel.id, $store.state.token)"
                      class="btn btn-info"
                    >Participate</button>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <!--This DIV contains the form to create a conversation-->
        <div class="col col-4">
          <div class="card text-center" style="border-radius: 10px; background-color: #e9ecef">
            <div class="text-center">
              <br />
              <img
                src="../assets/conversation.png"
                class="rounded"
                style="height: 150px; width: 150px;"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <b>Post a new subject</b>
              </h5>
              <form @submit.prevent="btnCreateConversation">
                <label>Keyword</label>
                <input type="text" class="form-control" v-model="label" />
                <br />
                <label>What's the topic?</label>
                <input type="text" class="form-control" v-model="topic" />
                <br />
                <button type="submit" class="btn btn-primary">Create conversation</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conversation",
  data() {
    return {
      label: "",
      topic: ""
    };
  },
  methods: {
    btnCreateConversation: function(event) {
      axios
        .post("channels", {
          label: this.label,
          topic: this.topic,
          token: this.$store.state.token
        })
        .then(response => {
          this.$store.commit("channel", response.data);
          this.$router.push("/Conversation");
        })
        .catch(error => console.log(error));
    },
    showConversationsList: function(event) {
      axios
        .get("channels", this.$store.state.token)
        .then(response => {
          this.$store.commit("setChannels", response.data);
        })
        .catch(error => console.log(error));
    },
    gotoMessages(channel, id_channel, token) {
      //Send mesagges data
      axios
        .get("channels/" + id_channel + "/posts", token)
        .then(response => {
          //Trying to save the messages
          this.$store.commit("setMessages", response);

          this.$store.commit("setChannel", channel);
          this.$router.push("/Messages");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>