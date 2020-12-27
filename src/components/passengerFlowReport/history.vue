<template>
  <div class="history">
        <!-- 选者查询的店铺和日期 -->
        <div class="selectStoreDate">
            <strong>选择经销商</strong>
            <el-row class="demo-autocomplete">
                <el-col :span="24">
                    <el-autocomplete
                    class="inline-input"
                    v-model="store"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    @select="handleSelect"
                    ></el-autocomplete>
                </el-col>
            </el-row>
            <strong>选择日期</strong>
            <div class="block">
                <el-date-picker
                v-model="date"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
                </el-date-picker>
            </div>
        </div>

        <!-- 分割线 -->
        <hr />

        

       
        <!-- 今日的客流数据表 -->
        <div class="historyWrap">
            <!-- 文字提示 -->
            <div class="tips">
                <strong>历史客流</strong>
                <el-tooltip class="item" effect="dark" content="历史客流" placement="right">
                    <i class="el-icon-search"></i>
                </el-tooltip>    
            </div>
            <hr>
            <!-- 这里放数据展示图 -->
            <div class="dataImg">

            </div>    
        </div>
 <!-- 今日的客流数据表 -->
        <div class="historyWrap">
            <!-- 文字提示 -->
            <div class="tips">
                <strong>历史批次</strong>
                <el-tooltip class="item" effect="dark" content="历史批次" placement="right">
                    <i class="el-icon-search"></i>
                </el-tooltip>    
            </div>
            <hr>
            <!-- 这里放数据展示图 -->
            <div class="dataImg">

            </div>
        </div>



  </div>
  
</template>


<script>
export default {
  name: 'history',
  data () {
    return {
      restaurants: [],
      store: '',
      date: ''

      

    }
  },methods:{
    querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "重庆某某店"},
          { "value": "北京某某店"},
          { "value": "万州某某店"},
          { "value": "上海某某店"},
          { "value": "广州某某店"},
          { "value": "深圳某某店"},
        ];
      },
    handleSelect(item) {
        console.log(item);
    }
  },   
    mounted() {
        //   加载店铺名称
          this.restaurants = this.loadAll();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .selectStoreDate{
        display: flex;
        align-items: center;
        height: 50px;
        padding-left: 10px;
    }
    .selectStoreDate strong{
        margin-right: 10px;
    }
    .selectStoreDate .el-autocomplete{
        width: 150px;
        margin-right: 20px;
    }

    /* 选择时间段 */
    .block .el-date-picker{
        width: 200px;
    }


    .historyWrap{
        margin: 10px;
    }
    /* 小提示 */
    .tips{
        text-align: left;
        padding: 10px;
    }
    .tips strong{
        color: #00ADEF;
    }


    /* 数据图片 */
    .dataImg{
        width: 100%;
        height: 300px;
        background-color: #00ADEF;
    }
</style>