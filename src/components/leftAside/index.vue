<template>
  <div id="leftAside">
    <div>
              <input type='checkbox' id="check">
              <label for="check">
                <i class="iconfont icon-bar-chart-horizontal-line" id="btn"></i>
                <i class="iconfont icon-close-fill" id="cancel"></i>
              </label>
              <el-menu class="elMenu_Box" id="elMenuBox">
                <!--      将菜单写在data之后遍历，避免重复写el-menu-item-->
                <el-menu-item v-for="item in itemList" :key="item.itemId">
                  <i class="iconfont" :class="item.itemIcon"/>
                  {{ item.itemName }}
                </el-menu-item>
              </el-menu>
    </div>
    <div class="box2"></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      itemList: [
        {
          itemId: 'I001',
          itemName: 'Dashboard',
          itemIcon: ''
        },
        {
          itemId: 'I002',
          itemName: 'Overview',
          itemIcon: 'icon-bar-chart-horizontal-line'
        },
        {
          itemId: 'I003',
          itemName: 'Chat',
          itemIcon: 'icon-xiaoxizhongxin'
        },
        {
          itemId: 'I004',
          itemName: 'Team',
          itemIcon: 'icon-shijianguanli'
        },
        {
          itemId: 'I005',
          itemName: 'Tasks',
          itemIcon: 'icon-guanyu'
        },
        {
          itemId: 'I005',
          itemName: 'Reports',
          itemIcon: 'icon-fuwu_o'
        },
        {
          itemId: 'I006',
          itemName: 'Settings',
          itemIcon: 'icon-guanyu'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto Thin', sans-serif;
  #leftAside{
    display: flex;
    .box2{
      background: url("../../images/12.jpg") no-repeat center;
      background-size: cover;
      height: 100vh;
      width: 100%;
    }
  };

  .elMenu_Box {
    width: 250px;
    left: -300px;
    transition: all .5s ease;
  }

  .el-menu-item {
    height: 100%;
    background-color: #042331;
    line-height: 65px;
    font-size: 20px;
    color: rgb(255, 255, 255);
    border-top: 1px solid rgba(255, 255, 255, .1);
    border-bottom: 1px solid black;
    transition: .4s;

    &:hover {
      padding-left: 40px !important; //强制生效
    }

    i {
      margin-right: 10px;
    }
  }

  /**
  兄弟选择器
  同属于一个父级。
  格式：
  选择器1~选择器2{
    声明；
   }
  选中的是选择器1元素之后的所有同级的选择器2元素。
   */
  /**
  *整个侧边栏的设计思路checkbox类型input被选中后展示菜单，取消选中为隐藏侧边栏
  */
  #check {
    display: none;

    &:checked {
      ~ .elMenu_Box {
        left: 0;
      }

      ~ label #btn {
        /**
        *pointer-events属性屏蔽鼠标事件 当left变成250时即被点击更改为选中状态后，不允许再被点击，并且透明度设置为0
        */
        left: 250px;
        opacity: 0;
        pointer-events: none;
      }

      ~ label #cancel {
        left: 195px;
      }
    }
  }

  /**
  这里是两个按钮的的默认位置样式
   */
  label {
    #btn, #cancel { //交集选择器 既满足条件1，又满足条件2。
      position: absolute;
      cursor: pointer;
      background-color: #042331;
      border-radius: 3px;
    }
  ;

    #btn { //#btn的独有默认样式
      left: 40px;
      top: 25px;
      font-size: 35px;
      color: white;
      padding: 6px 6px;
      transition: all .5s;
    }
  ;

    #cancel { //#cancel的独有默认样式
      z-index: 111;
      left: -195px;
      top: 17px;
      font-size: 30px;
      color: #0a5275;
      padding: 2px;
      transition: all .5s;
    }
  }
}

</style>
