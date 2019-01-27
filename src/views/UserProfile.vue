<template>
  <v-container class="section1" fill-height fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6 md8>
        <pre id="typewriter">
        <span class="var-highlight">export default</span><span class="symbol-highlight">{</span>
            <span class="title-highlight">name:</span> <span class="string-highlight">'Joey Don'</span><span class="symbol-highlight">,</span>
            <span class="title-highlight">background:</span> <span class="string-highlight">'Full Stack Developer'</span><span class="symbol-highlight">,</span>
            <span class="title-highlight">location:</span> <span class="string-highlight">'Geelong'</span><span class="symbol-highlight">,</span>
            <span class="title-highlight">Front-end:</span><span class="symbol-highlight">[</span><span class="string-highlight">'Javascript'</span><span class="symbol-highlight">,</span>
                       <span class="string-highlight">'HTML5 / CSS3'</span><span class="symbol-highlight">,</span>
                       <span class="string-highlight">'VUE'</span><span class="symbol-highlight">]</span><span class="symbol-highlight">,</span>
            <span class="title-highlight">Back-end:</span><span class="symbol-highlight">[</span><span class="string-highlight">'PHP7'</span><span class="symbol-highlight">,</span>
                      <span class="string-highlight">'Oracle(SQL) / Firebase(NoSQL)'</span><span
  class="symbol-highlight"
>,</span>
                      <span class="string-highlight">'Zend'</span><span class="symbol-highlight">]</span><span class="symbol-highlight">,</span>
            <span class="symbol-highlight">}; </span>
          </pre>
      </v-flex>
      <!-- card
      <transition name="slide-fade">
        <v-flex
          v-if="mycard"
          xs12
          sm6
          md4
          pr-5

        >
          <material-card
            class="v-card-profile">
            <v-avatar
              slot="offset"
              class="mx-auto d-block"
              size="130"
            >
              <v-img
                :src="photo"
              />
            </v-avatar>
            <v-card-text class="text-xs-center">
              <h6 class="category text-gray font-weight-thin mb-3">Full Stack Developer</h6>
              <h4 class="card-title font-weight-light">Joey Don</h4>
              <p class="card-description font-weight-light">Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
              <v-btn
                color="success"
                round
                class="font-weight-light"
                @click="showDrawer()"
              >Compile</v-btn>
            </v-card-text>
          </material-card>
        </v-flex>
      </transition>
      -->
      <v-snackbar v-model="snackbar" :timeout="0" right bottom color="green darken-1" @click="test">
        <v-icon dark>mdi-arrow-right-drop-circle</v-icon>
        <span class="pr-5">Compile the codes</span>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    drawerVisible: {
      type: Boolean,
      default: null
    }
  },
  data: () => ({
    childVisible: true,
    photo: "./img/photo.jpg",
    mycard: false,
    snackbar: false
  }),
  mounted() {
    //setTimeout(this.showCard, 30000)
    //setTimeout(this.showDrawer, 30000)

    // 21000 is the best
    setTimeout(this.showSnackbar, 21000);
    this.$store.state.app.drawer = false;
    var typer = document.getElementById("typewriter");

    var typewriter = this.setupTypewriter(typer);

    typewriter.type();
  },
  methods: {
    test: function() {
      console.log("trigerd");
      this.$store.state.app.drawer = true;
      this.$router.push("./dashboard");
    },
    showSnackbar: function() {
      this.snackbar = true;
    },
    showCard: function() {
      this.mycard = true;
    },
    showDrawer: function() {
      // this.$store.dispatch('toggleDrawer')
      this.$store.commit("app/toggleDrawer");
    },

    setupTypewriter: function(t) {
      var HTML = t.innerHTML;

      t.innerHTML = "";

      var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 1,
        tempTypeSpeed = 0;

      var type = function() {
        if (writingTag === true) {
          tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
            tagOpen = false;
            writingTag = true;
          } else {
            tag = "";
            tagOpen = true;
            writingTag = true;
            tag += HTML[cursorPosition];
          }
        }
        if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
            tempTypeSpeed = 0;
          } else {
            tempTypeSpeed = Math.random() * typeSpeed + 50;
          }
          t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = Math.random() * typeSpeed + 50;
          writingTag = false;
          if (tagOpen) {
            var newSpan = document.createElement("span");
            t.appendChild(newSpan);
            newSpan.innerHTML = tag;
            tag = newSpan.firstChild;
          }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
        }
      };

      return {
        type: type
      };
    }
  }
};
</script>
<style lang="scss">
.var-highlight {
  color: rgb(197, 134, 192);
}

.string-highlight {
  color: rgb(206, 145, 120);
}

.title-highlight {
  color: rgb(156, 220, 254);
}

.symbol-highlight {
  color: rgb(255, 255, 255);
}

#typewriter {
  font-size: 2.8em;
  margin: 0;
  font-family: "Courier New";

  &:after {
    color: white;
    content: "|";
    animation: blink 500ms linear infinite alternate;
  }
}

@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.9s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.section1 {
  background-color: rgb(30, 30, 30);
  height: 100vh;
}

/*
.section1 {
    background-image: url("../img/sky.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-left: 10%;
    padding-right: 10%;
    height: 100vh;
}

.section1:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(90deg, rgba(49,61,65,0.6), rgba(49,61,65,0.6));
    opacity: 0.7;
}

.row{
    padding-top: 20px;
}
*/
</style>
