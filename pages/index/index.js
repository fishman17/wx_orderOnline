// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
      "http://img.lanrentuku.com/img/allimg/1707/15006300952768.jpg",
      "http://img.lanrentuku.com/img/allimg/1707/15006300952768.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //	滑动动画时长1s
    //功能模块
    components: [
      {
        where: "orderSeat",
        image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
        function: "预定座位",

      },
      {
        where: "orderFood",
        image: "http://img.lanrentuku.com/img/allimg/1707/15006265929403.jpg",
        function: "点击订餐",
      },
      {
        where: "",
        image: "",
        function: "等待开发",
      },
      {
        where: "",
        image: "",
        function: "等待开发",
      },
    ],
    //新品菜
    newGoods: [
      {
        id: 0,
        image: "",
        price: 10,
        introduce: "这是第一个新品菜"
      },
      {
        id: 0,
        image: "",
        price: 10,
        introduce: "这是第二个新品菜"
      },
      {
        id: 0,
        image: "",
        price: 10,
        introduce: "这是第三个新品菜"
      },
      {
        id: 0,
        image: "",
        price: 10,
        introduce: "这是第四个新品菜"
      },

    ],
    //经典菜
    classicGoods: [
      {
        id: 0,
        image: "",
        price: 10,
        introduce: "这是第一个经典菜"
      },
      {
        id: 0,
        image: "",
        price: 10,
        introduce: "这是第二个经典菜"
      },
      {
        id: 0,
        image: "",
        price: 10,
        introduce: "这是第三个经典菜"
      },
      {
        id: 0,
        image: "",
        price: 10,
        introduce: "这是第四个经典菜"
      },

    ],
  },

  changeTo: (event) => {
    console.log(event);
    let where = event.currentTarget.dataset.where;
    console.log(where);
    if (where === "orderFood") {
      wx.switchTab({
        url: `/pages/${where}/${where}`,
      })
    } else {
      wx.navigateTo({
        // queryString 查询字符串 ?
        url: `/pages/${where}/${where}`,
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

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