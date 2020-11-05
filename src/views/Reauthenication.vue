<template>
  <div class="reauthenication">
    <div class="container">
      <div class="left">
        logo
      </div>
      <div class="right">
        <div class="container-right">
          <h1>Account Reauthenication Form</h1>
          <p>
            Provide the Required Information to successfully Re Authenticate
            your account on our database system.
          </p>
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
              <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                :loading="loader"
                type="primary"
                @click="submitForm('ruleForm')"
                >Login</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
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
            message: "Please input email address",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
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
    }
  }
};
</script>

<style>
.container {
  display: flex;
  height: 100vh;
}

.left {
  width: 30%;
  background: dodgerblue;
  color: white;
}

.right {
  width: 70%;
}

.right .container-right {
  padding: 7rem;
}

.divider {
  border: 1px solid #eee;
}
</style>
