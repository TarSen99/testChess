<template>
  <div class="menu-head">
    <h1>Play Chess</h1>
  </div>
</template>

<script>
export default {
  name: 'MenuHead'
}
</script>

<style lang="scss" scoped>
  .menu-head {
    text-align: center;
    color: #fff;
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    justify-items: space-between;

    h1 {
      font-size: 18px;
    }
  }


</style>