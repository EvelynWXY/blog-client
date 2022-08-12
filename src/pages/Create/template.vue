<template>
  <div id="create">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" @change="tips(title)"></el-input>
    <p class="msg">{{ title.length }}/30</p>
    <h3>内容简介</h3>
    <el-input type="textarea" v-model="description" :autosize="{ minRows: 2, maxRows: 6 }"></el-input>
    <p class="msg">{{ description.length }}/1000</p>
    <h3>文章内容</h3>
    <el-input type="textarea" v-model="content" :autosize="{ minRows: 4, maxRows: 30 }"></el-input>
    <p class="msg">{{ content.length }}/2000</p>
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#009b95" inactive-color="#dcdfe6"></el-switch>
    </p>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>
<script src="./template.js">
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" src="./template.less">
</style>
