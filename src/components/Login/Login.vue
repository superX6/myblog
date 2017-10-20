<template>
  <div>
    <div class="login-wrap" v-show="showLogin">
      <h3>登录</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="account">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button @click="login">登55录</button>
      <span @click="ToRegister">没有账号？马5上注册</span>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="newAccount">
      <input type="password" placeholder="请输入密码" v-model="newPassword">
      <button @click="register">注册</button>
      <span @click="ToLogin">已有账号？马上登录</span>
    </div>
  </div>
</template>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .login-wrap, .register-wrap
    text-align: center
    input
      display: block
      width: 250px
      height: 40px
      line-height: 40px
      margin: 0 auto 10px
      outline: none
      border: 1px solid #888
      padding: 10px
      box-sizing: border-box
    h3
      font-size: $font-size-large
    p
      color: red
    button
      display: block
      width: 250px
      height: 40px
      line-height: 40px
      margin: 0 auto 5px
      border: none
      background-color: #41b883
      color: #fff
      font-size: $font-size-medium-x
    span
      cursor: pointer
      &:hover
        color: #41b883
</style>

<script>
  import {createUser, checkAccount} from 'api/user'

  export default{
    data () {
      return {
        showLogin: true,
        showRegister: false,
        showTishi: false,
        tishi: '登录成功',
        account: '',
        password: '',
        newAccount: '',
        newPassword: ''
      }
    },
    methods: {
      ToRegister () {
        this.showLogin = false
        this.showRegister = true
      },
      ToLogin () {
        this.showRegister = false
        this.showLogin = true
      },
      register () {
        console.log('注册用户名:' + this.newAccount)
        console.log('密码：' + this.newPassword)
        let user = {
          account: this.newAccount,
          password: this.newPassword
        }
        createUser(user).then((res) => {
          console.log(res)
        })
      },
      login () {
        console.log('登录用户名:' + this.account)
        console.log('密码：' + this.password)
        let user = {
          account: this.account,
          password: this.password
        }
        checkAccount(user).then((res) => {
          var result = res.data.ERROK
          console.log(result)
          if (result === 1) {
            this.showTishi = true
            this.tishi = '登录成功'
          } else {
            console.log('error')
            this.account = ''
            this.password = ''
            this.showTishi = true
            this.tishi = '用户名不存在'
          }
        })
      }
    }
  }
</script>