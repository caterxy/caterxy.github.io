var app = new Vue({
  el: '#HorrorHospital',
  data: {
    isStart:true,
    title: '恐怖医院',
    node:0,
    body:[
    {"topic":"题目1","options":[{"option":"选项1","answer":"答案1"},{"option":"选项2","answer":"答案1"},{"option":"选项3","answer":"答案1"}]},
    {"topic":"题目2","options":[{"option":"选项1","answer":"答案1"},{"option":"选项2","answer":"答案1"},{"option":"选项1","answer":"答案1"}]},
    {"topic":"题目3","options":[{"option":"选项1","answer":"答案1"},{"option":"选项3","answer":"答案1"},{"option":"选项1","answer":"答案1"}]},
    {"topic":"题目4","options":[{"option":"选项1","answer":"答案1"},{"option":"选项4","answer":"答案1"},{"option":"选项1","answer":"答案1"}]},
    {"topic":"题目5","options":[{"option":"选项1","answer":"答案1"},{"option":"选项5","answer":"答案1"},{"option":"选项1","answer":"答案1"}]},
    {"topic":"题目6","options":[{"option":"选项1","answer":"答案1"},{"option":"选项6","answer":"答案1"},{"option":"选项1","answer":"答案1"}]},
    {"topic":"题目7","options":[{"option":"选项1","answer":"答案1"},{"option":"选项7","answer":"答案1"},{"option":"选项1","answer":"答案1"}]}
]
  },
  methods:{
    start:function () {
        this.isStart=false;

    },
    next:function () {
        this.node++
    }
  }
})


// 显示标题
// 点击标题
// -开始游戏
// 输出第一题
// 点击答案
// 判断回答
// 输出第二题/输出结果



