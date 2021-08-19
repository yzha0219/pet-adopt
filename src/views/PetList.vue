<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-main>
        <el-row gutter="20">
          <el-card v-for="pet in pets">
            <el-col :span="4">
              <el-image :src="require('../assets/' + pet.images)" alt="loading" ></el-image>
            </el-col>
            <el-col :span="20">
              <h4>{{ pet.name }}</h4>
              <p>{{ pet.description }}</p>
              <p>{{ pet.requirement }}</p>
            </el-col>
          </el-card>
        </el-row>
      </el-main>
    </el-container>
    <Footer></Footer>
  </el-container>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer";

export default {
  name: "PetList",
  components: {Header, Footer},
  data() {
    return {
      pets: []
    }
  },
  methods: {
    getPets() {
      this.$axios.get("/static/pet-data.json").then((res) => {
        console.log(res.data)
        this.pets = res.data.pets
      });
    }
  },
  mounted() {
    this.getPets()
  }
}
</script>

<style scoped>

</style>
