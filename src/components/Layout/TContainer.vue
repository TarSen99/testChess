<template>
    <div class="t-container" :class="{fluid}">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'TContainer',
    props: {
      fluid: {
        type: Boolean,
        default: false
      }
    }
}
</script>

<style lang="scss" scoped>
    .t-container {
        padding: 0;
        margin: 0 auto;
        padding: 0 15px;
        max-width: 1200px;

        &.fluid {
          width: 100%;
          max-width: 100%;
          padding: 0;
        }
    }
</style>