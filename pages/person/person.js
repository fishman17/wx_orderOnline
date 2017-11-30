// pages/peoson/person.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfoList: {
     first: [{
        icon: '../../image/iconfont-dingdan.png',
        text: '优惠券',
        alreadRead: true,
        unreadNum: 2,
        mes: "",
      }, 
      {
        icon: '../../image/iconfont-card.png',
        text: '福利社',
        alreadRead: false,
        unreadNum: 0,
        mes: "养盒马，能赚钱",
      }, 
      {
        icon: '../../images/iconfont-icontuan.png',
        text: '售后记录',
        alreadRead: true,
        unreadNum: 1,
        mes: "得6元，可叠加",
      }, ],

     second:[
       {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '银行卡活动',
        alreadRead: false,
        unreadNum: 0,
        mes: "浦发满50减10",
      }, 
      {
        icon: '../../images/iconfont-kefu.png',
        text: '电子券',
        alreadRead: false,
        unreadNum: 0,
        mes: "",
      }, 
      {
        icon: '../../images/iconfont-help.png',
        text: '礼品卡',
        alreadRead: false,
        unreadNum: 0,
        mes: "电子卡赠亲友",
      },
      {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '兑换优惠码',
        alreadRead: false,
        unreadNum: 0,
        mes: "",
      }, 
      {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '盒马小蜜',
        alreadRead: false,
        unreadNum: 0,
        mes: "客观，吐槽轻点",
      }, 
      {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '评价',
        alreadRead: false,
        unreadNum: 0,
        mes: "",
      }, 
    ],
    third: [
      {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '盒马门店',
        alreadRead: false,
        unreadNum: 0,
        mes: "",
      }, 
      {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '设置',
        alreadRead: false,
        unreadNum: 0,
        mes: "",
      }, 
    ]
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用应用实例的方法获取全局数据

    // console.log(app.globalData.userInfo);
    if (!app.globalData.userInfo) {
      console.log("从全局global获取到了");
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }else {
      console.log("failed");
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log("首次从global对象获取失败");
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },

  //button按钮 设置bindgetuserinfo可以加载用户信息  现在没加
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    console.log(this.data.userInfo);
  },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})