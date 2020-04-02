<template>
  <t-container fluid>
    <t-row align-h="center">
      <t-col col12 lg10>
        <div class="menu-container">
          <menu-head />

          <div class="menu__buttons">
            <button>New Game</button>
            <button>Archive</button>
          </div>
        </div>
      </t-col>
    </t-row>
  </t-container>
</template>

<script>
import MenuHead from '@/components/Home/menu/MenuHead.vue'

export default {
  name: 'Menu',
  components: {
    MenuHead
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/breakpoint.scss';

  .menu-container {
    border-radius: 10px;
    background: #272323;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .menu__buttons {
    margin-top: 20px;
    padding: 0 40px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    button {
      display: inline-block;
      padding: 5px;
      background: #fbfbfb;
      color: #2e2e2e;
      text-decoration: none;
      border-radius: 2px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 18px;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        opacity: 0.8;
      }

      &:first-of-type {
        margin-bottom: 20px;
      }
    }
  }

  @media screen and (max-width: $lg) {
    .menu-container {
      border-radius: 0;
      margin-bottom: 40px;
    } 
  }

    @media screen and (min-width: $lg) {
    .menu-container {
      max-width: 400px;
    } 
  }
</style>