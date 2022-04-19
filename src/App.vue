<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height" fluid>
        <button
          v-for="link in links"
          :key="link"
          class="text-capitalize inline-block ma-2"
        >
          {{ link }}
        </button>

        <v-spacer></v-spacer>

        <div class="d-flex">
          <base-control
            v-for="control in editorControl"
            :key="control.icon"
            :icon="control.icon"
          >
          </base-control>
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <!-- <v-btn-toggle v-model="toggle_exclusive">
        <v-btn text> <v-icon left>mdi-pencil-outline</v-icon> Write</v-btn>

        <v-btn text> <v-icon left>mdi-eye-outline</v-icon> Preview </v-btn>

        <v-btn text>
          Guide <v-icon left>mdi-format-align-right</v-icon> Preview
        </v-btn>
      </v-btn-toggle> -->
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title> Recently Opened </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="my-2"></v-divider>

                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title> Article {{ n }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <textarea
              min-height="75vh"
              rounded="lg"
              name=""
              id=""
              placeholder="write here ..."
              v-model="rawBlob"
            ></textarea>
            <v-sheet min-height="75vh" rounded="lg" class="d-none">
              <!--   <v-textarea
                name="input-7-4"
                outlined
                placeholder="Write here ..."
                style=""
              ></v-textarea> -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!------------fab------------->
      <v-btn
        class="mx-2"
        fab
        dark
        large
        fixed
        right
        bottom
        style="right: 30px; bottom: 30px"
      >
        <v-icon dark> mdi-eye-outline </v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
import BaseControl from "./components/BaseControl.vue";
// import Controls from './components/Controls.vue';
export default {
  components: { BaseControl },
  // components: { Controls },
  data: () => ({
    links: ["File", "Edit", "Export", "Settings", "Help"],
    editorControl: [
      { icon: "bold" },
      { icon: "italic-alt" },
      { icon: "heading" },
      { icon: "underline" },
      { icon: "strike-through" },
      { icon: "bookmark" },
      { icon: "superscript" },
      { icon: "subscript" },
      { icon: "table" },
      { icon: "link" },
      { icon: "code-alt" },
      { icon: "image" },
      { icon: "align-right" },
      { icon: "align-center" },
      { icon: "align-left" },
      { icon: "quote-left" },
      { icon: "quote-right" },
      { icon: "listine-dots" },
      { icon: "listing-box" },
      { icon: "listing-number" },
    ],
    rawBlob: null,
  }),
};
</script>


<style scoped>
textarea {
  width: 100%;
  height: 72vh;
  /* overflow-y: scroll; */
  padding: 17.5px;
  font-size: 1.2rem;
  border: none;
  outline: none;
  background: #fff;
  border-radius: 12px;
}

textarea::placeholder {
  text-transform: capitalize;
  color: #707070;
}

svg {
  max-width: 15px;
}
</style>