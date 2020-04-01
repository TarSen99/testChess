<template>
  <t-container class="page-container" fluid>
    <t-row align-h="center" align-v="center" fullheight>
      <t-col col>
        <board /> 
      </t-col>
    </t-row>
  </t-container>
</template>

<script>
import Board from '@/components/Home/Board.vue'

export default {
  name: 'Home',
  components: {
    Board
  }
}
</script>

<style lang="scss">
  .page-container {
    height: 100vh;
    padding: 0 !important;
    background: #f6f6f6;
  }
</style>