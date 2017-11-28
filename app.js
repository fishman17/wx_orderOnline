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
  },
  onShow(options) {
  },
  onHide() {
  },
  onError(error) {
  },

  globalData: {
    classifyList: {
      myFruits: [
        [
          {
            name: "达利园",
            price: 38,
            url: "",
            introduce: "12341",
            stock: true,
            id: 1
          },
          {
            name: "旺旺",
            price: 58,
            url: "",
            introduce: "12341",
            stock: true,
            id: 19,
          },
          {
            name: "徐福记",
            price: 88,
            url: "",
            introduce: "12341",
            stock: true,
            id: 2
          },
          {
            name: "煎饼果子",
            price: 33,
            url: "",
            introduce: "12341",
            stock: true,
            id: 18
          },


        ],
        [
          {
            name: "豆奶",
            price: 18,
            url: "",
            introduce: "12341",
            stock: true,
            id: 3
          },
          {
            name: "绿茶",
            price: 58,
            url: "",
            introduce: "12341",
            stock: true,
            id: 4
          }
        ],
        [
          {
            name: "安利",
            price: 18,
            url: "",
            introduce: "12341",
            stock: true,
            id: 5
          },
          {
            name: "脑白金",
            price: 8,
            url: "",
            introduce: "12341",
            stock: true,
            id: 6
          }
        ],
        [{
          name: "五粮液",
          price: 18,
          url: "",
          introduce: "12341",
          stock: true,
          id: 7
        },
        {
          name: "茅台",
          price: 8,
          url: "",
          introduce: "12341",
          stock: true,
          id: 8
        }]
      ],
      myMeat: [
        [
          {
            name: "东南蜜橘",
            price: 38,
            url: "",
            introduce: "12341",
            stock: true,
            id: 11
          },
          {
            name: "泰国龙眼",
            price: 58,
            url: "",
            introduce: "12341",
            stock: true,
            id: 12,
          },
          {
            name: "金菠萝",
            price: 88,
            url: "",
            introduce: "12341",
            stock: true,
            id: 13
          },
          {
            name: "木瓜",
            price: 33,
            url: "",
            introduce: "12341",
            stock: true,
            id: 14
          },


        ],
        [
          {
            name: "面条",
            price: 18,
            url: "",
            introduce: "12341",
            stock: true,
            id: 15
          },
          {
            name: "小麦粉",
            price: 58,
            url: "",
            introduce: "12341",
            stock: true,
            id: 16
          }
        ],
        [
          {
            name: "纯芝麻酱",
            price: 18,
            url: "",
            introduce: "12341",
            stock: true,
            id: 17
          },
          {
            name: "香菇酱",
            price: 8,
            url: "",
            introduce: "12341",
            stock: true,
            id: 21
          }
        ],
        [{
          name: "陈年老醋",
          price: 18,
          url: "",
          introduce: "12341",
          stock: true,
          id: 7
        },
        {
          name: "酱油",
          price: 8,
          url: "",
          introduce: "12341",
          stock: true,
          id: 8
        }]
      ],
    },
    userInfo: {},
    carts: [{
      name: "达利园",
      price: 38,
      url: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
      introduce: "12341",
      stock: true,
      id: 1
    },
    {
      name: "热伤风",
      price: 23,
      url:"http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
      introduce: "12341",
      stock: true,
      id: 2
    },],
    cartTotal: 0,
    cartTotalPrice: 0,
  },

})
