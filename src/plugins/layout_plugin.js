import components from '@/components/Layout'

const { TContainer, TRow, TCol } = components

export default {
  install(Vue) {
    Vue.component('t-container', TContainer)
    Vue.component('t-row', TRow)
    Vue.component('t-col', TCol)
  }
}