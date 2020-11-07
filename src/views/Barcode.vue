<template>
  <div style="overflow: hidden;">
    <div class="barcode">
      <div class="flex">
        <div class="img-conatiner">
          <img src="../assets/qrcode-2.png" alt="" />
        </div>
        <div class="redirecting">
          validation please wait......
          <!-- <el-tag type="success"
            > <i class="el-icon-loading"></i
          ></el-tag> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.barcode {
}

.flex {
}

.flex .img-conatiner {
  margin: 20px;
}

.flex .img-conatiner img {
  width: 100%;
}

.redirecting {
  margin: 2rem;
}

.redirecting .el-tag {
  width: 500px;
  height: 66px;
  font-size: 52px;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  .flex {
    display: block;
  }

  .flex .img-conatiner {
    margin: 20px;
  }

  .flex .img-conatiner img {
    width: 100%;
  }

  .redirecting {
    margin: 2rem;
  }
  .barcode {
    padding: 0;
  }

  .redirecting {
    margin: 20px;
  }
}
</style>
