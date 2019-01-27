<template>
  <v-container fluid grid-list-xl fill-height>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-flex xs12>
          <material-card
            color="green"
            title="Education"
            text="Commited to web design and development"
          >
            <v-container fluid grid-list-xl fill-height>
              <v-layout row wrap>
                <v-flex xs12 lg3>2018-Present</v-flex>
                <v-flex xs12 lg9>
                  <span class="title">ACS Professional Year Program</span>
                  <br>
                  <span class="subheading">Australia Computer Society</span>
                  <br>A structured professional development program combining formal learning and workplace experience for IT fields.
                </v-flex>
                <v-flex xs12 lg3>2017-2018</v-flex>
                <v-flex xs12 lg9>
                  <span class="title">Advanced Diploma of Translating (High Distinction)</span>
                  <br>
                  <span class="subheading">English - Chinese both directions</span>
                  <br>Being accessible to another 1.4 billion potential clients, more technical documentations, and more researches.
                </v-flex>
                <v-flex xs12 lg3>2015-2017</v-flex>
                <v-flex xs12 lg9>
                  <span class="title">Bachelor of Information Technology (Distinction)</span>
                  <br>
                  <span class="subheading">Deakin University</span>
                  <br>Major in Programming.
                  Achieved all HDs in units related to Programming and Web Development.
                </v-flex>
              </v-layout>
            </v-container>
          </material-card>
        </v-flex>
        <v-flex xs12>
          <material-card
            color="green"
            title="Education"
            text="Commited to web design and development"
          >
            <v-container fluid grid-list-xl fill-height>
              <v-layout row wrap>
                <v-flex xs12 lg3>2018-Present</v-flex>
                <v-flex xs12 lg9>
                  <span class="title">ACS Professional Year Program</span>
                  <br>
                  <span class="subheading">Australia Computer Society</span>
                  <br>A structured professional development program combining formal learning and workplace experience for IT fields.
                </v-flex>
                <v-flex xs12 lg3>2017-2018</v-flex>
                <v-flex xs12 lg9>
                  <span class="title">Advanced Diploma of Translating (High Distinction)</span>
                  <br>
                  <span class="subheading">English - Chinese both directions</span>
                  <br>Being accessible to another 1.4 billion potential clients, more technical documentations, and more researches.
                </v-flex>
                <v-flex xs12 lg3>2015-2017</v-flex>
                <v-flex xs12 lg9>
                  <span class="title">Bachelor of Information Technology (Distinction)</span>
                  <br>
                  <span class="subheading">Deakin University</span>
                  <br>Major in Programming.
                  Achieved all HDs in units related to Programming and Web Development.
                </v-flex>
              </v-layout>
            </v-container>
          </material-card>
        </v-flex>
      </v-flex>

      <v-flex xs12 lg6>
        <v-flex xs12>
          <material-card
            color="green"
            title="Work Experience"
            text="Planing on a Master Degree of Data Science"
          >
            <v-timeline>
              <v-timeline-item>
                <v-avatar slot="icon">
                  <img src="http://i.pravatar.cc/64">
                </v-avatar>
                <span slot="opposite">Aug 2018 - Present</span>
                <v-card class="elevation-2">
                  <v-card-text>
                    <span class="title">Junior Web Application Officer</span>
                    <br>
                    <span class="subheading">Faculty of Health, Deakin University</span>
                    <br>
                    <br>

                    <p class="heading-1">
                      <span
                        class="subheading font-weight-medium grey--text text--darken-1"
                      >Technical Stack:</span>
                      <br>&bull; HTML5 / CSS3 / JavaScript
                      <br>&bull; Vue / Vuex / Vue Router
                      <br>&bull; PHP / Zend
                      <br>&bull; Oracle SQL / Firebase NoSQL
                      <br>&bull; Local SVN / Git
                      <br>&bull; Webpack Configuration / NPM
                      <br>&bull; Portman / Jira
                    </p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>

              <v-timeline-item>
                <v-avatar slot="icon">
                  <img src="http://i.pravatar.cc/64">
                </v-avatar>
                <span slot="opposite">Nov 2017 - Mar 2018</span>
                <v-card class="elevation-2">
                  <v-card-text>
                    <span class="title">Web Developer Internship</span>
                    <br>
                    <span class="subheading">CollabHero</span>
                    <br>
                    <br>
                    <p class="heading-1">
                      <span
                        class="subheading font-weight-medium grey--text text--darken-1"
                      >Technical Stack:</span>
                      <br>&bull; HTML5 / CSS3 / Bootstrap4
                      <br>&bull; PHP / Asp.Net
                      <br>&bull; React / React Router
                      <br>&bull; BitBucket Git
                      <br>&bull; Trello / Slack
                    </p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>

              <v-timeline-item>
                <v-avatar slot="icon">
                  <img src="http://i.pravatar.cc/64">
                </v-avatar>
                <span slot="opposite">Feb 2017 - Jun 2017</span>
                <v-card class="elevation-2">
                  <v-card-text>
                    <span class="title">Web Developer Contractor</span>
                    <br>
                    <span class="subheading">IGNI Restaurant</span>
                    <br>
                    <br>
                    <p class="heading-1">
                      <span
                        class="subheading font-weight-medium grey--text text--darken-1"
                      >Technical Stack:</span>
                      <br>&bull; HTML5 / CSS3 / Bootstrap4
                      <br>&bull; PHP / Asp.Net
                      <br>&bull; MongoDB NoSQL
                      <br>&bull; AWS S3
                    </p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </material-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),

  methods: {}
};
</script>
