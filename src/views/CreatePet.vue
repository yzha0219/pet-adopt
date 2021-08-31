<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-main>
      </el-main>
    </el-container>
    <Footer></Footer>
  </el-container>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer";

export default {
  name: "CreatePet",
  components: {Header,Footer}
}
</script>

<style scoped>

</style>
