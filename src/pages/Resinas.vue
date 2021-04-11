<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-button class="md-primary" @click="notifyVue('bottom', 'left')"
          >Agergar Nuevo</md-button
        >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Catalogo de resinas</h4>
            <p class="category">Moldeo</p>
          </md-card-header>
          <md-card-content>
            <resina-table table-header-color="orange"></resina-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ResinaTable } from "@/components";
//import ResinaTable from "../components/Tables/ResinaTable.vue";

export default {
  components: {
    ResinaTable,
  },
};
</script>
