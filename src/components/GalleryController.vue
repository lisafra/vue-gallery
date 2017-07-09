<template>
  <nav class="controller">
    <ul>
      <li class="controller-item iconfont"
          :class="{cur: item == current, 'icon-turn_right':item == current, inverse: item == current && inverse}"
          v-for="(item, index) in controllData" :key="item"
          @click.stop="fnChangeState(index)"></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      current: {
        type: [String, Number],
        default: 0
      },
      total: {
        type: [String, Number],
        default: 1
      }
    },
    data () {
      return {
        controllData: [],
        inverse: false
      }
    },
    mounted () {
      for (let i = 0; i < this.total; i++) {
        this.controllData.push(i)
      }
    },
    methods: {
      fnChangeState (obj) {
        if (obj === this.current) {
          this.inverse = !this.inverse
          this.$emit('onreverse', obj)
        } else {
          this.$emit('rearrange', obj)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .controller {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 30px;
    z-index: 101;
    text-align: center;
    vertical-align: middle;
    .controller-item{
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 28px;
      margin: 5px;
      cursor: pointer;
      text-align: center;
      vertical-align: middle;
      background-color: #aaa;
      border-radius: 50%;
      transform: scale(.5);
      transition: all .5s ease;
      &.cur{
        color: #fff;
        background-color: #888;
        transform: scale(1);
      }
      &.inverse{
        background-color: darked(#888, 10%);
        transform: rotateY(180deg);
      }
    }
  }
</style>
