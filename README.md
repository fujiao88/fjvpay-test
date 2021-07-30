# vpay

vue移动端支付密码窗插件

### demo地址

[demo演示页面](https://fujiao88.github.io/fjvpay-test/dist/index.html )

[demo演示页面](https://chinaberg.github.io/vpay/dist/#/, '支付密码弹窗demo演示页面')

### 插件的安装

##### NPM

```javascript
npm i fjvpay
```

##### 引入插件

```javascript
import Vue from 'vue';
import vpay from 'fjvpay';

Vue.use(vpay);
```

##### 基本用法

```vue
<vpay ref="pays"
    v-model="show"           
    @close="close"
    @forget="forget"
    @input-end="inputEnd"
></vpay>
```

##### Attributes

| 参数        | 说明                     | 类型    | 默认值         |
| ----------- | ------------------------ | ------- | -------------- |
| v-model     | 密码框的显示隐藏         | Boolean | false          |
| psd-length  | 密码的位数               | Number  | 6              |
| ref         | 获取当前插件实例         | String  | -              |
| title       | 弹窗标题                 | String  | 请输入支付密码 |
| paying-text | 正在支付的文字提示       | String  | 正在支付       |
| finish-text | 支付完成的文字提示       | String  | 支付成功       |
| duration    | 支付成功提示语的显示时间 | Number  | 500            |

##### EVENT

| 事件名    | 说明                     | 参数              |
| --------- | ------------------------ | ----------------- |
| input-end | 密码输入完成后的回调函数 | value：输入的密码 |
| close     | 密码弹窗关闭后的回调函数 | -                 |
| forget    | 点击忘记密码的回调函数   | -                 |

##### fjvpay内部方法

| 方法名  | 说明                     | 参数 |
| ------- | ------------------------ | ---- |
| success | 通知插件支付成功         | -    |
| fail    | 密码弹窗关闭后的回调函数 | -    |

##### 用法示例：

支付结果成功：

```javascript
this.$refs.pays.success(true).then(res => {
    console.log('支付成功')
    this.$router.push('/success')
})
```

支付结果失败：

```javascript
this.$refs.pays.fail('可以自定义错误提示，默认：支付密码错误')  
```



# fjvpay-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
