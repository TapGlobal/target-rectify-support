<template>
  <div>
      <div class="barcode">
          <div class="flex">
              <img src="../assets/qrcode-2.png" alt="">
              <div class="redirecting">
                  <h1>Thank You</h1>
                  <el-tag type="success">Redirecting Now <i class="el-icon-loading"></i></el-tag>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.barcode {
    height: 100vh;
    display: flex;
    align-items: center;
    padding: 0px 200px;
}

.flex {
    display: flex;
    align-items: center;
    width: 100%;
}

.redirecting {
    margin-left: 2rem;
}


.redirecting  .el-tag{
    width: 500px;
    height: 66px;
    font-size: 52px;
    font-weight: bold;
}


@media only screen and (max-width: 600px) {
  .flex {
    display:block;
  }

  .barcode {
      padding: 0;
  }

  .redirecting {
      margin-left: 0;
  }
}

</style>

