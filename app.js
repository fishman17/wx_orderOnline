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
            id: 1,
            num:1,
          },
          {
            name: "旺旺",
            price: 58,
            url: "",
            introduce: "12341",
            stock: true,
            id: 19, 
            num:1,
          },
          {
            name: "徐福记",
            price: 88,
            url: "",
            introduce: "12341",
            stock: true,
            id: 2,
            num:1,
          },
          {
            name: "煎饼果子",
            price: 33,
            url: "",
            introduce: "12341",
            stock: true,
            id: 18,
            num:1,
          },
          {
            name: "煎饼果子",
            price: 33,
            url: "",
            introduce: "12341",
            stock: true,
            id: 18,
            num:1,
          },

          {
            name: "煎饼果子",
            price: 33,
            url: "",
            introduce: "12341",
            stock: true,
            id: 18,
            num:1,
          },

          {
            name: "煎饼果子",
            price: 33,
            url: "",
            introduce: "12341",
            stock: true,
            id: 18,
            num:1,
          },



        ],
        [
          {
            name: "豆奶",
            price: 18,
            url: "",
            introduce: "12341",
            stock: true,
            id: 3,
            num:1,
          },
          {
            name: "绿茶",
            price: 58,
            url: "",
            introduce: "12341",
            stock: true,
            id: 4,
            num:1,
          }
        ],
        [
          {
            name: "安利",
            price: 18,
            url: "",
            introduce: "12341",
            stock: true,
            id: 5,
            num:1,
          },
          {
            name: "脑白金",
            price: 8,
            url: "",
            introduce: "12341",
            stock: true,
            id: 6,
            num:1,
          }
        ],
        [{
          name: "五粮液",
          price: 18,
          url: "",
          introduce: "12341",
          stock: true,
          id: 7,
          num:1,
        },
        {
          name: "茅台",
          price: 8,
          url: "",
          introduce: "12341",
          stock: true,
          id: 8,
          num:1,
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
            id: 11,
            num:1,
          },
          {
            name: "泰国龙眼",
            price: 58,
            url: "",
            introduce: "12341",
            stock: true,
            id: 12,
            num:1,
          },
          {
            name: "金菠萝",
            price: 88,
            url: "",
            introduce: "12341",
            stock: true,
            id: 13,
            num:1,
          },
          {
            name: "木瓜",
            price: 33,
            url: "",
            introduce: "12341",
            stock: true,
            id: 14,
            num:1,
          },


        ],
        [
          {
            name: "面条",
            price: 18,
            url: "",
            introduce: "12341",
            stock: true,
            id: 15,
            num:1,
          },
          {
            name: "小麦粉",
            price: 58,
            url: "",
            introduce: "12341",
            stock: true,
            id: 16,
            num:1,
          }
        ],
        [
          {
            name: "纯芝麻酱",
            price: 18,
            url: "",
            introduce: "12341",
            stock: true,
            id: 17,
            num:1,
          },
          {
            name: "香菇酱",
            price: 8,
            url: "",
            introduce: "12341",
            stock: true,
            id: 21,
            num:1,
          }
        ],
        [{
          name: "陈年老醋",
          price: 18,
          url: "",
          introduce: "12341",
          stock: true,
          id: 7,
          num:1,
        },
        {
          name: "酱油",
          price: 8,
          url: "",
          introduce: "12341",
          stock: true,
          id: 8,
          num:1,
        }]
      ],
      myTrump: [
        {
          name: "精选小排",
          price: 38,
          url: "",
          introduce: "12341",
          stock: true,
          id: 22,
          num:1,
        },
        {
          name: "江西赣南脐橙",
          price: 58,
          url: "",
          introduce: "12341",
          stock: true,
          id: 23,
          num:1,
        },
        {
          name: "盒马鲜生大米",
          price: 44,
          url: "",
          introduce: "12341",
          stock: true,
          id: 24,
          num:1,
        },
      ],
      classicGoods: [
        {
          id: 0,
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          price: 10,
          introduce: "这是第一个经典菜"
        },
        {
          id: 0,
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          price: 10,
          introduce: "这是第二个经典菜"
        },
        {
          id: 0,
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          price: 10,
          introduce: "这是第三个经典菜"
        },
        {
          id: 0,
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          price: 10,
          introduce: "这是第四个经典菜"
        },
  
      ],
      newGoods: [
        {
          id: 0,
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          price: 10,
          introduce: "这是第一个新品菜"
        },
        {
          id: 0,
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          price: 10,
          introduce: "这是第二个新品菜"
        },
        {
          id: 0,
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          price: 10,
          introduce: "这是第三个新品菜"
        },
        {
          id: 0,
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          price: 10,
          introduce: "这是第四个新品菜"
        },
  
      ],
      components: [
        {
          where: "orderSeat",
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          function: "水果专场",
  
        },
        {
          where: "orderFood",
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          function: "精选好货",
        },
        {
          where: "",
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          function: "新人礼包",
        },
        {
          where: "",
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          function: "邀请好友",
        },
        {
          where: "",
          image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
          function: "鲜人一步",
        },
      ],
      headLines: [
        {
          head: "盒马集市",
          body: "放慢脚步，来一场旅行",
          img:"../../assets/images/landscape.png",
        },
        {
          head: "盒马集市",
          body: "放慢脚步，来一场旅行",
          img:"../../assets/images/landscape.png",
        },
        {
          head: "盒马集市",
          body: "放慢脚步，来一场旅行",
          img:"../../assets/images/landscape.png",
        },
    
      ],
    },
    userInfo: {},
    carts: [
    //   {
    //   name: "达利园",
    //   price: 38,
    //   url: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
    //   introduce: "12341",
    //   stock: true,
    //   id: 1,
    //   num:1,
    // },
    // {
    //   name: "热伤风",
    //   price: 23,
    //   url:"http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
    //   introduce: "12341",
    //   stock: true,
    //   id: 2,
    //   num:1,
    // },
  ],
    cartTotal: 0,
    cartTotalPrice: 0,
  },

})
