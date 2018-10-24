<template>
  <div>
    <el-row :gutter="30">
      <el-col :span="4" :offset="6">
        <el-card shadow="always" class="cardText">
          851814
          <div class="cardDiv">区块高度</div>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always" class="cardText">
          14557855
          <div class="cardDiv">区块高度</div>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="always" class="cardText">
          2274466
          <div class="cardDiv">区块高度</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
    }
  }
}
</script>
<style>
  .el-row{
    text-align: center;
  }
 .cardText{
   text-align: center;
   color: #409EFF;
   font-size: 24px;
 }
 .cardDiv{
   text-align: center;
   color: #909399;
   font-size: 12px;
   margin-top: 5px;
 }
</style>

