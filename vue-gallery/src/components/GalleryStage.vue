<template>
  <section class="gallery-stage" ref="stage">
    <!--图片区-->
    <div class="img-container">
      <single-img-box v-for="(item, index) in imageData" :key="index" :center="index == centerIndex" :data="item"
                      :index="index" @rearrange="fnReArrange" @onreverse="fnChangeReverse"
      ></single-img-box>
    </div>

    <!--导航区-->
    <controller :current="centerIndex" total="16"
                @onreverse="fnChangeReverse" @rearrange="fnReArrange"></controller>
  </section>
</template>

<script>
  import SingleImgBox from './SingleImgBox.vue'
  import Controller from './GalleryController.vue'
  import imgData from '../data/data.json'
  export default {
    components: {SingleImgBox, Controller},
    data () {
      return {
        imageData: require('../data/data.json'),
        centerIndex: 0,
        allImgNumArr: [],
        topImgIndex: -1,
        centerPos: {},
        leftRange: [],
        rightRange: [],
        topRange: [],
        xAxis: [],
        yAxis: [],
        rotateRange: 30
      }
    },
    mounted () {
      this.$nextTick(() => {
        // 随机一个当前图片
        this.centerIndex = Math.floor(Math.random() * this.imageData.length)
        // 首先拿到舞台的大小
        let stageDOM = this.$refs.stage
        let stageW = stageDOM.scrollWidth
        let stageH = stageDOM.scrollHeight
        let stageHalfW = Math.ceil(stageW / 2)
        let stageHalfH = Math.ceil(stageH / 2)
        // 然后获取单个图片盒子的大
        let singleImgDom = document.querySelector('.img-box')
        let singleImgW = singleImgDom.scrollWidth
        let singleImgH = singleImgDom.scrollHeight
        let singleImgHalfW = Math.ceil(singleImgW / 2)
        let singleImgHalfH = Math.ceil(singleImgH / 2)
        // 计算中心图片的位置点
        this.centerPos.left = stageHalfW - singleImgHalfW
        this.centerPos.top = stageHalfH - singleImgHalfH
        // 计算左则、右则图片排布范围
        this.leftRange[0] = -singleImgHalfW
        this.leftRange[1] = stageHalfW - singleImgHalfW * 3
        this.rightRange[0] = stageHalfH + singleImgW
        this.rightRange[1] = stageW - singleImgHalfW
        this.yAxis[0] = -singleImgHalfH
        this.yAxis[1] = stageH - singleImgHalfH
        // 计算上则分区图片排布范围
        this.topRange[0] = -singleImgHalfH
        this.topRange[1] = stageHalfH - singleImgHalfH * 3
        this.xAxis[0] = stageHalfW - singleImgHalfH
        this.xAxis[1] = stageHalfW
        // 排布图片
        this.fnArrageImg('init')
      })
    },
    methods: {
      // 排布图片函数
      fnArrageImg (type) {
//        console.log(this.imageData)
        // 居中中心图片
        if (type === 'init') {
          this.$set(this.imageData[this.centerIndex], 'left', this.centerPos.left)
          this.$set(this.imageData[this.centerIndex], 'top', this.centerPos.top)
          this.$set(this.imageData[this.centerIndex], 'rotate', 0)
          this.$set(this.imageData[this.centerIndex], 'scale', 1.3)
        } else {
          this.imageData[this.centerIndex].left = this.centerPos.left
          this.imageData[this.centerIndex].top = this.centerPos.top
          this.imageData[this.centerIndex].rotate = 0
          this.imageData[this.centerIndex].scale = 1.3
        }
        console.log(this.centerPos.left)
        console.log(this.centerPos.top)
        console.log(this.imageData[this.centerIndex])
        // 初始化需要用于左、右、上侧随机排布的图片编号
        imgData.forEach((v, k) => {
          if (type === 'init') this.$set(v, 'inverse', false)
          if (k !== this.centerIndex) {
            this.$set(v, 'scale', 0.9)
            this.allImgNumArr.push(k)
          }
        })
        // 从用于随机排布的图片中随机取一张或0张图片放在上侧
        let ranTopNumIndex = Math.floor(Math.random() * this.allImgNumArr.length)
        let topImgIndex = this.allImgNumArr[ranTopNumIndex]
        this.$set(this.imageData[topImgIndex], 'left', this.fnGetRandomPos(this.xAxis[0], this.xAxis[1]))
        this.$set(this.imageData[topImgIndex], 'top', this.fnGetRandomPos(this.topRange[0], this.topRange[1]))
        this.$set(this.imageData[topImgIndex], 'rotate', this.fnGetRotateDeg(this.rotateRange))
        // 获取用于左右排布的图片
        this.allImgNumArr.splice(ranTopNumIndex, 1)
        // 排布左右两边的图片， 左右两边需要一样多图片
        this.allImgNumArr.forEach((v, k) => {
          // 排布左边一半
          if (k <= this.allImgNumArr.length / 2) {
            this.$set(this.imageData[v], 'left', this.fnGetRandomPos(this.leftRange[0], this.leftRange[1]))
          } else {
            // 排布右边一半
            this.$set(this.imageData[v], 'left', this.fnGetRandomPos(this.rightRange[0], this.rightRange[1]))
          }
          this.$set(this.imageData[v], 'top', this.fnGetRandomPos(this.yAxis[0], this.yAxis[1]))
          this.$set(this.imageData[v], 'rotate', this.fnGetRotateDeg(this.rotateRange))
        })
      },
      // 重新排布图片
      fnReArrange (centerIndex) {
        this.imageData[this.centerIndex].inverse = false
        this.centerIndex = centerIndex
        this.allImgNumArr = []
        this.fnArrageImg()
      },
      // 图片正反面切负
      fnChangeReverse (index) {
        this.imageData[index].inverse = !this.imageData[index].inverse
      },
      // 获取随机定位方法
      fnGetRandomPos (min, max) {
        return Math.ceil(Math.random() * (max - min) + min)
      },
      // 获取指定范围的旋转角度
      fnGetRotateDeg (deg) {
        return (Math.random() < 0.5 ? '-' : '+') + Math.random() * deg
      }
    }
  }
</script>

<style lang="less" scoped>
  .gallery-stage {
    width: 100%;
    height: 100%;
    position: relative;
    .img-container {
      perspective: 1800px;
      perspective-origin: center 200px;
    }
  }
</style>
