<template>
  <div>
    <el-container>
      <el-header>
        <header-content></header-content>
      </el-header>
      <el-main :style="height">
        <router-view class="child-view"></router-view>
      </el-main>
      <el-footer>
        <footer-content></footer-content>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headerContent from './components/headerContent'
import footerContent from './components/footerContent'
export default {
  name: 'layout',
  components: {
    headerContent,
    footerContent
  },
  data() {
    return {
      height: {
        height: ''
      }
    }
  },
  created() {
    this.hh()
  },
  methods: {
    hh() {
      this.height.height = window.innerHeight - 60 + 'px'
    }
  }
}
</script>
<style>
  .el-header{
    padding: 0;
    margin: 0;
  }
  .el-main{
    background-color: #F5F5F5;
  }
  .el-footer{
    background-color: #545C64;
    height: 180px !important;
    padding: 0;
    margin: 0;
    font-size: 14px;
    color:#C0C4CC;
    text-align: center;
    /* line-height: 180px; */
  }
</style>

