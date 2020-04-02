<template>
  <t-container class="page-container" fluid>
    <t-row align-lg-h="center" align-lg-v="center" fullheight class="page-content">
      <t-col col12 lg6>
        <board />
      </t-col>

      <t-col col12 lg4>
        <menu-container />
      </t-col>
    </t-row>
  </t-container>
</template>

<script>
import Board from '@/components/Home/Board.vue'
import MenuContainer from '@/components/Home/MenuContainer.vue'

export default {
  name: 'Home',
  components: {
    Board,
    MenuContainer
  }
}
</script>

<style lang="scss">
    @import '@/style/breakpoint.scss';

  .page-container {
    min-height: 100vh;
    padding: 0 !important;
    background: #f6f6f6;
  }

  @media screen and (max-width: $lg) {
    .page-content {
      flex-direction: column-reverse;
    }
  }
</style>