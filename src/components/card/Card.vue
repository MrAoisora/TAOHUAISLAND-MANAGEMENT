<template>
  <div>
    <el-container>
      <el-aside width="250px" style="background-color: yellow;height: 900px"></el-aside>
      <el-container>
        <el-header style="height: 200px;background-color: #2f49d1">Header</el-header>
        <el-main class="mainBox" id="mainBox2">
          <el-row :gutter="12">
            <el-col :span="8" v-for="index2 in arr" :key="index2">
              <div class="card_container">
                <el-row :gutter="0">
                  <el-col :span="19" :class="{card_Text_Body:true}" style="padding-left: 20px">
                    这是个测试卡片{{ index2 }}
                  </el-col>
                  <el-col :span="5">
                    <div  class="card_Img">
                      <img src="../../images/faxian.png" style="object-fit: fill;height: 80px;opacity: 0.2"/>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
  /*
  *content-box：浏览器对盒模型的解释遵从W3C标准，当定义width和height时，它的参数值不包括border和padding。
  *border-box：当定义width和height时，border和padding的参数值被包含在width和height之内。
  */
  box-sizing: border-box;
}

;
.card_container {
  border-radius: 4px;
  border: 1px solid #EBEEF5;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  color: #303133;
  transition: .3s;
  margin: 15px;

  &:hover {
    /*
    *X坐标 Y坐标 虚化程度 扩展程度 颜色rgba(红,绿,蓝,透明度0-1)
     */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    color: rgb(124, 112, 223);
    cursor: pointer;
  }
;

  &:active {
    background-color: rgba(124, 112, 223, 0.2)
  }

  .card_Text_Body {
    font-size: 14px; //字体大小
    line-height: 20px; //字体框的高度
    font-weight: 550;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_Img {
    background-color: rgba(124, 112, 223, 0.2);
    text-align: center;
  }
}
</style>
