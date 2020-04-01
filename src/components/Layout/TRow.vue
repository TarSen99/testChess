<template>
  <div class="t-row" :class="[...AlignClasses, fullheight ? 'fullheight' : '']">
    <slot />
  </div>
</template>

<script>

const AVAILABLE_CLASS_NAMES_ALIGN = {
  'alignV': 'align-v',
  'alignH': 'align-h',
  'alignLgV': 'align-lg-v', 
  'alignLgH': 'align-lg-h',
};

export default {
  name: 'TRow',
  props: {
    fullheight: {
      type: Boolean,
      default: false
    },
    'align-v': {
      type: String,
      default: null
    },
    'align-h': {
      type: String,
      default: null
    },
    'align-lg-v': {
      type: String,
      default: null
    },
    'align-lg-h': {
      type: String,
      default: null
    },
  },
  computed: {
    availableALignClasses() {
      return Object.keys(AVAILABLE_CLASS_NAMES_ALIGN).filter(name => this[name])
    }, 
    AlignClasses() {
      return this.availableALignClasses
      .map(name => `${AVAILABLE_CLASS_NAMES_ALIGN[name]}-${this[name]}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/style/breakpoint.scss';

  .t-row {
    display: flex;
    flex-wrap: wrap;

    &.fullheight {
      height: 100%;
    }
  }

  .t-row.align-h-start {
    justify-content: flex-start;
  }
  
  .t-row.align-h-center {
    justify-content: center;
  }

  .t-row.align-h-end {
    justify-content: flex-end;
  }

  .t-row.align-v-start {
    align-items: flex-start;
  }
  
  .t-row.align-v-center {
    align-items: center;
  }

  .t-row.align-v-end {
    align-items: flex-end;
  }

  .t-row {
    & > .t-col {
      flex-grow: 1;
    }

    & > .t-col-1 {
      flex-basis: calc(100% / 12);
      max-width: calc(100% / 12);
    }

    & > .t-col-2 {
      flex-basis: calc(100% / 6);
      max-width: calc(100% / 6);
    }

      & > .t-col-3 {
      flex-basis: calc(100% / 4);
      max-width: calc(100% / 4);
    }

      & > .t-col-4 {
      flex-basis: calc(100% / 3);
      max-width: calc(100% / 3);
    }

      & > .t-col-5 {
      flex-basis: calc(100% / 2.4);
      max-width: calc(100% / 2.4);
    }

      & > .t-col-6 {
      flex-basis: calc(100% / 2);
      max-width: calc(100% / 2);
    }

      & > .t-col-7 {
      flex-basis: calc(100% / 1.714);
      max-width: calc(100% / 1.714);
    }

      & > .t-col-8 {
      flex-basis: calc(100% / 1.5);
      max-width: calc(100% / 1.5);
    }

      & > .t-col-9 {
      flex-basis: calc(100% / 1.33);
      max-width: calc(100% / 1.33);
    }

      & > .t-col-10 {
      flex-basis: calc(100% / 1.2);
      max-width: calc(100% / 1.2);
    }

      & > .t-col-11 {
      flex-basis: calc(100% / 1.09);
      max-width: calc(100% / 1.09);
    }

      & > .t-col-12 {
      flex-basis: calc(100% / 1);
      max-width: calc(100% / 1);
    }
  }

  @media screen and (min-width: $lg) {
     .t-row {
      & > .t-lg-1 {
        flex-basis: calc(100% / 12);
        max-width: calc(100% / 12);
      }

      & > .t-lg-2 {
        flex-basis: calc(100% / 6);
        max-width: calc(100% / 6);
      }

        & > .t-lg-3 {
        flex-basis: calc(100% / 4);
        max-width: calc(100% / 4);
      }

        & > .t-lg-4 {
        flex-basis: calc(100% / 3);
        max-width: calc(100% / 3);
      }

        & > .t-lg-5 {
        flex-basis: calc(100% / 2.4);
        max-width: calc(100% / 2.4);
      }

        & > .t-lg-6 {
        flex-basis: calc(100% / 2);
        max-width: calc(100% / 2);
      }

        & > .t-lg-7 {
        flex-basis: calc(100% / 1.714);
        max-width: calc(100% / 1.714);
      }

        & > .t-lg-8 {
        flex-basis: calc(100% / 1.5);
        max-width: calc(100% / 1.5);
      }

        & > .t-lg-9 {
        flex-basis: calc(100% / 1.33);
        max-width: calc(100% / 1.33);
      }

        & > .t-lg-10 {
        flex-basis: calc(100% / 1.2);
        max-width: calc(100% / 1.2);
      }

        & > .t-lg-11 {
        flex-basis: calc(100% / 1.09);
        max-width: calc(100% / 1.09);
      }

        & > .t-lg-12 {
        flex-basis: calc(100% / 1);
        max-width: calc(100% / 1);
      }
    }

    .t-row {
      &.align-lg-h-start {
        justify-content: flex-start;
      }

      &.align-lg-h-center {
        justify-content: center;
      }

      &.align-lg-h-end {
        justify-content: flex-end;
      }

      &.align-lg-v-start {
        align-items: flex-start;
      }

      &.align-lg-v-center {
        align-items: center;
      }

      &.align-lg-v-end {
        align-items: flex-end;
      }
    }
  }
</style>