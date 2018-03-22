//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              // 用户已经同意小程序使用地理位置功能，后续调用 接口不会弹窗询问
              // wx.startRecord()
            }
          })
        }
      }
    })
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res.model)
        // console.log(res.pixelRatio)
        // console.log(res.windowWidth)
        // console.log(res.windowHeight)
        // console.log(res.language)
        // console.log(res.version)
        // console.log(res.platform)
        wx.setStorageSync('phoneWidth', res.windowWidth)
        wx.setStorageSync('phoneHeight', res.windowHeight)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})