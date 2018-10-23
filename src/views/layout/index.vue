<template>
  <div>
    <el-container>
      <el-header>header</el-header>
      <el-main>
        <router-view class="child-view"></router-view>
      </el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'layout',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
