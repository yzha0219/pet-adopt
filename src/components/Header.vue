<template>
  <div>
    <el-row gutter="0">
      <el-col :span="4">
        <el-image :src="require('../assets/pet-adopt.png')" alt="loading"></el-image>
      </el-col>
      <el-col :span="20">
        <el-menu
          :default-active="this.$router.currentRoute.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="/petList">Find pets</el-menu-item>
          <el-menu-item index="/createPet">Register pets</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
