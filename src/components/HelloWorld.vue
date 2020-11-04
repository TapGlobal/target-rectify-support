<template>
  <div
    class="hello"
    style="display: flex;
    justify-content: center;"
  >
    <div style="width: 30%;">
      <div style="display: flex; justify-content: center;">
        <div style="height: 120px; width: 120px;">
          <img
            style="width: 100%; height: 100%;"
            src="../assets/settings.png"
            alt=""
          />
        </div>
      </div>

      <div class="title">
        <h3>To continue, validate user account</h3>

        <div class="title-tab">
          <span>Authentication</span>
        </div>
      </div>

      <div class="divider"></div>
      <el-form
        :label-position="labelPosition"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Email Address/Username" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
      <div class="divider"></div>

      <p class="terms">
        if you click the authentication/activation link, you will be registered
        and you agree to the <a href="">terms & conditions</a> &nbsp; and &nbsp;
        <a href="">Privacy Policy</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  data() {
    return {
      labelPosition: "top",
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Email or Username",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input Password",
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.divider {
  border: 1px solid #eee;
  margin-bottom: 1rem;
}

.hello .el-button--primary {
  width: 100%;
  height: 50px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-top: 0.3rem;
  background: limegreen;
  border-color: limegreen;
}

.hello .el-form-item__content .el-input input {
  height: 50px;
}

.hello .title h3 {
  text-align: center;
}

.terms {
  font-size: 14px;
  color: #666;
}
.hello .title .title-tab {
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  background: #3b5998;
  height: 50px;
  border-radius: 90px;
  margin: 1rem 0rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hello .title .title-tab span {
  font-weight: 900;
}
</style>
