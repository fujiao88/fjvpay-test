<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="ceshi">
      <button @click="isShow">点击测试弹窗</button>
    </div>
    <vpay    
      ref="pays"    
      v-model="show"               
      @close="close"    
      @forget="forget"    
      @input-end="inputEnd"
    ></vpay>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
        show:false,
    }
  },
  methods:{
    isShow(){
      this.show = true;
    },
    // 取消支付弹窗关闭的回调
    close() {
        console.log()
    },

    // 忘记密码跳转
    forget () {
        console.log('触发forge事件');
    },
    // 密码输入完成回调
    inputEnd (val) {
        setTimeout(() => {
            // 模拟支付成功的结果
            if (val == 111111) {
                // 调用插件的$success方法告知插件支付成功
                // 并且在then方法里面可以写支付成功的回调，例如可以跳转支付结果页面
                this.$refs.pays.$success().then(res => {
                    console.log('支付成功')
                    this.$router.push('/success')
                })
            // 模拟支付失败的结果    
            } else {
                this.$refs.pays.$fail()
            }
        }, 1000)
    },
  }
}
</script>
<style scoped>
  .ceshi button{
    background: sandybrown;
    width: 130px;
    height: 35px;
    border-radius: 10px;
    border: 0;
    font-size: 16px;
    color: #fff;
  }
</style>