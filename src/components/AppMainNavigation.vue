<template>
  <!--------------main navigation of the application----------->
  <nav data-main-nav>
    <ul>
      <!------each list iem takes a method of the action to execute
        each method is imported from the preload script (preload.js)------>
      <li>
        <v-menu offset-y="30" min-width="300px" open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <button data-base-button v-bind="attrs" v-on="on">File</button>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in fileMenu" :key="index">
              <template>
                <v-divider v-if="item.divider"></v-divider>
                <v-list-item-title v-else class="d-flex justify-space-between">
                  <span class="d-block">{{ item.title }} </span
                  ><span class="d-block text--disabled">{{
                    item.shortcut
                  }}</span></v-list-item-title
                >
              </template>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>

      <!----------edit menu --------------------->
      <li>
        <v-menu offset-y="30" min-width="300px" open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <button data-base-button v-bind="attrs" v-on="on">Edit</button>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in editMenu"
              :key="index"
              class="my-n2"
            >
              <template>
                <v-divider v-if="item.divider" class="my-n2"></v-divider>
                <v-list-item-title v-else class="d-flex justify-space-between">
                  <span class="d-block">{{ item.title }} </span
                  ><span class="d-block text--disabled">{{
                    item.shortcut
                  }}</span></v-list-item-title
                >
              </template>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>

      <!------------export------------------------->
      <li>
        <v-menu offset-y="30" min-width="300px" open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <button data-base-button v-bind="attrs" v-on="on">Export</button>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in exportMenu"
              :key="index"
            >
              <template>
                <v-divider v-if="item.divider"></v-divider>
                <v-list-item-title v-else class="d-flex justify-space-between">
                  <span class="d-block">{{ item.title }} </span
                  ><span class="d-block text--disabled">{{
                    item.shortcut
                  }}</span></v-list-item-title
                >
              </template>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>

      <li>Settings</li>
      <li>Help</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    fileMenu: [
      { title: "New File", shortcut: "Ctrl+N" },
      { title: "Open File", shortcut: "Ctrl+O" },
      { divider: true },
      { title: "Recent Files" },
      { title: "Save", shortcut: "Ctrl+S" },
      { title: "Save as" },
    ],

    //edit menu childern
    editMenu: [
      { title: "Undo", shortcut: "Ctrl+Z" },
      { title: "Redo", shortcut: "Ctrl+Y" },
      { divider: true },
      { title: "Cut", shortcut: "Ctrl+X" },
      { title: "Copy", shortcut: "Ctrl+C" },
      { title: "Paste", shortcut: "Ctrl+V" },
      { divider: true },
      { title: "Find", shortcut: "Ctrl+F" },
    ],

    //export as
    exportMenu: [
      { title: "Export as PDF" },
      { title: "Export as Markdown" },
      { title: "Export as HTML" },
      { divider: true },
      { title: "Copy as Markdown" },
      { title: "Copy as HTML" },
    ],
  }),
};
</script>

<style>
</style>