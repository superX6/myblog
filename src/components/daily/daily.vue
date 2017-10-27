<template>
  <div class="daily">
    <h1>{{acc}}的日志详情</h1>
    <div class="wrapper" ref="wrapper">
      <div class="content" ref="listView">
        <div class="list">
          <p class="title">文章内容文章内容文章内容文章内内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
          <p class="info"><span>发表时间：2017.03.06</span> <span>评论数：3 条</span></p>
        </div>
        <div class="list">
          <p class="title">文章内容文章内容文章内容文章内内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
          <p class="info"><span>发表时间：2017.03.06</span> <span>评论数：3 条</span></p>
        </div>
        <div class="list">
          <p class="title">文章内容文章内容文章内容文章内内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
          <p class="info"><span>发表时间：2017.03.06</span> <span>评论数：3 条</span></p>
        </div>
        <div class="list">
          <p class="title">文章内容文章内容文章内容文章内内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
          <p class="info"><span>发表时间：2017.03.06</span> <span>评论数：3 条</span></p>
        </div>
        <div class="list">
          <p class="title">文章内容文章内容文章内容文章内内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
          <p class="info"><span>发表时间：2017.03.06</span> <span>评论数：3 条</span></p>
        </div>
        <div class="list">
          <p class="title">文章内容文章内容文章内容文章内内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
          <p class="info"><span>发表时间：2017.03.06</span> <span>评论数：3 条</span></p>
        </div>
        <div class="list">
          <p class="title">文章内容文章内容文章内容文章内内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
          <p class="info"><span>发表时间：2017.03.06</span> <span>评论数：3 条</span></p>
        </div>
        <div class="list">
          <p class="title">文章内容文章内容文章内容文章内内容文章内容文章内容文章内容文章内容文章内容文章内容</p>
          <p class="info"><span>发表时间：2017.03.06</span> <span>评论数：3 条</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        acc: ''
      }
    },
    created () {
      this._initScroll()
    },
    mounted () {
      this.username = 'superX'
    },
    methods: {
      _initScroll () {
        this.$nextTick(() => {
          var $wrapper = this.$refs.wrapper
          var $listView = this.$refs.listView
          this.scroll = new BScroll($wrapper, {
            click: true,
            startX: 0,
            startY: 0
          })
        })
      }
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
  .daily
    height: 100%
    h1
      width: 100%
      height: 44px
      text-align: center
      font-size: 24px
      background: #fff
      position: relative
      left: 0
      top: 0
      z-index: 3
    .wrapper
      height: 450px
      .content
        .list
          width: 100%
          box-sizing border-box
          padding:0 10px
          border: 1px solid #ddd
          box-shadow #eee 5px 5px inset
          p.title
            font-size: 14px
            text-indent: 2em
            text-align: left
          p.info
            font-size: 12px
            text-align: left
            color: #666
            span
              margin-left: 20px
</style>