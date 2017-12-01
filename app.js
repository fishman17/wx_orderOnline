App({
  onLaunch(options) {
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

    // wx.request({
    //   url: 'http://www.easy-mock.com/mock/5a1ffb42583969285ab22bb7/orderOnline/orderOnline',
    //   complete: res => {
    //     console.log(res);
    //     this.globalData.classifyList = res.data;
    //   },
    // })
  },
  onShow(options) {
  },
  onHide() {
  },
  onError(error) {
  },

  globalData: {
    classifyList: {},  //商品列表
    userInfo: {},     //用户信息
    carts: [],       //购物车信息
    cartTotal: 0,     //购物车数量
    cartTotalPrice: 0,  //购物车价值
    cartAllIn: false,   //购物车是否全选
  },

})
