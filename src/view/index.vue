<template>
  <div class="container">
    <span>新闻列表</span>
    <span @click="toAdd">新增</span>
    <div class="content">
      <div v-for="item in dataList" class="item">
        <div class="btn"><span @click="toNewsDetail(item._id)">编辑</span><span @click="delNews(item._id)">删除</span></div>
        <p class="title">{{item.title}}</p>
        <p class="content">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: '',
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    ...mapActions(['testAction']),
    delNews(id) {
      console.log(id)
      this.$ajax.delNews({
        params: {
          _id: id
        },
        headers: {
          token: this.$store.state.token
        }
      }).then((res) => {
        if (res.data.code === 200) {
          this.$message({
              message: res.data.msg,
              type: 'success'
            });
          this.init()
        } else {
          this.$message.error(res.data.msg);
        }
      })
    },
    toAdd() {
      this.$router.push({name: 'addNews'})
    },
    init() {
      this.$ajax.selectNews({
        headers: {
          token: this.$store.state.token
        }
      }).then((res) => {
        if (res.data.code === 200) {
          this.dataList = res.data.data
        } else {
          this.$message.error(res.data.msg);
        }
      })
    },
    toNewsDetail(id) {
      this.$router.push({name: 'addNews', query: {id}})
    }
    },
  created() {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$titleColor: blue;
.container{color: #565698;
  // .title{color: $titleColor; font-size: 2rem; width: 20rem; background-color: #eee; display: inline-block; height: 10rem}
  .content{text-align: left; padding: .4rem;
    .item{box-shadow: 1px 1px 1px 1px #eee; position: relative;
      .btn{position: absolute; right: 0; top: 0; font-size: 16px;
        span{margin: 0 .2rem; color: orange;}
      }
      .title{font-size: 18px;}
      .content{font-size: .2rem;}
    }
  }
}
</style>
