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
    userInfoList: [ 
      {
        icon: '../../image/iconfont-dingdan.png',
        text: '我的订单',
        alreadRead: true,
        unreadNum: 2
      }, 
      {
        icon: '../../image/iconfont-card.png',
        text: '收货地址',
        alreadRead: false,
        unreadNum: 2
      }, 
      {
        icon: '../../images/iconfont-icontuan.png',
        text: '售后记录',
        alreadRead: false,
        unreadNum: 1
      }, 
      {
        icon: '../../images/iconfont-shouhuodizhi.png',
        text: '消息通知',
        alreadRead: true,
        unreadNum: 1
      }, 
      {
        icon: '../../images/iconfont-kefu.png',
        text: '联系客服'
      }, 
      {
        icon: '../../images/iconfont-help.png',
        text: '关于我们'
      }]
    
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