<template>
  <div class="dailyPassengerFlow">
        <!-- 选者查询的店铺和日期 -->
        <div class="selectStoreDate">
            <!-- 选择经销商 -->
            <strong>选择经销商</strong>
            <div @click="open()">
                <el-input v-model="store" placeholder="请输入内容"></el-input>
            </div>
            <!-- 选择日期 -->
            <strong>选择日期</strong>
            <div class="block">
                <el-date-picker
                v-model="date"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
    <div class="today">
        <!-- 小提示tips  -->
        <div class="tips">
            <strong>当日天气</strong>
            <el-tooltip class="item" effect="dark" content="根据当天天气，辅助分析客流量数据" placement="right">
                <i class="el-icon-search"></i>
            </el-tooltip>
        </div>

        <!-- 分割线 -->
        <hr />

        <!-- 天气预报 -->
        <div class="weather">
            <div id="weather-v2-plugin-standard"></div>
        </div>

        <!-- 分析的数据 -->
        <div class="data">
            <!-- 详细数据分析 -->
            <div class="detail">
                <div>
                <p class="fontSize">5</p>
                <p class="bottom">总客流（人）
                    <el-tooltip class="item" effect="dark" content="根据当天天气，辅助分析客流量数据" placement="right">
                        <i class="el-icon-search"></i>
                    </el-tooltip>
                </p>
                </div>
                <div>
                <p class="fontSize">8.75</p>
                <p>回头客（人）
                    <el-tooltip class="item" effect="dark" content="根据当天天气，辅助分析客流量数据" placement="right">
                        <i class="el-icon-search"></i>
                    </el-tooltip>
                </p>
                </div>
            </div>
    </div>


            <!-- 今日的客流数据表 -->
            <div class="todayData">
                <div class="tips">
                <strong>当日客流统计</strong>
                <el-tooltip class="item" effect="dark" content="流量展示" placement="right">
                    <i class="el-icon-search"></i>
                </el-tooltip>
                </div>
                <hr>
                <p>单日客流分布</p>
                <!-- <img src="@/assets/pic1.png" alt=""> -->
                <div class="dataImg">

                </div>
            </div>
            <!-- 最近30天的客流数据表 -->
            <div class="days30Data">
                <div class="tips">
                <strong>过去30天客流</strong>
                <el-tooltip class="item" effect="dark" content="过去30天客流" placement="right">
                    <i class="el-icon-search"></i>
                </el-tooltip>
                </div>
                <hr>
                <p>过去30天客流</p>
                <!-- <img src="@/assets/pic1.png" alt=""> -->
                <div class="dataImg">

                </div>
            </div>

            <!-- 底部的两个数据展示 -->
            <div class="display_flex">
            <!-- 客户平均停留时间 -->
            <div class="avgTime">
                <div class="tips">
                <strong>客户平均停留时间</strong>
                <el-tooltip class="item" effect="dark" content="客户平均停留时间" placement="right">
                    <i class="el-icon-search"></i>
                </el-tooltip>
                </div>
                <hr>
                <p>客户平均停留时间</p>
                <!-- <img src="@/assets/pic1.png" alt=""> -->
                <div class="dataImg">

                </div>
            </div>
            <!-- 客户平均停留时间 -->
            <div class="loudou">
                <div class="tips">
                <strong>客户平均停留时间</strong>
                <el-tooltip class="item" effect="dark" content="客户平均停留时间" placement="right">
                    <i class="el-icon-search"></i>
                </el-tooltip>
                </div>
                <hr>
                <p>客户平均停留时间</p>
                <!-- <img src="@/assets/pic1.png" alt=""> -->
                <div class="dataImg">

                </div>
            </div>
            </div>





        </div>

        <!-- 弹出框 -->
            <div>
                <el-dialog title="选择经销商" :visible.sync="dialogTableVisible" left :append-to-body='true' :lock-scroll='false' width="30%">
                    <div>
                        <el-input class="inline-input" v-model="store" placeholder="请输入内容"></el-input>
                        <div class="select" v-for="item in items" :key='item.Store' @click="select(item.Store)">{{item.Store}}</div>
                    </div>
                </el-dialog>
            </div>


  </div>
  
</template>


<script>
export default {
  name: 'dailyPassengerFlow',
  data () {
    return {
      store: '',
      date: '',
      dialogTableVisible: false,
      items: [
          {Store:'北京某某店'},
          {Store:'天津某某店'},
          {Store:'重庆某某店'},
          {Store:'上海某某店'},
          {Store:'深圳某某店'}
      ]
    }
  },methods:{
    // 弹出选择经销商
    open(){
        this.dialogTableVisible = true;
    },
    // 选择想要的经销商店铺
    select(value){
        this.store =value;
        this.dialogTableVisible = false;
    }
  },   
    mounted() {
        // 加载中国天气网的天气插件
        window.WIDGET = {
            CONFIG: {
                "layout": 1,
                "width": 450,
                "height": 150,
                "background": 5,
                "dataColor": "050505",
                "language": "zh",
                "borderRadius": 5,
                "key": "RBOiTRleTb"
            }
            }
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = 'https://apip.weatherdt.com/standard/static/js/weather-standard-common.js?v=2.0';
          document.body.appendChild(s);
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
        margin: 0 10px;
    }
    /* 选择经销商 */
    .select{
        height: 20px;
        display: flex;
        align-items: center;
        text-align: left;
        padding-left: 13px;
    }
    .select:hover{
        background-color: #00ADEF;
    }

    .today{
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

    /* 天气模块 */
    .weather{
        display: flex;
        justify-content: center;
    }

    /* 数据模块 */
    .data{

    }
    .data .detail{
        display: flex;
        justify-content: space-around;
    }
    .data .detail div{
        width: 49%;
        height: 120px;
        text-align: right;
        background-color: #00ADEF;
        color: white;   
        line-height: 50px;
    }
    .data .detail div p{
        margin: 5px 5px 0 0;
    }
    .fontSize{
        font-size: 30px;
    }


    /*  */
    .dataImg{
        width: 100%;
        height: 300px;
        background-color: #00ADEF;
    }
    .todayData,.days30Data{
        margin: 0 10px 0 10px;
    }
    /* 平均停留时间 */
    .avgTime{
        width: 55%;
        margin: 0 10px 0 10px;
    }
    /* 客户漏斗 */
    .loudou{
        
        width: 44%;
        margin: 0 10px 0 10px;
    }
</style>