<template>
  <div class="history">
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
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
                </el-date-picker>
            </div>
        </div>

        

       
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
            <p>历史客流</p>
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
            <p>历史批次</p>
            <!-- 这里放数据展示图 -->
            <div class="dataImg">

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
  name: 'history',
  data () {
    return {
      store: '',
      date: '',
      pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: '',
        dialogTableVisible: false,
        items: [
            {Store:'北京某某店'},
            {Store:'天津某某店'},
            {Store:'重庆某某店'},
            {Store:'上海某某店'},
            {Store:'深圳某某店'}
        ]
      };    
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

    }
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
        margin:0 10px;
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