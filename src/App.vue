<template>
  <header class="sticky-top">
    <HeaderComponent />
  </header>
  <main>
    <router-view />
  </main>

  <footer class=" mt-4 dark-bg sticky-bottom">
    <IconsComponent />
  </footer>
  <ModalComponent />

</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import IconsComponent from './components/IconsComponent.vue'
import ModalComponent from './components/ModalComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { IconsComponent, ModalComponent, HeaderComponent }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

// body,
// html,
// * {
//   overflow-x: hidden;
//   overflow-y: auto;
//   overflow: hidden;
// }

:root {
  --darkest: #30323f;
  --dark-accent: #273469;
  --lightest: #FAFAFF;
  --light-accent: #e4d9ff;
}

.icons {
  font-size: 40px;
}

footer {
  // position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
}

header {
  top: 0;
  width: 100%;
  background-color: white;
}
</style>
