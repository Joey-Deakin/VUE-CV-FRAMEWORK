<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex md12 sm12 lg4>
        <material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="red"
          type="Line"
        >
          <h4 class="title font-weight-light">Full Stack skills</h4>
          <p class="category d-inline-flex font-weight-light">
            <v-icon color="green" small>mdi-arrow-up</v-icon>
            <span class="green--text">224%</span>&nbsp;
            increase in 3 years. I am commited to Web Development.
          </p>

          <template slot="actions">
            <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light">updated 2 months ago</span>
          </template>
        </material-chart-card>
      </v-flex>

      <v-flex md12 sm12 lg4>
        <material-chart-card
          :data="frontChart.data"
          :options="frontChart.options"
          :responsive-options="frontChart.responsiveOptions"
          color="info"
          type="Bar"
        >
          <h4 class="title font-weight-light">Front-end Skillset</h4>
          <p
            class="category d-inline-flex font-weight-light"
          >I specialise in applications written in Vue. I am with knowledge in many JS ecosystem, by using many libraries like React, Redux, Vue, Vuex, Vuetify, Axios, Moment, jQuery, jsPDF and whatever else was needed.</p>

          <template slot="actions">
            <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light">updated 1 month ago</span>
          </template>
        </material-chart-card>
      </v-flex>

      <v-flex md12 sm12 lg4>
        <material-chart-card
          :data="backChart.data"
          :options="backChart.options"
          :responsive-options="backChart.responsiveOptions"
          color="green"
          type="Bar"
        >
          <h4 class="title font-weight-light">Back-end Skillset</h4>
          <p
            class="category d-inline-flex font-weight-light"
          >In back-end development, my current stack involves raw PHP and OracleSQL, and alternatively Firebase or ZEND framework. I value the development speed, performance and reliability at first.</p>

          <template slot="actions">
            <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
            <span class="caption grey--text font-weight-light">updated 1 month ago</span>
          </template>
        </material-chart-card>
      </v-flex>

      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="green"
          icon="mdi-store"
          title="Individual Projects"
          value="9"
          sub-icon="mdi-calendar"
          sub-text="Last 3 Years"
        />
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="orange"
          icon="mdi-content-copy"
          title="Used Front-end Frameworks"
          value="2/3"
          small-value
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="Not a fan of Angular.js!"
          sub-text-color="text-primary"
        />
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="red"
          icon="mdi-information-outline"
          title="Fixed Issues"
          value="75"
          sub-icon="mdi-tag"
          sub-text="Tracked from Github"
        />
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="info"
          icon="mdi-account-supervisor"
          title="Clients"
          value="+12"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex md12 lg6>
        <material-card
          color="orange"
          title="My Favourite JavaScript Libraries Stats"
          text="Based on personal preference, 2018"
        >
          <v-data-table :headers="headers" :items="items" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span class="font-weight-light text-warning text--darken-3" v-text="header.text"/>
            </template>
            <template slot="items" slot-scope="{ index, item }">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
              <td class="text-xs-right">{{ item.country }}</td>
              <td class="text-xs-right">{{ item.city }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex md12 lg6>
        <material-card class="card-tabs" color="green">
          <v-flex slot="header">
            <v-tabs v-model="tabs" color="transparent" slider-color="white">
              <span class="subheading font-weight-light mr-3" style="align-self: center">Tasks:</span>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-bug</v-icon>Self-learning
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-code-tags</v-icon>Website
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">mdi-cloud</v-icon>Server
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item v-for="n in 3" :key="n">
              <v-list three-line>
                <v-list-tile @click="complete(0)">
                  <v-list-tile-action>
                    <v-checkbox :value="list[0]" color="green"/>
                  </v-list-tile-action>
                  <v-list-tile-title>A resuable framework for Deakin Faculty of Health Logbook</v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip top content-class="top">
                      <v-btn slot="activator" class="v-btn--simple" color="success" icon>
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip top content-class="top">
                      <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(1)">
                  <v-list-tile-action>
                    <v-checkbox :value="list[1]" color="success"/>
                  </v-list-tile-action>
                  <v-list-tile-title>Migrate my personal projects to firebase</v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip top content-class="top">
                      <v-btn slot="activator" class="v-btn--simple" color="success" icon>
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip top content-class="top">
                      <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(2)">
                  <v-list-tile-action>
                    <v-checkbox :value="list[2]" color="success"/>
                  </v-list-tile-action>
                  <v-list-tile-title>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit</v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip top content-class="top">
                      <v-btn slot="activator" class="v-btn--simple" color="success" icon>
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip top content-class="top">
                      <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dailySalesChart: {
        data: {
          labels: ["2014", "2015", "2016", "2017", "2018"],
          series: [[3, 4, 7, 11, 16]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 30, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },

      frontChart: {
        data: {
          labels: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive",
            "Vue/React",
            "jQuery",
            "Webpack"
          ],
          series: [[90, 85, 85, 80, 80, 78, 75]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 40,
          high: 100,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
      backChart: {
        data: {
          labels: [
            "PHP",
            "RESTful API",
            "OracleSQL",
            "Firebase",
            "MongoDB",
            "ZEND",
            "Node.js"
          ],
          series: [[90, 90, 85, 80, 80, 78, 75]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 40,
          high: 100,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
      headers: [
        {
          sortable: false,
          text: "ID",
          value: "id"
        },
        {
          sortable: false,
          text: "Name",
          value: "name"
        },
        {
          sortable: false,
          text: "GitHub Stars",
          value: "salary",
          align: "right"
        },
        {
          sortable: false,
          text: "Description",
          value: "country",
          align: "right"
        },
        {
          sortable: false,
          text: "Website",
          value: "city",
          align: "right"
        }
      ],
      items: [
        {
          name: "Vue.js",
          country: "Progressive, incrementally-adoptable",
          city: "github.com/vuejs/vue",
          salary: "126,384"
        },
        {
          name: "Vuetify.js",
          country: "Material Design Component Framework",
          city: "vuetifyjs.com/en",
          salary: "16,738"
        },
        {
          name: "Axios.js",
          country: "Promise based HTTP for the browser and node.js",
          city: "github.com/axios/axios",
          salary: "54,265"
        },
        {
          name: "Node.js",
          country: "JavaScript runtime",
          city: "nodejs.org/en",
          salary: "57,735"
        },
        {
          name: "Moment.js",
          country: "Parse and manipulate dates in JavaScript",
          city: "momentjs.com",
          salary: "39,981"
        }
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    };
  },
  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    }
  }
};
</script>
