<template>
  <div>
    <el-container>
      <el-header>
        <header-content></header-content>
      </el-header>
      <el-main>
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
    }
  }
}
</script>
