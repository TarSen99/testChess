<template>
  <t-container class="board">
    <t-row>
      <t-col col>
        <player-info name="Player 1"/>
      </t-col>
    </t-row>
   
    <div class="playing-board">
      <t-row
        v-for="i in size" 
        :key="i"
        class="cell-row"
        align-h="center"
      >
        <t-col 
          v-for="j in size" 
          :key="`${i}-${j}`"
          class="cell"
          :class="$style[(((i + j) % 2 === 0) ? colors.darkGreen : colors.green)]"
        >
        </t-col>
      </t-row>
    </div>
    
    <t-row align-h="right">
      <t-col col>
        <player-info name="Player 2"/>
      </t-col>
    </t-row>
    </t-container>
</template>

<script>
import PlayerInfo from '@/components/Home/PlayerInfo.vue'

const SIZE = 8
const GREEN_COLOR_NAME = 'green'
const DARK_GREEN_COLOR_NAME = 'dark-green'

export default {
  name: 'Board',
  components: {
    PlayerInfo
  },
  props: {
    color: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      size: SIZE,
      colors: {
        green: GREEN_COLOR_NAME,
        darkGreen: DARK_GREEN_COLOR_NAME
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '@/style/breakpoint.scss';

   .playing-board {
      border-radius: 5px;
      overflow: hidden;
    }

    .board {
      max-width: 80vw;
    }
    .cell {
      height: 10vw;
      width: 10vw;
    }

    @media screen and (min-width: $md){
      .board {
        max-width: 480px;
      }
      .cell {
        height: 60px;
        width: 60px;
      }
    }

    @media screen and (min-width: $lg){
      .board {
        max-width: 400px;
      }
      .cell {
        height: 50px;
        width: 50px;
      }
    }

    @media screen and (max-width: $lg){
      .board {
       padding-bottom: 100px;
      }
    }
</style>

<style lang="scss" module>
    .green {
      background: #71b151;
    }

    .dark-green {
      background: #4f5c49;
    }
</style>