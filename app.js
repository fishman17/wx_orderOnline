App({
  onLaunch (options) {
      // 登录
      wx.login({
        success: res => {
          console.log(res);
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
      // 获取用户信息
      wx.getSetting({
        success: res => {
          console.log(res);
          console.log('得到用户信息成功');
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                console.log(res.userInfo);
                console.log(2);
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
  },
  onShow (options) {
  },
  onHide () {
  },
  onError (error) {
  },
 
  globalData: {
  userInfo: {},
  }
})
