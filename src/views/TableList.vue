<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card color="green" title="Simple Table" text="Here is a subtitle for this table">
          <v-data-table :headers="headers" :items="items" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex md12>
        <material-card
          color="green"
          flat
          full-width
          title="Table on Plain Background"
          text="Here is a subtitle for this table"
        >
          <v-data-table :headers="headers" :items="items.slice(0, 7)" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span class="subheading font-weight-light text--darken-3" v-text="header.text"/>
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex xs12 md8>
        <material-card color="green" title="Edit Profile" text="Complete your profile">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field label="Company (disabled)" disabled/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field class="purple-input" label="User Name"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Email Address" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="First Name" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Last Name" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field label="Adress" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="City" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Country" class="purple-input"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field class="purple-input" label="Postal Code" type="number"/>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="success">Update Profile</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex xs12 md4>
        <material-card class="v-card-profile">
          <v-avatar slot="offset" class="mx-auto d-block" size="130">
            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6>
            <h4 class="card-title font-weight-light">Alec Thompson</h4>
            <p
              class="card-description font-weight-light"
            >Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
            <v-btn color="success" round class="font-weight-light">Follow</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        sortable: false,
        text: "Name",
        value: "name"
      },
      {
        sortable: false,
        text: "Country",
        value: "country"
      },
      {
        sortable: false,
        text: "City",
        value: "city"
      },
      {
        sortable: false,
        text: "Salary",
        value: "salary",
        align: "right"
      }
    ],
    items: [
      {
        name: "Dakota Rice",
        country: "Niger",
        city: "Oud-Tunrhout",
        salary: "$35,738"
      },
      {
        name: "Minerva Hooper",
        country: "Curaçao",
        city: "Sinaai-Waas",
        salary: "$23,738"
      },
      {
        name: "Sage Rodriguez",
        country: "Netherlands",
        city: "Overland Park",
        salary: "$56,142"
      },
      {
        name: "Philip Chanley",
        country: "Korea, South",
        city: "Gloucester",
        salary: "$38,735"
      },
      {
        name: "Doris Greene",
        country: "Malawi",
        city: "Feldkirchen in Kārnten",
        salary: "$63,542"
      },
      {
        name: "Mason Porter",
        country: "Chile",
        city: "Gloucester",
        salary: "$78,615"
      }
    ]
  })
};
</script>
