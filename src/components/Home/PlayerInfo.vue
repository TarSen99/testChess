<template>
  <div class="player-info">
      <div class="player-info__img">

      </div>

      <p class="player-info__name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'PlayerInfo',
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/breakpoint.scss';

  .player-info {
    display: flex;
    align-items: center;
    transition: all 0.2s;
  }
  
  p.player-info__name {
    font-weight: 700;
    font-size: 1.5rem;
  }

  .player-info__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #d1d1d1;
    margin-right: 15px;
    background: #e1e1e1;
  }

  @media screen and (max-width: $lg){
    p.player-info__name {
      font-size: 1.2rem;
    }

    .player-info__img {
      width: 30px;
      height: 30px;
    } 
  }
</style>