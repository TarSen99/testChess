<template>
  <div :class="gridClassList">
    <slot />
  </div>
</template>

<script>

const toLower = (v) => {
  return v.trim().toLowerCase()
}

const AVAILABLE_CLASS_NAMES_GRID = [
  'col',
  'col-1', 'col-2', 'col-3','col-4', 
  'col-5', 'col-6','col-7', 'col-8', 
  'col-9','col-10', 'col-11', 'col-12',
  'lg-1', 'lg-2', 'lg-3','lg-4', 
  'lg-5', 'lg-6','lg-7', 'lg-8', 
  'lg-9','lg-10', 'lg-11', 'lg-12'
];

export default {
  name: 'TCol',
  props: {
    'col': {
      type: Boolean,
      default: false
    },
    'col-1': {
      type: Boolean,
      default: false
    },
    'col-2': {
      type: Boolean,
      default: false
    },
    'col-3': {
      type: Boolean,
      default: false
    },
    'col-4': {
      type: Boolean,
      default: false
    },
    'col-5': {
      type: Boolean,
      default: false
    },
    'col-6': {
      type: Boolean,
      default: false
    },
    'col-7': {
      type: Boolean,
      default: false
    },
    'col-8': {
      type: Boolean,
      default: false
    },
    'col-9': {
      type: Boolean,
      default: false
    },
    'col-10': {
      type: Boolean,
      default: false
    },
    'col-11': {
      type: Boolean,
      default: false
    },
    'col-12': {
      type: Boolean,
      default: false
    },
    'lg-1': {
      type: Boolean,
      default: false
    },
    'lg-2': {
      type: Boolean,
      default: false
    },
    'lg-3': {
      type: Boolean,
      default: false
    },
    'lg-4': {
      type: Boolean,
      default: false
    },
    'lg-5': {
      type: Boolean,
      default: false
    },
    'lg-6': {
      type: Boolean,
      default: false
    },
    'lg-7': {
      type: Boolean,
      default: false
    },
    'lg-8': {
      type: Boolean,
      default: false
    },
    'lg-9': {
      type: Boolean,
      default: false
    },
    'lg-10': {
      type: Boolean,
      default: false
    },
    'lg-11': {
      type: Boolean,
      default: false
    },
    'lg-12': {
      type: Boolean,
      default: false
    },
  },
  computed: {
      replacedDash() {
        return AVAILABLE_CLASS_NAMES_GRID.map(item => {
          return {
            currName: item.replace('-', ''),
            oldName: item
          }
        })
      },
      gridClassList() {
        console.log(this.replacedDash)
        return this.replacedDash.filter(item => this[item.currName])
        .map(item => `t-${toLower(item.oldName)}`)
      }
  }
}
</script>
