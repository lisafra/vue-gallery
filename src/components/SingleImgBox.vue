<template>
  <figure class="img-box" :class="{'center-img': center}" :style="imgPos" ref="imgbox"
          @click.stop="fnEventHandle"
  >
    <img :src="url"/>
    <figcaption>
      <h2 class="title">{{data.title}}</h2>
      <!-- 反面 -->
      <div class="img-back" @click.stop="fnEventHandle">
        <p>{{data.desc}}</p>
      </div>
    </figcaption>
  </figure>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      },
      index: {
        type: [String, Number],
        default: 0
      },
      center: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      url () {
        return require(`../images/${this.data.file_name}`)
      },
      imgPos () {
        return !this.data.inverse ? `left:${this.data.left}px;top:${this.data.top}px;transform: rotate(${this.data.rotate}deg) scale(${this.data.scale})` : `left:${this.data.left}px;top:${this.data.top}px;transform: translate(320px) rotateY(180deg) scale(${this.data.scale})`
      }
    },
    methods: {
      // 图片点击事件处理
      fnEventHandle () {
        if (this.center) {
          this.$emit('onreverse', this.index)
        } else {
          this.$emit('rearrange', this.index)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .img-box {
    position: absolute;
    width: 300px;
    height: 340px;
    padding: 30px;
    cursor: pointer;
    box-sizing: border-box;
    background-color: #eee;
    transition: all .6s ease;
    transform-style: preserve-3d;
    transform-origin: 0 50% 0;
    box-shadow: 2px 2px 4px rgba(7, 17, 27, 0.2), 2px 2px 8px rgba(7, 17, 27, 0.1);
    img{
      opacity:.7;
    }
    &.center-img {
      z-index: 1001;
      background-color: #fff;
      box-shadow: 2px 2px 2px rgba(7, 17, 27, 0.1), 2px 2px 4px rgba(7, 17, 27, 0.2), 2px 2px 16px rgba(7, 17, 27, 0.2), 2px 2px 24px rgba(7, 17, 27, 0.1);
      transform: rotate(0deg);
      img{
        opacity:1;
      }
    }
    figcaption {
      text-align: center;
      .title {
        margin: 20px 0 0 0;
        color: rgba(7, 17, 27, .4);
        font-size: 14px;
        font-weight: 400;
      }
      .img-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 120px 40px 0;
        color: rgba(7, 17, 27, .4);
        font-size: 16px;
        line-height: 1.5;
        text-align: justify;
        text-justify: auto;
        background-color: #fff;
        box-sizing: border-box;
        transform: rotateY(180deg) translateZ(1px);
        backface-visibility: hidden;
        p {
          margin: 0;
        }
      }
    }
  }
</style>
