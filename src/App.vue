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

        <v-responsive max-width="260">
          <!-----------heading------------>
          <button>
            <svg class="" viewBox="0 0 512 512">
              <path
                d="M432 80v352h32a16 16 0 0116 16v16a16 16 0 01-16 16H336a16 16 0 01-16-16v-16a16 16 0 0116-16h32V280H144v152h32a16 16 0 0116 16v16a16 16 0 01-16 16H48a16 16 0 01-16-16v-16a16 16 0 0116-16h32V80H48a16 16 0 01-16-16V48a16 16 0 0116-16h128a16 16 0 0116 16v16a16 16 0 01-16 16h-32v152h224V80h-32a16 16 0 01-16-16V48a16 16 0 0116-16h128a16 16 0 0116 16v16a16 16 0 01-16 16z"
              ></path>
            </svg>
          </button>
          <!----------bold----------->
          <button
            class="button-transparent small tooltip-handle tooltip-left-aligned"
            data-title="Bold text (Ctrl / Cmd + b)"
            data-command="BOLD"
          >
            <svg
              data-command="BOLD"
              class="w-4 h-4 fill-current"
              viewBox="0 0 384 512"
            >
              <path
                d="M314.52 238.78A119.76 119.76 0 00232 32H48a16 16 0 00-16 16v16a16 16 0 0016 16h16v352H48a16 16 0 00-16 16v16a16 16 0 0016 16h208a128 128 0 00128-128c0-49.49-28.38-91.92-69.48-113.22zM128 80h88a72 72 0 010 144h-88zm112 352H128V272h112a80 80 0 010 160z"
              ></path>
            </svg>
          </button>
          <!-------itallic--------------->

          <button
            class="button-transparent small tooltip-handle tooltip-left-aligned"
            data-title="Italic text (Ctrl / Cmd + i)"
            data-command="ITALIC"
          >
            <svg
              data-command="ITALIC"
              class="w-4 h-4 fill-current"
              viewBox="0 0 320 512"
            >
              <path
                d="M320 48v16a16 16 0 01-16 16h-67l-88 352h59a16 16 0 0116 16v16a16 16 0 01-16 16H16a16 16 0 01-16-16v-16a16 16 0 0116-16h67l88-352h-59a16 16 0 01-16-16V48a16 16 0 0116-16h192a16 16 0 0116 16z"
              ></path>
            </svg>
          </button>

          <button
            class="button-transparent small tooltip-handle tooltip-left-aligned"
            data-title="Block quote"
            data-command="QUOTE"
          >
            <svg
              data-command="QUOTE"
              class="w-4 h-4 fill-current"
              viewBox="0 0 576 512"
            >
              <path
                d="M504 224h-56v-8c0-22.1 17.9-40 40-40h8c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-8c-101.5 0-184 82.5-184 184v192c0 39.7 32.3 72 72 72h128c39.7 0 72-32.3 72-72V296c0-39.7-32.3-72-72-72zm24 184c0 13.2-10.8 24-24 24H376c-13.2 0-24-10.8-24-24V216c0-75 61-136 136-136h8v48h-8c-48.5 0-88 39.5-88 88v56h104c13.2 0 24 10.8 24 24v112zM200 224h-56v-8c0-22.1 17.9-40 40-40h8c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-8C82.5 32 0 114.5 0 216v192c0 39.7 32.3 72 72 72h128c39.7 0 72-32.3 72-72V296c0-39.7-32.3-72-72-72zm24 184c0 13.2-10.8 24-24 24H72c-13.2 0-24-10.8-24-24V216c0-75 61-136 136-136h8v48h-8c-48.5 0-88 39.5-88 88v56h104c13.2 0 24 10.8 24 24v112z"
              ></path>
            </svg>
          </button>


          <button
      class="button-transparent small tooltip-handle tooltip-left-aligned"
      data-title="Code snippet"
      data-command="CODE"
    >
      <svg
        data-command="CODE"
        class="w-4 h-4 fill-current"
        viewBox="0 0 576 512"
      >
        <path
          d="M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z"
        ></path>
      </svg></button
    >

    <button
      class="button-transparent small tooltip-handle tooltip-left-aligned"
      data-title="Link (Ctrl / Cmd + k)"
      data-command="LINK"
    >
      <svg
        data-command="LINK"
        class="w-4 h-4 fill-current"
        viewBox="0 0 512 512"
      >
        <path
          d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 004.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 00-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 01-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 014.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"
        ></path>
      </svg></button
    >


    <button
      class="button-transparent small tooltip-handle tooltip-left-aligned"
      data-title="Embed links"
      data-command="EMBED"
    >
      <svg
        data-command="EMBED"
        class="w-4 h-4 fill-current"
        viewBox="0 0 576 512"
      >
        <path
          d="M208 32h-88a56 56 0 00-56 56v77.49a40 40 0 01-11.72 28.29L7 239a24 24 0 000 34l45.24 45.24A40 40 0 0164 346.52V424a56 56 0 0056 56h88a16 16 0 0016-16v-16a16 16 0 00-16-16h-88a8 8 0 01-8-8v-77.48a88.06 88.06 0 00-25.78-62.24L57.93 256l28.29-28.28A88.06 88.06 0 00112 165.48V88a8 8 0 018-8h88a16 16 0 0016-16V48a16 16 0 00-16-16zm361 207l-45.25-45.24A40.07 40.07 0 01512 165.48V88a56 56 0 00-56-56h-88a16 16 0 00-16 16v16a16 16 0 0016 16h88a8 8 0 018 8v77.48a88 88 0 0025.78 62.24L518.06 256l-28.28 28.28A88 88 0 00464 346.52V424a8 8 0 01-8 8h-88a16 16 0 00-16 16v16a16 16 0 0016 16h88a56 56 0 0056-56v-77.49a40 40 0 0111.72-28.29L569 273a24 24 0 000-34z"
        ></path>
      </svg></button
    >



    <button
      class="button-transparent small tooltip-handle tooltip-left-aligned"
      data-title="Unordered List"
      data-command="BULLET"
    >
      <svg
        data-command="BULLET"
        class="w-4 h-4 fill-current"
        viewBox="0 0 512 512"
      >
        <path
          d="M48 368a48 48 0 1048 48 48 48 0 00-48-48zm0-160a48 48 0 1048 48 48 48 0 00-48-48zm0-160a48 48 0 1048 48 48 48 0 00-48-48zm448 24H176a16 16 0 00-16 16v16a16 16 0 0016 16h320a16 16 0 0016-16V88a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v16a16 16 0 0016 16h320a16 16 0 0016-16v-16a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v16a16 16 0 0016 16h320a16 16 0 0016-16v-16a16 16 0 00-16-16z"
        ></path>
      </svg></button
    >


    <button
      class="button-transparent small tooltip-handle tooltip-left-aligned"
      data-title="Ordered List"
      title="Add a numbered list"
      data-command="NUMBER"
    >
      <svg
        data-command="NUMBER"
        class="w-4 h-4 fill-current"
        viewBox="0 0 512 512"
      >
        <path
          d="M61.77 401l17.5-20.15a19.92 19.92 0 005.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 00-8 8v16a8 8 0 008 8h22.84a154.82 154.82 0 00-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.3 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 01-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.73 6.13-3.2 11.72 2.62 15.94 7.71 4.69 20.39 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 392H176a16 16 0 00-16 16v16a16 16 0 0016 16h320a16 16 0 0016-16v-16a16 16 0 00-16-16zm0-320H176a16 16 0 00-16 16v16a16 16 0 0016 16h320a16 16 0 0016-16V88a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v16a16 16 0 0016 16h320a16 16 0 0016-16v-16a16 16 0 00-16-16zM16 160h64a8 8 0 008-8v-16a8 8 0 00-8-8H64V40a8 8 0 00-8-8H32a8 8 0 00-7.14 4.42l-8 16A8 8 0 0024 64h8v64H16a8 8 0 00-8 8v16a8 8 0 008 8zm-3.9 160H80a8 8 0 008-8v-16a8 8 0 00-8-8H41.33c3.28-10.29 48.33-18.68 48.33-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.45 18.75-4.38 5.59-3 10.84 2.79 15.37l8.58 6.88c5.61 4.56 11 2.47 16.13-2.44a13.4 13.4 0 019.45-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.1 320z"
        ></path>
      </svg>
    </button>

    <button>
      <svg class="w-4 h-4 fill-current" viewBox="0 0 512 512">
          <path
            d="M342.7 144H464v288H48V144h121.3l24-64h125.5l23.9 64zM324.3 32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7 0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72z"
          ></path></svg
        >
    </button>
        </v-responsive>
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
// import Controls from './components/Controls.vue';
export default {
  // components: { Controls },
  data: () => ({
    links: ["File", "Edit", "Export", "Settings", "Help"],
    editorShortcuts: [
      { icon: "mdi-format-quote-open", action: "action" },
      { icon: "mdi-code-braces", action: "action" },

      { icon: "mdi-code-tags", action: "action" },
      { icon: "mdi-camera-outlined", action: "action" },
      { icon: "mdi-format-list-bulleted", action: "action" },
    ],
    rawBlob: null,
  }),
};
</script>


<style scoped>
textarea {
  width: 100%;
  height: 72vh;
  overflow-y: scroll;
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