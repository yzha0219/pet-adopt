<template>
  <div>
    <el-container>
      <el-header>
        <LoginHeader></LoginHeader>
      </el-header>
      <el-main>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item label="Username" prop="username">
            <el-input type="text" maxlength="12" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Sign in</el-button>
            <el-button type="primary" @click="$router.push('/signup')">Sign up</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import LoginHeader from "../components/LoginHeader";

  export default {
    name: 'Login',
    components: {LoginHeader},
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          password: '',
          username: ''
        },
        rules: {
          password: [
            {validator: validatePass, trigger: 'blur'}
          ],
          username: [
            {required: true, message: 'Please input the username!', trigger: 'blur'},
            {min: 3, max: 12, message: 'Length must be between 3 and 12!', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        const _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 提交逻辑
            this.$axios.post('/login', this.ruleForm).then((res) => {
              const token = res.headers['authorization']
              const userInfo = res.data.data
              _this.$store.commit('SET_TOKEN', token)
              _this.$store.commit('SET_USERINFO', userInfo)
              _this.$router.push("/blogs")
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
      this.$notify({
        title: 'Welcome to Pet Adopt：',
        message: 'Let\'s protect stray pets!',
        duration: 1500
      });
    }
  }
</script>
<style>
  .demo-ruleForm {
    max-width: 500px;
    margin: 0 auto;
  }
</style>
