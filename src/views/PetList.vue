<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../components/Header"
export default {
  name: "PetList",
  components: {Header}
}
</script>

<style scoped>

</style>
