// pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "../../assets/images/landscape.png",
      "../../assets/images/landscape.png",
      "../../assets/images/landscape.png",
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    interval1: 2000,
    duration: 1000, //	滑动动画时长1s
    //功能模块
    //大嘴头条图标
    headlinesImg: "../../assets/images/landscape.png",
    //大嘴头条内容
    headLines: [],
    components: [],
    //新品菜
    newGoods: [],
    //经典菜
    classicGoods: [],
    classifyList: [],
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
    this.setData({
      classifyList: app.globalData.classifyList.myTrump,
      newGoods: app.globalData.classifyList.newGoods,
      classicGoods: app.globalData.classifyList.classicGoods,
      components: app.globalData.classifyList.components,
      headLines: app.globalData.classifyList.headLines,
  });
  console.log(111);
  console.log(this.data.classifyList);
  },
  ordinInCart: function(e){
    console.log(e);
    let id = e.currentTarget.dataset.id;
    let classifyList = this.data.classifyList;
    let carts = app.globalData.carts;
    for(let item of classifyList)
    {
      if (item.id == id  && item.stock) {
        if (!item.selected) {
          console.log("addsuccess");
          carts.push(item);
          app.globalData.cartTotal++;
          app.globalData.cartTotalPrice += item.price;
          item.selected = true;
        }else if(item.selected){
          app.globalData.carts = carts.filter((cartItem)=>{   //filter返回新数组，所以不能用carts接受，
                                    //不然app.globalData.carts不能改变
             return cartItem.id !=id;
           }); 
          console.log("deletesuccess");
          app.globalData.cartTotal--;
          app.globalData.cartTotalPrice -= item.price;
          item.selected = false;
        }
      }
    }
    console.log( this.data.classifyList);
    this.setData({
			cart : app.globalData.carts,
			cartTotal: app.globalData.cartTotal,
			cartTotalPrice : app.globalData.cartTotalPrice,
			classifyList: this.data.classifyList,
		});
		app.globalData.classifyList.myTrump=this.data.classifyList;
       //将信息加入全局的购物车中
       console.log(this.data.classifyList);
		console.log(app.globalData.carts);
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
    this.setData({
      classifyList: app.globalData.classifyList.myTrump,
      newGoods: app.globalData.classifyList.newGoods,
      classicGoods: app.globalData.classifyList.classicGoods,
      components: app.globalData.classifyList.components,
      headLines: app.globalData.classifyList.headLines,

  });
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