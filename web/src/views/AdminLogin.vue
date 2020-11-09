<template>
  <div class="AdminLogin">
    <a-card title="后台登录" :bordered="false" style="width: 500px">
      <a-form-model :model="form">
        <a-form-item label="用户名" :label-col={span:4} :wrapper-col={span:20}>
          <a-input v-model="form.user" placeholder="User Name"></a-input>
        </a-form-item>
        <a-form-item label="密码" :label-col={span:4} :wrapper-col={span:20}>
          <a-input v-model="form.pass" placeholder="Pass Word"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button @click="Login">登录</a-button>
          <a-button @click="ToRegistered" style="margin-left: 100px">注册</a-button>
        </a-form-item>
      </a-form-model>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  data() {
    return {
      form: {
        user:'',
        pass:''
      },
    }
  },
  methods: {
    Login() {
      let name =this.form.name
      let pass = this.form.pass
      if (name === '' || pass === ''){
        this.$message.error('请输入用户名或密码！');
      }
    },
    ToRegistered(){
      this.$router.push('/registered')
    }
  }
}
</script>

<style scoped>
.AdminLogin {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>