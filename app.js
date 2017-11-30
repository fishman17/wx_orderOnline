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
            name: "Drisoll's秘鲁蓝莓125g",
            price: 38,
            url: "http://img5.imgtn.bdimg.com/it/u=1722043744,1913279407&fm=27&gp=0.jpg",
            introduce: "果肉饱满，酸甜汁多",
            stock: true,
            id: 1,
            num:1,
          },
          {
            name: "秘鲁蓝莓一盒",
            price: 58,
            url: "http://img3.imgtn.bdimg.com/it/u=3026440624,1076817635&fm=200&gp=0.jpg",
            introduce: "酸甜爆浆",
            stock: true,
            id: 19, 
            num:1,
          },
          {
            name: "遇难黑莓一盒",
            price: 88,
            url: "http://img2.imgtn.bdimg.com/it/u=1548367567,1492296517&fm=200&gp=0.jpg",
            introduce: "果肉细腻，富含花青素",
            stock: true,
            id: 2,
            num:1,
          },
          {
            name: "秋水草莓",
            price: 33,
            url: "http://img0.imgtn.bdimg.com/it/u=1449409169,4094632757&fm=27&gp=0.jpg",
            introduce: "清爽可口",
            stock: true,
            id: 18,
            num:1,
          },
          {
            name: "红树莓125g",
            price: 33,
            url: "http://img2.imgtn.bdimg.com/it/u=1236873436,631836526&fm=200&gp=0.jpg",
            introduce: "芳香味浓，富含大量VC",
            stock: true,
            id: 101,
            num:1,
          },

          {
            name: "南京红颜草莓350g",
            price: 33,
            url: "http://img5.imgtn.bdimg.com/it/u=2691205849,2542473986&fm=27&gp=0.jpg",
            introduce: "进口品种，蜜蜂授粉，个大美味",
            stock: true,
            id: 102,
            num:1,
          },

          {
            name: "智力蓝莓1盒",
            price: 33,
            url: "http://img5.imgtn.bdimg.com/it/u=3327451002,2783055117&fm=200&gp=0.jpg",
            introduce: "吃了更聪明",
            stock: true,
            id: 103,
            num:1,
          },



        ],
        [
          {
            name: "高峰蜜橘300g",
            price: 18,
            url: "http://img1.imgtn.bdimg.com/it/u=2748777521,51045488&fm=27&gp=0.jpg",
            introduce: "汁泡黄色",
            stock: true,
            id: 3,
            num:1,
          },
          {
            name: "桂林金桔400g",
            price: 58,
            url: "http://img5.imgtn.bdimg.com/it/u=1210387784,2178233901&fm=27&gp=0.jpg",
            introduce: "柔软多汁",
            stock: true,
            id: 4,
            num:1,
          }
        ],
        [
          {
            name: "泰国菠萝",
            price: 18,
            url: "http://img4.imgtn.bdimg.com/it/u=2411381509,3186134311&fm=27&gp=0.jpg",
            introduce: "澳洲馈赠",
            stock: true,
            id: 5,
            num:1,
          },
          {
            name: "越南火龙果",
            price: 8,
            url: "http://img0.imgtn.bdimg.com/it/u=1871301757,1380217211&fm=200&gp=0.jpg",
            introduce: "鲜嫩多汁",
            stock: true,
            id: 6,
            num:1,
          }
        ],
        [
          {
          name: "新疆阿克苏冰糖心苹果4个",
          price: 18,
          url: "http://img2.imgtn.bdimg.com/it/u=2024107151,4103703547&fm=200&gp=0.jpg",
          introduce: "天山雪水灌溉",
          stock: true,
          id: 7,
          num:1,
        },
        {
          name: "Dole秋香羊脂梨",
          price: 8,
          url: "http://img5.imgtn.bdimg.com/it/u=2273958792,1993252073&fm=200&gp=0.jpg",
          introduce: "色如羊脂",
          stock: true,
          id: 8,
          num:1,
        }]
      ],
      myMeat: [
        [
          {
            name: "维族大肉220g",
            price: 38,
            url: "http://img2.imgtn.bdimg.com/it/u=1787118719,3802301629&fm=200&gp=0.jpg",
            introduce: "源自内门古",
            stock: true,
            id: 211,
            num:1,
          },
          {
            name: "新西兰羊肉片300g",
            price: 58,
            url: "http://img5.imgtn.bdimg.com/it/u=617344303,3843154976&fm=200&gp=0.jpg",
            introduce: "原材料产品，无添加",
            stock: true,
            id: 212,
            num:1,
          },
          {
            name: "苏尼特羊肉片300g",
            price: 88,
            url: "http://img0.imgtn.bdimg.com/it/u=3485359832,1211578400&fm=200&gp=0.jpg",
            introduce: "火锅刷肉系列",
            stock: true,
            id: 213,
            num:1,
          },
          {
            name: "崇明顾总山羊肉片",
            price: 33,
            url: "http://img1.imgtn.bdimg.com/it/u=3750705386,142237235&fm=200&gp=0.jpg",
            introduce: "不一般的口感",
            stock: true,
            id: 214,
            num:1,
          },
          {
            name: "冰鲜白山羊火锅肉片",
            price: 33,
            url: "http://img3.imgtn.bdimg.com/it/u=432666070,282012017&fm=27&gp=0.jpg",
            introduce: "不一般的口感",
            stock: true,
            id: 214,
            num:1,
          },



        ],
        [
          {
            name: "冰鲜山羊肉600g",
            price: 18,
            url: "http://img5.imgtn.bdimg.com/it/u=3856743109,2457540194&fm=200&gp=0.jpg",
            introduce: "来自崇明生态饲养",
            stock: true,
            id: 215,
            num:1,
          },
          {
            name: "山羊肉后腿500g",
            price: 58,
            url: "http://img1.imgtn.bdimg.com/it/u=608974378,3595466787&fm=27&gp=0.jpg",
            introduce: "原部位切割",
            stock: true,
            id: 216,
            num:1,
          }
        ],
        [
          {
            name: "澳洲进口牛肉600g",
            price: 18,
            url: "http://img0.imgtn.bdimg.com/it/u=2793242116,1536620262&fm=200&gp=0.jpg",
            introduce: "可追溯，鲜美",
            stock: true,
            id: 217,
            num:1,
          },
          {
            name: "黄牛肉",
            price: 8,
            url: "http://img0.imgtn.bdimg.com/it/u=425830401,1351546881&fm=27&gp=0.jpg",
            introduce: "精选肉片，质量保证",
            stock: true,
            id: 221,
            num:1,
          }
        ],
        [{
          name: "澳洲牛排500g",
          price: 18,
          url: "http://img0.imgtn.bdimg.com/it/u=3175552564,4079518200&fm=11&gp=0.jpg",
          introduce: "分割保鲜，唯美价优",
          stock: true,
          id: 207,
          num:1,
        },
        {
          name: "江西牛排",
          price: 8,
          url: "http://img5.imgtn.bdimg.com/it/u=1042801157,2278232088&fm=200&gp=0.jpg",
          introduce: "190年品牌",
          stock: true,
          id: 208,
          num:1,
        }]
      ],
      myTrump: [
        {
          name: "精选小排",
          price: 38,
          url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1133216910,566432980&fm=200&gp=0.jpg",
          introduce: "肉质金品",
          stock: true,
          id: 22,
          num:1,
        },
        {
          name: "江西赣南脐橙",
          price: 58,
          url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1076656356,2087871613&fm=27&gp=0.jpg",
          introduce: "唯美价廉，味道极甜！",
          stock: true,
          id: 23,
          num:1,
        },
        {
          name: "盒马鲜生大米",
          price: 44,
          url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3929007951,3932537340&fm=27&gp=0.jpg",
          introduce: "优选大米，品质新鲜",
          stock: true,
          id: 24,
          num:1,
        },
      ],
      classicGoods: [
        {
          id: 0,
          image: "http://img3.imgtn.bdimg.com/it/u=3789397783,208246766&fm=27&gp=0.jpg",
          price: 10,
          introduce: "老姜150g"
        },
        {
          id: 0,
          image: "http://img4.imgtn.bdimg.com/it/u=4214741646,1190323112&fm=27&gp=0.jpg",
          price: 10,
          introduce: "甜玉米"
        },
        {
          id: 0,
          image: "http://img2.imgtn.bdimg.com/it/u=2857298756,1804536814&fm=27&gp=0.jpg",
          price: 10,
          introduce: "崇明生菜350g"
        },
        {
          id: 0,
          image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3190536422,2820621350&fm=200&gp=0.jpg",
          price: 10,
          introduce: "精品蒜头150g"
        },
  
      ],
      newGoods: [
        {
          id: 0,
          image: "http://img5.imgtn.bdimg.com/it/u=2026433362,797722357&fm=27&gp=0.jpg",
          price: 10,
          introduce: "悠然奇异果上新200g"
        },
        {
          id: 0,
          image: "http://img0.imgtn.bdimg.com/it/u=2630578464,2062364116&fm=27&gp=0.jpg",
          price: 10,
          introduce: "澳大利亚冬瓜500g"
        },
        {
          id: 0,
          image: "http://img4.imgtn.bdimg.com/it/u=4014571429,3627849787&fm=27&gp=0.jpg",
          price: 10,
          introduce: "鲁花5s压缩花生油5L"
        },
        {
          id: 0,
          image: "http://img5.imgtn.bdimg.com/it/u=3982444478,3012827299&fm=200&gp=0.jpg",
          price: 10,
          introduce: "SanBenedetto圣水1瓶"
        },
  
      ],
      components: [
        {
          where: "myFruits",
          image: "http://img1.imgtn.bdimg.com/it/u=3652320371,2037688169&fm=214&gp=0.jpg",
          function: "水果专场",
  
        },
        {
          where: "myMeat",
          image: "http://img0.imgtn.bdimg.com/it/u=1715027981,3608301293&fm=27&gp=0.jpg",
          function: "精选好货",
        },
        {
          where: "",
          image: "http://img0.imgtn.bdimg.com/it/u=695961550,871723742&fm=27&gp=0.jpg",
          function: "新人礼包",
        },
        {
          where: "",
          image: "http://img2.imgtn.bdimg.com/it/u=3262600867,299210035&fm=200&gp=0.jpg",
          function: "邀请好友",
        },
        {
          where: "",
          image: "http://img5.imgtn.bdimg.com/it/u=420736155,2609800928&fm=27&gp=0.jpg",
          function: "鲜人一步",
        },
      ],
      headLines: [
        {
          head: "盒马集市",
          body: "放慢脚步，来一场快乐购物",
          img:"http://img3.imgtn.bdimg.com/it/u=3232620219,3959665738&fm=27&gp=0.jpg",
        },
        {
          head: "盒马集市",
          body: "这鸡腿，吃的天昏地暗!",
          img:"http://img2.imgtn.bdimg.com/it/u=1693189199,302322495&fm=200&gp=0.jpg",
        },
        {
          head: "盒马集市",
          body: "用一碗药膳排骨汤冬补",
          img:"http://img2.imgtn.bdimg.com/it/u=2337572530,363417736&fm=27&gp=0.jpg"
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
